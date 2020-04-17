import React, { Component, createRef } from 'react';
import { Cascader, Tag, Button, Checkbox, Tooltip, Form, Radio, Table, Input, Drawer, Modal, message } from 'antd';
import cx from 'classnames';
import XLSX from 'xlsx';
import pinyin from 'pinyin';
import PropTypes from 'prop-types';

import locale from 'config/locale';
import { UploadBtn, Select, ColorPicker, DialogOrderDetail, InputNumber } from 'component';
import { MServer, convertBase64UrlToBlob } from 'public/utils';
import style from 'public/theme/pages/index.less';

const defaultHeight = 560;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            expressList: [],
            partList: [],
            selectParts: [],
            selectedRowKeys: [],
            lockTexture: '',
            selectColor: null,
            textures: [],
            importExcelData: null,
            selectedRow: null,
            preview: true,
            submit: false,
            drawer: false,
            drawerTitle: ''
        };
        this.cateObj = {};
        this.select = null;
        this.image = null;
        this.imageOpt = {
            x: 0,
            y: 0,
            color: 'tran',
            size: 100,
            rotate: 0
        };
        this.token = null;
        this.auto = false;
        this.cateList = [];
        this.submitOrderObj = {};
        this.defaultBrankSortMap = {};
        const handles = ['uploadImage', 'handleChangeSize', 'handleUploadOrderExcel', 'handleSubmit'];
        handles.forEach(item => {
            this[item] = this[item].bind(this);
        });
        // ref
        this.moveRef = createRef();
        this.uploadRef = createRef();
        this.dragBox1 = createRef();
        this.dragBox2 = createRef();
        this.sizeInputRef = createRef();
        this.rotateInputRef = createRef();
        this.dialogDetailRef = createRef();
        this.sizeImageRef = createRef();
        this.cascaderRef = createRef();
    }

    componentDidMount() {
        this.getList();
        this.listener();
        this.getExpress();
        this.getPart();
        this.getTextureList();
        MServer.get('/upload/getToken').then(res => {
            if (res.errcode == 0) {
                this.token = res.data.token;
            }
        });
    }

    getImagePreview() {
        const domUpload = this.uploadRef.current;
        const { imageOpt } = this;
        domUpload.style.left = `${imageOpt.x}px`;
        domUpload.style.top = `${imageOpt.y}px`;
        domUpload.style.transform = `rotate(${imageOpt.rotate}deg)`;
    }

    getResultImage() {
        const { x, y, color, rotate } = this.imageOpt;
        let { size } = this.imageOpt;
        const imageSize = this.sizeImageRef.current;
        const domMove = this.moveRef.current;
        const left = x - (domMove.offsetWidth - imageSize.width) / 2;

        const domUpload = this.uploadRef.current;
        const power = imageSize.naturalHeight / defaultHeight;
        size = size * power / 100;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.setAttribute('width', imageSize.naturalWidth);
        canvas.setAttribute('height', imageSize.naturalHeight);

        if (color != 'tran') {
            context.rect(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);
            context.fillStyle = color;
            context.fill();
        }
        let _x = left * power;
        let _y = y * power;
        if (rotate) {
            const transX = _x + domUpload.naturalWidth * size / 2;
            const transY = _y + domUpload.naturalHeight * size / 2;
            context.translate(transX, transY);
            context.rotate(rotate * Math.PI / 180);
            context.translate(-transX, -transY);
        }
        if (domUpload) {
            context.drawImage(domUpload, _x, _y, domUpload.naturalWidth * size, domUpload.naturalHeight * size);
        }
        const imageData = context.getImageData(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);

        const imageCanvas = document.createElement('canvas');
        const ctx = imageCanvas.getContext('2d');
        imageCanvas.setAttribute('width', imageSize.naturalWidth);
        imageCanvas.setAttribute('height', imageSize.naturalHeight);
        ctx.drawImage(imageSize, 0, 0, imageSize.naturalWidth, imageSize.naturalHeight);
        const sizeData = ctx.getImageData(0, 0, imageSize.naturalWidth, imageSize.naturalHeight);

        for (let i = 0; i < sizeData.data.length; i += 4) {
            if (sizeData.data[i + 3] !== 0) {
                imageData.data[i + 3] = 0;
            }
        }
        context.putImageData(imageData, 0, 0);

        return canvas.toDataURL('image/png');
    }

    getExpress() {
        MServer.get('/logis/list', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    expressList: res.data
                });
            }
        });
    }

    getPart() {
        MServer.get('/part/userlist', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    partList: res.data.reverse()
                });
            }
        });
    }

    getTextureList() {
        MServer.get('/cate/texture', {
            is_all: 1,
            sort: 'asc'
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    textures: res.data
                });
            }
        });
    }

    listener () {
        const domMove = this.moveRef.current;
        let startPageX = null;
        let startPageY = null;
        domMove.addEventListener('dragenter', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
        domMove.addEventListener('dragover', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
        domMove.addEventListener('dragleave', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
        domMove.addEventListener('drop', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.uploadImage(e.dataTransfer.files[0]);
        });
        this.documentLister1 = e => {
            if (!this.auto && e.target.tagName != 'INPUT' && [87, 83, 82, 65, 68, 69].includes(e.keyCode)) {
                if (e.keyCode == 87) {
                    this.imageOpt.y = this.imageOpt.y - 1;
                    this.getImagePreview();
                }
                if (e.keyCode == 83) {
                    this.imageOpt.y = this.imageOpt.y + 1;
                    this.getImagePreview();
                }
                if (e.keyCode == 65) {
                    this.imageOpt.x = this.imageOpt.x - 1;
                    this.getImagePreview();
                }
                if (e.keyCode == 68) {
                    this.imageOpt.x = this.imageOpt.x + 1;
                    this.getImagePreview();
                }
                if (e.keyCode == 69) {
                    this.handleChangeSize(this.imageOpt.size + 0.2);
                }
                if (e.keyCode == 82) {
                    this.handleChangeSize(this.imageOpt.size - 0.2);
                }
            }
        };
        document.addEventListener('keydown', this.documentLister1);

        const moveListener = e => {
            const domUpload = this.uploadRef.current;
            if (!domUpload || this.auto) return;
            this.imageOpt.x = e.pageX - startPageX;
            this.imageOpt.y = e.pageY - startPageY;
            this.getImagePreview();
        };
        this.hasKeyListener = true;
        domMove.addEventListener('mousedown', e => {
            startPageX = e.pageX - this.imageOpt.x;
            startPageY = e.pageY - this.imageOpt.y;
            document.addEventListener('mousemove', moveListener);
        });
        this.documentLister2 = () => {
            document.removeEventListener('mousemove', moveListener);
        };
        document.addEventListener('mouseup', this.documentLister2);
        if (this.dragBox1.current) {
            const box = this.dragBox1.current;
            let sx = null;
            let size = null;
            const listener = e => {
                const current = e.clientX - sx;
                box.style.left = `${current}px`;
                const diff = (current - 558) / 10;
                const value = size + diff;
                if (value >= 1 && this.image && !this.auto) {
                    this.handleChangeSize(value);
                }
            };
            box.addEventListener('mousedown', e => {
                e.stopPropagation();
                e.preventDefault();
                sx = e.clientX - box.offsetLeft;
                size = parseFloat(this.imageOpt.size);
                document.addEventListener('mousemove', listener);
            });
            this.documentLister3 = e => {
                // e.stopPropagation();
                // e.preventDefault();
                box.style.left = '558px';
                document.removeEventListener('mousemove', listener);
            };
            document.addEventListener('mouseup', this.documentLister3);
        }
        if (this.dragBox2.current) {
            const box = this.dragBox2.current;
            let sx = null;
            let rotate = this.imageOpt.rotate;
            const listener = e => {
                if (!this.image) return;
                const current = e.clientX - sx;
                box.style.left = `${current}px`;
                const diff = (current - 558);
                let value = Math.abs(rotate + diff);
                if (value > 360) value = 0;
                if (this.image && !this.auto) {
                    this.imageOpt.rotate = value;
                    this.getImagePreview();
                    this.rotateInputRef.current && this.rotateInputRef.current.setState({
                        value
                    });
                }
            };
            box.addEventListener('mousedown', e => {
                e.stopPropagation();
                e.preventDefault();
                sx = e.clientX - box.offsetLeft;
                document.addEventListener('mousemove', listener);
            });
            this.documentLister4 = e => {
                // e.stopPropagation();
                // e.preventDefault();
                box.style.left = '558px';
                document.removeEventListener('mousemove', listener);
            };
            document.addEventListener('mouseup', this.documentLister4);
        }
    }

    componentWillUnmount() {
        if (!this.documentLister1) document.removeEventListener('keydown', this.documentLister1);
        if (!this.documentLister2) document.removeEventListener('mouseup', this.documentLister2);
        if (!this.documentLister3) document.removeEventListener('mouseup', this.documentLister3);
        if (!this.documentLister4) document.removeEventListener('mouseup', this.documentLister4);
    }

    getList() {
        MServer.get('/cate/list', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.cateList = res.data;
                return MServer.get('/cate/brand', {
                    is_all: 1,
                    order: 'sort',
                }).then(res => {
                    if (res.errcode == 0) {
                        res.data.forEach(item => {
                            this.defaultBrankSortMap[item.id] = item.sort;
                        });

                    }
                    return true;
                });
            }
            return false;
        }).then(res => {
            if (res) {
                this.convertList();
            }
        });
    }

    convertList() {
        const { lockTexture } = this.state;
        const cateIds = {};
        const typeIds = {};
        const list = [];
        let data = [].concat(this.cateList);
        if (lockTexture) {
            data = data.filter(item => item.texture_id == lockTexture);
            data.forEach(item => {
                if (typeof cateIds[item.brand_id] == 'undefined') {
                    cateIds[item.brand_id] = list.length;
                    list.push({
                        value: item.brand_id,
                        label: item.brand_name,
                        sort: this.defaultBrankSortMap[item.brand_id] || 0,
                        children: [
                            {
                                value: item.id,
                                label: item.brand_type_name
                            }
                        ]
                    });
                } else {
                    list[cateIds[item.brand_id]].children.push({
                        value: item.id,
                        label: item.brand_type_name
                    });
                }
            });
        } else {
            data.forEach(item => {
                if (typeof cateIds[item.brand_id] == 'undefined') {
                    cateIds[item.brand_id] = list.length;
                    list.push({
                        value: item.brand_id,
                        label: item.brand_name,
                        sort: this.defaultBrankSortMap[item.brand_id] || 0,
                        children: [
                            {
                                value: item.brand_type_id,
                                label: item.brand_type_name,
                                children: [
                                    {
                                        value: item.id,
                                        label: item.texture_name,
                                    }
                                ]
                            }
                        ]
                    });
                    typeIds[`${item.brand_id}_${item.brand_type_id}`] = 0;
                } else {
                    if (typeof typeIds[`${item.brand_id}_${item.brand_type_id}`] == 'undefined') {
                        typeIds[`${item.brand_id}_${item.brand_type_id}`] = list[cateIds[item.brand_id]].children.length;
                        list[cateIds[item.brand_id]].children.push({
                            value: item.brand_type_id,
                            label: item.brand_type_name,
                            children: [
                                {
                                    value: item.id,
                                    label: item.texture_name,
                                }
                            ]
                        });
                    } else {
                        list[cateIds[item.brand_id]].children[typeIds[`${item.brand_id}_${item.brand_type_id}`]].children.push({
                            value: item.id,
                            label: item.texture_name,
                        });
                    }
                }
                this.cateObj[item.id] = item;
            });
        }
        const sortByName = list => list.sort((a, b) => {
            if (a.sort != b.sort) {
                return b.sort - a.sort;
            }
            return pinyin(a.label.trim(), {
                style: pinyin.STYLE_FIRST_LETTER
            })[0][0].charCodeAt() - pinyin(b.label.trim(), {
                style: pinyin.STYLE_FIRST_LETTER
            })[0][0].charCodeAt();
        });

        this.setState({
            list: sortByName(list.map(item => ({
                ...item,
                children: item.children ? item.children.sort((a, b) => {
                    const text1 = a.label.trim();
                    const text2 = b.label.trim();
                    let noResult = true;
                    let result = 0;
                    let i = 0;
                    while (noResult) {
                        if (typeof text1[i] == 'undefined') return -1;
                        if (typeof text2[i] == 'undefined') return 1;
                        if (text1[i] == text2[i]) {
                            i++;
                        } else {
                            result = text1[i].charCodeAt() - text2[i].charCodeAt();
                            noResult = false;
                        }
                    }
                    return result;
                }).map(it => ({
                    ...it,
                    children: it.children ? sortByName(it.children) : undefined
                })) : undefined
            })))
        });
    }

    uploadImage(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const that = this;

        reader.onload = function () {
            const img = new Image();
            img.src = that.image = this.result;
            img.onload = () => {
                that.autoImage(img);
            };
        };
    }

    autoImage(img) {
        const domMove = this.moveRef.current;
        const domUpload = this.uploadRef.current;
        const imageSize = this.sizeImageRef.current;
        if (!domUpload) {
            message.error('请先上传图片');
            return;
        }
        const getSpaceValue = () => {
            if (!imageSize) return {
                x: 0,
                y: 0
            };
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.setAttribute('height', imageSize.width);
            canvas.setAttribute('width', imageSize.height);
            context.drawImage(imageSize, 0, 0, imageSize.width, imageSize.height);
            const imageData = context.getImageData(0, 0, imageSize.width, imageSize.height);
            let lineWidth = 0;
            let countHeight = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i + 3] != 0) {
                    lineWidth++;
                    if (lineWidth == imageSize.width) {
                        lineWidth = 0;
                        countHeight++;
                    }
                } else {
                    break;
                }
            }
            let countWidth = 0;
            for (let i = imageSize.width * 80 * 4; i < imageData.data.length; i += 4) {
                if (imageData.data[i + 3] != 0) {
                    countWidth++;
                } else {
                    break;
                }
            }
            return {
                x: countWidth - 2,
                y: countHeight - 2
            };
        };
        const spaceValue = getSpaceValue();
        let initHeight = defaultHeight - spaceValue.y * 2;
        let ratio = initHeight / img.naturalHeight;
        let initWidth = img.naturalWidth * ratio;
        if (imageSize) {
            if (initWidth < (imageSize.offsetWidth - spaceValue.x * 2)) {
                initWidth = imageSize.offsetWidth - spaceValue.x * 2;
                ratio = initWidth / img.naturalWidth;
                initHeight = img.naturalHeight * ratio;
            }
        }

        domUpload.style.height = `${(initHeight)}px`;
        this.imageOpt.size = (ratio * 100).toFixed(2);
        this.imageOpt.x = (domMove.offsetWidth - initWidth) / 2;
        this.imageOpt.y = ((imageSize ? imageSize.offsetHeight : initHeight) - initHeight) / 2;
        this.sizeInputRef.current && this.sizeInputRef.current.setState({
            value: this.imageOpt.size
        });
        this.getImagePreview();
        this.forceUpdate();
    }

    getDefaultExpress() {
        const { expressList } = this.state;
        const defaultList = expressList.filter(item => item.default);
        if (defaultList.length) {
            return defaultList[0].id;
        }
        return undefined;
    }

    handleChangeSize(value) {
        const domUpload = this.uploadRef.current;
        if (!domUpload || !this) return;
        value = parseFloat(value);
        domUpload.style.height = `${domUpload.naturalHeight * value / 100}px`;
        this.imageOpt.x = this.imageOpt.x + domUpload.naturalWidth * (this.imageOpt.size - value) / 200;
        this.imageOpt.y = this.imageOpt.y + domUpload.naturalHeight * (this.imageOpt.size - value) / 200;
        this.imageOpt.size = value;

        this.getImagePreview();

        this.sizeInputRef.current && this.sizeInputRef.current.setState({
            value: this.imageOpt.size
        });
    }

    handleUploadOrderExcel(file, type = 'taobao', title) {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        const that = this;
        reader.onload = function () {
            const workbook = XLSX.read(this.result, { type: 'binary' });
            const workbookJson = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            const result = [];
            workbookJson.forEach((item, index) => {
                let mobile = item['联系手机'] || item['手机'];
                if (mobile) mobile = mobile.toString().match(/[1-9]\d*/)[0];
                const adsplit = type === 'taobao' ? (item['收货地址'] || item['收货地址 '] || '').trim().split(/\s+/) : [
                    item['省'],
                    item['市'],
                    item['区'],
                    item['街道']
                ];
                result.push({
                    order_sn: (item['订单编号'] || item['订单号'] || '').toString().trim(),
                    consignee: (item['收货人姓名'] || item['收货人'] || '').toString().trim(),
                    mobile,
                    province: adsplit[0] && adsplit[0].trim(),
                    city: adsplit[1] && adsplit[1].trim(),
                    district: adsplit[2] && adsplit[2].trim(),
                    address: adsplit.slice(3).join(' '),
                    seller_remark: item['订单备注'] || item['商家备注'],
                    buyer_remark: item['买家留言'],
                    remark: item['自定义备注'],
                    index
                });
            });
            that.setState({
                drawer: true,
                drawerTitle: title,
                importExcelData: result
            });
        };
    }

    handleSelectRow(selectedRow) {
        const { form: { setFieldsValue } } = this.props;

        setFieldsValue({
            order_sn: selectedRow.order_sn
        });
        this.setState({
            selectedRowKeys: selectedRow.order_sn,
            selectedRow,
            drawer: false
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.select) {
            message.error('请先选择机型');
            return;
        }
        if (!this.image && this.imageOpt.color == 'tran') {
            message.error('请至少上传一张图片或者设置一个颜色');
            return;
        }

        const { form: { validateFields, setFieldsValue } } = this.props;
        const { selectedRow, selectParts, importExcelData, selectColor } = this.state;

        validateFields((err, values) => {
            if (!err) {
                if (!this.token) {
                    message.error('网络出错了，刷新页面试试');
                    return;
                }
                this.setState({
                    submit: true
                });
                const formdata = new FormData();
                formdata.append('file', convertBase64UrlToBlob(this.getResultImage()), `${new Date().getTime()}.png`);
                formdata.append('token', this.token);

                MServer.post('//upload-z0.qiniup.com', formdata, {
                    withCredentials: false,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    silent: true
                }).then(res => {
                    if (res.key) {
                        return `${locale[process.env.NODE_ENV].url.cdnUser}${res.key}`;
                    } else {
                        throw new Error('图片上传失败');
                    }
                }).then(res => {
                    let params = {
                        type: values.type,
                        order_sn: values.order_sn,
                        quantity: values.quantity,
                        cate_id: this.select.id,
                        image1: res
                    };
                    // if (values.texture_attr_id) params.texture_attr_id = values.texture_attr_id;
                    if (selectColor && this.select.texture_attr.length) {
                        params.texture_attr_id = this.select.texture_attr.find(item => item.texture_attr_color === selectColor).texture_attr_id;
                    }
                    if (values.express_id) params.express_id = values.express_id;
                    if (selectParts.length) {
                        params.parts = selectParts.map(item => ({
                            id: item,
                            count: values[`part_${item}`]
                        }));
                    }
                    if (params.type == 10 && selectedRow) {
                        params = {
                            ...params,
                            consignee: selectedRow.consignee,
                            mobile: selectedRow.mobile,
                            province: selectedRow.province,
                            city: selectedRow.city,
                            district: selectedRow.district,
                            address: selectedRow.address,
                        };
                        if (!params.province) {
                            message.error('未获取到收货地址');
                            return;
                        }
                    }
                    MServer.post('/order/save', params).then(res => {
                        if (res.errcode == 0) {
                            this.setState({
                                submit: false,
                                // selectParts: []
                            });
                            this.imageOpt.color = 'tran';
                            setFieldsValue({
                                quantity: 1,
                                // express_id: this.getDefaultExpress()
                            });
                            const catename = `${this.select.brand_name} ${this.select.brand_type_name} ${this.select.texture_name}`;
                            if (!this.submitOrderObj[values.order_sn]) {
                                this.submitOrderObj[values.order_sn] = {
                                    count: 1,
                                    obj: {
                                        [this.select.id]: {
                                            name: catename,
                                            count: 1
                                        }
                                    }
                                };
                            } else {
                                this.submitOrderObj[values.order_sn].count++;
                                if (!this.submitOrderObj[values.order_sn].obj[this.select.id]) {
                                    this.submitOrderObj[values.order_sn].obj[this.select.id] = {
                                        name: catename,
                                        count: 1
                                    };
                                } else {
                                    this.submitOrderObj[values.order_sn].obj[this.select.id].count++;
                                }
                            }
                            Modal.confirm({
                                title: '订单已提交成功',
                                okText: '继续下单',
                                cancelText: '查看订单',
                                onOk: () => {
                                    values.type == 10 && importExcelData && this.setState({
                                        drawer: true
                                    });
                                },
                                onCancel: () => {
                                    this.setState({
                                        order_sn: values.order_sn
                                    }, () => {
                                        if (this.dialogDetailRef.current) this.dialogDetailRef.current.open();
                                    });
                                },
                            });
                        } else {
                            this.setState({
                                submit: false
                            });
                        }
                    });
                }).catch(err => {
                    message.error(err.message);
                });
            }
        });
    }

    render() {
        const { select, image, imageOpt, auto } = this;
        const { list, preview, submit, expressList, partList, selectParts, selectColor, textures, importExcelData, selectedRow, drawer, drawerTitle, selectedRowKeys, lockTexture } = this.state;
        const { form: { getFieldDecorator, getFieldValue } } = this.props;
        const defaultColors = [
            {
                label: '透明',
                value: 'tran'
            },
            {
                label: '黑色',
                value: '#000'
            },
            {
                label: '白色',
                value: '#fff'
            },
            {
                label: '红色',
                value: '#ff1300'
            },
            {
                label: '自定义',
                value: -1
            }
        ];
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.handleSelectRow(selectedRows[0]);
            },
        };
        const colorSelectValue = defaultColors.map(item => item.value).includes(imageOpt.color) ? imageOpt.color : -1;

        return (
            <div className="page-layout-center">
                <DialogOrderDetail ref={this.dialogDetailRef} order_sn={getFieldValue('order_sn')} />
                <div className={style.layoutHome}>
                    <div className={style.layoutHomeBd}>
                        <div className={style.layoutHomeLeft}>
                            <Cascader
                                showSearch={{
                                    filter: (input, path) => {
                                        if (!input) return true;
                                        input = input.toLowerCase();
                                        const labels = path.map(item => item.label.replace(/\s*/g, '').toLowerCase()).join('');
                                        const inputKeys = input.split(' ');
                                        let has = true;
                                        for (let i = 0; i < inputKeys.length; i++) {
                                            const item = inputKeys[i];
                                            if (labels.indexOf(item) == -1) {
                                                has = false;
                                                break;
                                            }
                                        }
                                        return has;
                                    }
                                }}
                                ref={this.cascaderRef}
                                allowClear={false}
                                options={list}
                                style={{ width: 240 }}
                                placeholder="选择手机型号，支持搜索"
                                onChange={value => {
                                    this.select = this.cateObj[value[value.length - 1]];
                                    MServer.get(`/cate/catetextureattr/${this.select.id}`).then(res => {
                                        this.select.texture_attr = [];
                                        if (res.errcode == 0 && res.data && res.data.length) {
                                            this.select.texture_attr = res.data;
                                            this.setState({
                                                selectColor: res.data[0].texture_attr_color
                                            });
                                        } else {
                                            this.setState({
                                                selectColor: null
                                            });
                                        }
                                    });
                                }}
                            />
                            <div className="card-item">
                                <div className="card-item-title">锁定材质</div>
                                <Radio.Group
                                    value={lockTexture}
                                    options={[{
                                        label: '全部材质',
                                        value: ''
                                    }].concat(textures.map(item => ({
                                        label: item.name,
                                        value: item.id
                                    })))}
                                    onChange={e => {
                                        this.select = null;
                                        this.cascaderRef.current && this.cascaderRef.current.setState({ value: [] });
                                        this.setState({
                                            lockTexture: e.target.value
                                        }, this.convertList);
                                    }}
                                ></Radio.Group>
                            </div>
                            {select && select.texture_attr.length ? <div className="card-item">
                                <div className="card-item-title">选择属性(颜色)</div>
                                <Radio.Group
                                    value={selectColor}
                                    options={select.texture_attr.map(item => ({
                                        label: item.texture_attr_name,
                                        value: item.texture_attr_color
                                    }))}
                                    onChange={e => {
                                        // this.select = null;
                                        // this.cascaderRef.current && this.cascaderRef.current.setState({ value: [] });
                                        // this.setState({
                                        //     lockTexture: e.target.value
                                        // }, this.convertList);
                                        this.setState({
                                            selectColor: e.target.value
                                        });
                                    }}
                                ></Radio.Group>
                            </div> : null }
                        </div>
                        <div>
                            <div className={style.layoutHomeHd}>
                                <UploadBtn.Local
                                    buttonProps={{
                                        type: 'primary',
                                        icon: 'cloud-upload'
                                    }}
                                    text="上传图片"
                                    onUpload={this.uploadImage}
                                />
                                <Button style={{ marginLeft: '15px' }} onClick={() => this.setState({ preview: !preview })}>{preview ? '编辑' : '预览'}</Button>
                                <Button style={{ marginLeft: '15px' }} onClick={() => this.autoImage(this.uploadRef.current)}>初始化图片</Button>
                            </div>
                            <div ref={this.moveRef} className={style.phonePreview}>
                                <Tooltip title="上传图片后，拖动进行放大缩小"><div className={style.box1} ref={this.dragBox1}></div></Tooltip>
                                <Tooltip title="上传图片后，拖动进行旋转"><div className={style.box2} ref={this.dragBox2}></div></Tooltip>
                                <img
                                    ref={this.uploadRef}
                                    className={style.uploadImage}
                                    crossOrigin=""
                                    src={image}
                                />
                                {
                                    select ? [
                                        <div key="main" className={style.phoneBox}>
                                            <div 
                                                className={cx({
                                                    [style.phoneBoxBody]: true,
                                                    preview: preview || auto
                                                })}
                                            >
                                                <div className="bg"></div>
                                                <div className={style.phoneBoxBodyImage}>
                                                    <img
                                                        ref={this.sizeImageRef}
                                                        className={style.phonePreviewMain}
                                                        crossOrigin=""
                                                        src={`${locale[process.env.NODE_ENV].url.cdn}${select.size_img}`}
                                                    />
                                                    {select.camera_img ?
                                                        <img
                                                            className={style.phonePreviewCamera}
                                                            crossOrigin=""
                                                            src={`${locale[process.env.NODE_ENV].url.cdn}${select.camera_img}`}
                                                        />
                                                        : null}
                                                </div>
                                                <div className="bg"></div>
                                            </div>
                                        </div>,
                                        <div 
                                            key="bg" 
                                            className={style.phoneBoxBg}
                                            style={imageOpt.color != 'tran' ? {
                                                backgroundColor: imageOpt.color == -1 ? '#000' : imageOpt.color,
                                                backgroundImage: 'none'
                                            } : (selectColor ? {
                                                backgroundColor: selectColor,
                                                backgroundImage: 'none'
                                            } : {})}
                                        >
                                            <div></div>
                                            <img
                                                style={{
                                                    opacity: 0
                                                }}
                                                className={style.phonePreviewMain}
                                                crossOrigin=""
                                                src={`${locale[process.env.NODE_ENV].url.cdn}${select.size_img}`}
                                            />
                                            <div></div>
                                        </div>
                                    ] : null
                                }
                            </div>
                            <div className={style.homeFooter}>
                                <div className="input-group">
                                    <span>缩放：</span>
                                    <InputNumber
                                        ref={this.sizeInputRef}
                                        placeholder="比例"
                                        precision={2}
                                        onChange={this.handleChangeSize}
                                        disabled={auto}
                                    />
                                    <span style={{ marginLeft: '10px' }}>%</span>
                                </div>
                                <div className="input-group">
                                    <span>旋转：</span>
                                    <InputNumber
                                        disabled={auto}
                                        ref={this.rotateInputRef}
                                        precision={2}
                                        defaultValue={0}
                                        onChange={value => {
                                            this.imageOpt.rotate = value;
                                            this.getImagePreview();
                                        }}
                                        placeholder="角度"
                                    />
                                </div>
                                <div className="input-group" style={{ marginRight: '20px' }}>
                                    <span>背景色设置：</span>
                                    <Select
                                        style={{ width: 120 }}
                                        value={colorSelectValue}
                                        onChange={value => {
                                            this.imageOpt.color = value;
                                            this.forceUpdate();
                                        }}
                                        options={defaultColors}
                                    />
                                    {
                                        colorSelectValue == -1 ? (
                                            <div style={{ display: 'inline-block', position: 'relative', top: '5px', left: '10px' }}>
                                                <ColorPicker
                                                    color={imageOpt.color == -1 ? '#000' : imageOpt.color}
                                                    onChange={c => {
                                                        this.imageOpt.color = c.color;
                                                        this.forceUpdate();
                                                    }}
                                                />
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className={style.remark}>
                                    <span><Tag>W</Tag>上移</span>，
                                    <span><Tag>S</Tag>下移</span>，
                                    <span><Tag>A</Tag>左移</span>，
                                    <span><Tag>D</Tag>右移</span>，
                                    <span><Tag>E</Tag>放大</span>，
                                    <span><Tag>R</Tag>缩小</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.orderConfig}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item label="订单类型">
                                    {
                                        getFieldDecorator('type', {
                                            initialValue: 0
                                        })(
                                            <Radio.Group 
                                                options={[{
                                                    label: '普通订单',
                                                    value: 0
                                                }, {
                                                    label: '充值订单',
                                                    value: 10
                                                }]}
                                            />
                                        )
                                    }
                                </Form.Item>
                                {
                                    getFieldValue('type') == 10 ? (
                                        <Form.Item>
                                            <UploadBtn.Local
                                                accept=".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                text="导入淘宝订单"
                                                onUpload={file => this.handleUploadOrderExcel(file, 'taobao', '导入淘宝订单')}
                                                style={{ marginRight: 10 }}
                                            />
                                            <UploadBtn.Local
                                                accept=".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                text="导入拼多多订单"
                                                onUpload={file => this.handleUploadOrderExcel(file, 'pdd', '导入拼多多订单')}
                                            />
                                            {
                                                importExcelData ? (
                                                    <div>
                                                        <Button type="primary" onClick={() => this.setState({ drawer: true })}>打开导入的订单</Button>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                selectedRow ? (
                                                    <div className={style.remarkBox}>
                                                        <p style={{ marginBottom: '10px', lineHeight: 1 }}>订单备注：{selectedRow.seller_remark}</p>
                                                        <p style={{ marginBottom: '10px', lineHeight: 1 }}>买家留言：{selectedRow.buyer_remark}</p>
                                                        <p style={{ marginBottom: '0', lineHeight: 1 }}>自定义备注：{selectedRow.remark}</p>
                                                    </div>
                                                ) : null
                                            }
                                        </Form.Item>
                                    ) : null
                                }
                                <Form.Item label="配货标签" extra={getFieldValue('order_sn') ? (
                                    <a 
                                        className="text-info" 
                                        onClick={() => {
                                            this.dialogDetailRef.current && this.dialogDetailRef.current.open();
                                        }}
                                    >查看订单</a>
                                ) : null}>
                                    {
                                        getFieldDecorator('order_sn', {
                                            rules: [{
                                                required: true,
                                                message: '配货标签不能为空'
                                            }]
                                        })(
                                            <Input placeholder="填写标签" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item label="订货数量">
                                    {
                                        getFieldDecorator('quantity', {
                                            rules: [{
                                                required: true,
                                                message: '订货数量不能为空'
                                            }],
                                            initialValue: 1
                                        })(
                                            <InputNumber precision={0} min={1} max={1000} />
                                        )
                                    }
                                </Form.Item>
                                {
                                    getFieldValue('type') == 10 ? (
                                        <Form.Item label="选择物流">
                                            {
                                                getFieldDecorator('express_id', {
                                                    rules: [{
                                                        required: true,
                                                        message: '请先选择物流'
                                                    }],
                                                    initialValue: expressList.length ? this.getDefaultExpress() : undefined
                                                })(
                                                    <Select options={expressList} fieldName={{ value: 'id', label: 'name' }} />
                                                )
                                            }
                                        </Form.Item>
                                    ) : null
                                }
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" loading={submit}>提交订单</Button>
                                </Form.Item>
                                {
                                    getFieldValue('type') == 10 && partList.length ? (
                                        <Table
                                            rowKey="id"
                                            dataSource={partList}
                                            pagination={false}
                                            size="small"
                                            // style={{ marginBottom: '15px' }}
                                            rowSelection={{
                                                selectedRowKeys: selectParts,
                                                onChange: (selectedRowKeys) => {
                                                    this.setState({
                                                        selectParts: selectedRowKeys
                                                    });
                                                },
                                            }}
                                            columns={[
                                                {
                                                    key: 'name',
                                                    dataIndex: 'name',
                                                    title: '配件'
                                                },
                                                {
                                                    key: 'number',
                                                    dataIndex: 'id',
                                                    title: '购买数量',
                                                    render: (id) => <Form.Item className="no-margin">
                                                        {
                                                            getFieldDecorator(`part_${id}`, selectParts.includes(id) ? {
                                                                rules: [{
                                                                    required: true,
                                                                    message: '请输入赠品数量'
                                                                }],
                                                                initialValue: 1
                                                            } : {
                                                                initialValue: 1
                                                            })(
                                                                <InputNumber min={1} max={1000} />
                                                            )
                                                        }
                                                    </Form.Item>
                                                }
                                            ]}
                                        ></Table>
                                    ) : null
                                }
                            </Form>
                        </div>
                    </div>
                </div>
                <Drawer
                    title={drawerTitle}
                    placement="bottom"
                    height={720}
                    bodyStyle={{ padding: 0 }}
                    // closable={false}
                    onClose={() => this.setState({ drawer: false })}
                    visible={drawer}
                >
                    <Table
                        rowKey="order_sn"
                        rowSelection={rowSelection}
                        dataSource={importExcelData}
                        onRow={(row) => ({
                            onClick: () => {
                                this.handleSelectRow(row);
                            }
                        })}
                        columns={[
                            {
                                key: 'order_sn',
                                dataIndex: 'order_sn',
                                title: '订单编号',
                                render: (text, record) => {
                                    return <span>{text}{this.submitOrderObj[record.order_sn] ? <Tooltip title={(
                                        <div className={style.tooltipContent}>
                                            {Object.keys(this.submitOrderObj[record.order_sn].obj).map(item => (
                                                <p key={item}>{this.submitOrderObj[record.order_sn].obj[item].name} {this.submitOrderObj[record.order_sn].obj[item].count}次</p>
                                            ))}
                                        </div>
                                    )}>
                                        <span className="text-success">
                                            (已提交{this.submitOrderObj[record.order_sn].count}次)
                                        </span>
                                    </Tooltip> : null}</span>;
                                }
                            },
                            {
                                key: 'consignee',
                                dataIndex: 'consignee',
                                title: '收件人姓名',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 80 }}
                                    onChange={e => {
                                        importExcelData[record.index].consignee = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'mobile',
                                dataIndex: 'mobile',
                                title: '联系手机',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 122 }}
                                    onChange={e => {
                                        importExcelData[record.index].mobile = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'province',
                                dataIndex: 'province',
                                title: '省',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 80 }}
                                    onChange={e => {
                                        importExcelData[record.index].province = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'city',
                                dataIndex: 'city',
                                title: '市',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 80 }}
                                    onChange={e => {
                                        importExcelData[record.index].city = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'district',
                                dataIndex: 'district',
                                title: '区',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 80 }}
                                    onChange={e => {
                                        importExcelData[record.index].district = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'address',
                                dataIndex: 'address',
                                title: '详细地址',
                                render: (text, record) => <Input
                                    defaultValue={text}
                                    style={{ width: 150 }}
                                    onChange={e => {
                                        importExcelData[record.index].address = e.target.value;
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                />
                            },
                            {
                                key: 'seller_remark',
                                dataIndex: 'seller_remark',
                                title: '订单备注',
                                render: text => <Tooltip title={text}>
                                    <p style={{ width: 80, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{text}</p>
                                </Tooltip>
                            },
                            {
                                key: 'buyer_remark',
                                dataIndex: 'buyer_remark',
                                title: '买家留言',
                                render: text => <Tooltip title={text}>
                                    <p style={{ width: 80, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{text}</p>
                                </Tooltip>
                            },
                            {
                                key: 'remark',
                                dataIndex: 'remark',
                                title: '自定义备注',
                                render: text => <Tooltip title={text}>
                                    <p style={{ width: 80, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{text}</p>
                                </Tooltip>
                            }
                        ]}
                    ></Table>
                </Drawer>
            </div>
        );
    }
}

export default Form.create()(Home);

Home.propTypes = {
    form: PropTypes.object
};