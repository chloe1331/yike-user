import { Component, createRef } from 'react';
import { Form, Input, InputNumber, Button, Tag, message, Tooltip, Checkbox, Cascader } from 'antd';
import PropTypes from 'prop-types';

import { Select, ColorPicker } from 'component';
import { MServer, convertBase64UrlToBlob } from 'public/utils';
import style from 'public/theme/pages/index.less';
import locale from 'config/locale';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            image: null,
            preview: null,
            submit: false,
            color: 'tran',
            pickerColor: '#000',
            auto: false
        };
        const handles = ['handleSize', 'handleRotate', 'handlePreview', 'handleSubmit'];
        handles.forEach(item => this[item] = this[item].bind(this));
        this.transBgRef = createRef();
        this.imageUploadRef = createRef();
        this.imageBgRef = createRef();
        this.imageCameraRef = createRef();
        this.canvasRef = createRef();
        this.canvasCameraRef = createRef();
        this.boxRef = createRef();
        this.previewDialogRef = createRef();
        this.dragBox1 = createRef();
        this.dragBox2 = createRef();
        this.sizeInputRef;
        this.rotateInputRef;
        this.uploadInputRef = null;
        this.select = null; // 选择到的机型
        this.moveOptions = {
            x: 0,
            rotate: 0
        };
        this.hasKeyListener = false;
        this.cateObj = {};
        this.token = null;
    }

    componentDidMount() {
        this.getCates();
        this.getCanvas();

        if (this.boxRef.current) {
            this.boxRef.current.addEventListener('dragenter', (e) => {
                e.stopPropagation();
                e.preventDefault();
            });
            this.boxRef.current.addEventListener('dragover', (e) => {
                e.stopPropagation();
                e.preventDefault();
            });
            this.boxRef.current.addEventListener('dragleave', (e) => {
                e.stopPropagation();
                e.preventDefault();
            });
            this.boxRef.current.addEventListener('drop', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.readFile(e.dataTransfer.files[0]);
            });
        }
        MServer.get('/upload/getToken').then(res => {
            if (res.errcode == 0) {
                this.token = res.data.token;
            }
        });
    }

    getCates() {
        MServer.get('/cate/list', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                const cateIds = {};
                const typeIds = {};
                const list = [];

                res.data.forEach(item => {
                    if (typeof cateIds[item.brand_id] == 'undefined') {
                        cateIds[item.brand_id] = list.length;
                        list.push({
                            value: item.brand_id,
                            label: item.brand_name,
                            children: [
                                {
                                    value: item.brand_type_id,
                                    label: item.brand_type_name,
                                    children: [
                                        {
                                            value: item.id,
                                            label: item.texture_name
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
                                        label: item.texture_name
                                    }
                                ]
                            });
                        } else {
                            list[cateIds[item.brand_id]].children[typeIds[`${item.brand_id}_${item.brand_type_id}`]].children.push({
                                value: item.id,
                                label: item.texture_name
                            });
                        }
                    }
                    this.cateObj[item.id] = item;
                });
                this.setState({
                    list
                });
            }
        });
    }

    getCanvas({ power = 1, canvas = this.canvasRef.current, isRes = false } = {}) {
        const { color, pickerColor, auto } = this.state;
        const upload = this.imageUploadRef.current;
        const bg = this.imageBgRef.current;
        const camera = this.imageCameraRef.current;
        const trans = this.transBgRef.current;
        const box = this.boxRef.current;
        if (!box) return;

        const width = 320 * power;
        const boxHeight = (box.offsetHeight - 2) * power;
        const canvasWidth = box.offsetWidth * power;
        const context = canvas.getContext('2d');
        const ratio = bg && bg.complete ? width / bg.width : 1;
        const height = bg && bg.complete ? parseInt(bg.height * ratio) : boxHeight;
        const left = (canvasWidth - width) / 2;

        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', height);

        if (bg && bg.complete) {
            context.rect(left, 0, width, height);
            if (color == 'tran') {
                context.fillStyle = context.createPattern(trans, 'repeat');
            } else if (color == -1) {
                context.fillStyle = pickerColor;
            } else {
                context.fillStyle = color;
            }
            context.fill();
        }

        if (upload && upload.complete) {
            let { x, y, size, rotate } = this.moveOptions;
            if (typeof this.moveOptions.size === 'undefined') {
                size = this.moveOptions.size = upload.width > upload.height ? canvasWidth / upload.width * 100 : boxHeight / upload.height * 100;
                this.sizeInputRef.setState({
                    value: size.toFixed(2)
                });
            }
            size = size * power / 100;
            if (!y) {
                y = this.moveOptions.y = -(upload.height * size - height) / 2;
                if (upload.width < upload.height) {
                    x = this.moveOptions.x = (canvasWidth - upload.width * size) / 2;
                }
            }

            if (rotate) {
                context.translate(canvasWidth / 2, height / 2);
                context.rotate(rotate * Math.PI / 180);
                context.translate(-canvasWidth / 2, -height / 2);
            }
            if (auto) {
                const _s = height / upload.height;
                const _x = left - (upload.width * _s - width) / 2;
                context.drawImage(upload, _x, 0, upload.width * _s, upload.height * _s);
            } else {
                context.drawImage(upload, x * power, y * power, upload.width * size, upload.height * size);
            }
            if (rotate) {
                context.translate(canvasWidth / 2, height / 2);
                context.rotate(-rotate * Math.PI / 180);
                context.translate(-canvasWidth / 2, -height / 2);
            }
        }

        if (bg && bg.complete) {
            // 左侧
            const imageDataLeft = context.getImageData(0, 0, left, height);
            for (let i = 0; i < imageDataLeft.data.length; i += 4) {
                if (imageDataLeft.data[i + 3] == 0) {
                    imageDataLeft.data[i + 0] = 255;
                    imageDataLeft.data[i + 1] = 255;
                    imageDataLeft.data[i + 2] = 255;
                }
                imageDataLeft.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataLeft, 0, 0);

            // 右侧
            const imageDataRight = context.getImageData(left + width, 0, canvasWidth - width - left, height);
            for (let i = 0; i < imageDataRight.data.length; i += 4) {
                if (imageDataRight.data[i + 3] == 0) {
                    imageDataRight.data[i + 0] = 255;
                    imageDataRight.data[i + 1] = 255;
                    imageDataRight.data[i + 2] = 255;
                }
                imageDataRight.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataRight, left + width, 0);

            // 背景图
            context.drawImage(bg, 0, 0, bg.width, bg.height, left, 0, width, height);
        }
        if (!isRes && camera) {
            if (camera.complete) {
                this.getCameraCanvas();
            } else {
                camera.onload = () => {
                    this.getCameraCanvas();
                };
            }
        }
    }

    getCameraCanvas({ width = 320 } = {}) {
        const canvas = this.canvasCameraRef.current;
        const camera = this.imageCameraRef.current;
        const box = this.boxRef.current;
        const context = canvas.getContext('2d');

        const canvasWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight - 2;
        const left = (canvasWidth - width) / 2;
        const ratio = camera && camera.complete ? width / camera.width : 1;
        const height = camera && camera.complete ? parseInt(camera.height * ratio) : boxHeight;

        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', height);
        context.drawImage(camera, 0, 0, camera.width, camera.height, left, 0, width, height);
    }

    getPreviewImage({ power = 1, canvas = this.canvasRef.current, useCamera = true } = {}) {
        const bg = this.imageBgRef.current;
        const camera = this.imageCameraRef.current;
        const box = this.boxRef.current;
        const context = canvas.getContext('2d');

        const width = 320 * power;
        const ratio = width / camera.width;
        const height = parseInt(camera.height * ratio);
        const canvasWidth = box.offsetWidth * power;
        const left = (canvasWidth - width) / 2;

        const imageData = context.getImageData(left, 0, width, height);

        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const _c = document.createElement('canvas');
        const _ctx = _c.getContext('2d');

        c.setAttribute('width', width);
        c.setAttribute('height', height);
        _c.setAttribute('width', width);
        _c.setAttribute('height', height);

        _ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, width, height);
        const _imageData = _ctx.getImageData(0, 0, width, height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (_imageData.data[i + 3] !== 0) {
                imageData.data[i + 3] = 0;
            } else if (imageData.data[i + 3] == 0) {
                imageData.data[i] = 0;
                imageData.data[i + 1] = 0;
                imageData.data[i + 2] = 0;
                imageData.data[i + 3] = 255;
            }
        }

        if (useCamera && camera) {
            const canvasCamera = document.createElement('canvas');
            const ctxCamera = canvasCamera.getContext('2d');
            canvasCamera.setAttribute('width', width);
            canvasCamera.setAttribute('height', height);

            ctxCamera.drawImage(camera, 0, 0, camera.width, camera.height, 0, 0, width, height);
            const imageDataCamera = ctxCamera.getImageData(0, 0, width, height);
            for (let i = 0; i < imageDataCamera.data.length; i += 4) {
                if (imageDataCamera.data[i + 3] != 0) {
                    imageData.data[i + 3] = 0;
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);

        return c.toDataURL('image/png');
    }

    getResultImage(useCamera) {
        const bg = this.imageBgRef.current;
        const canvas = document.createElement('canvas');
        this.getCanvas({
            canvas,
            power: bg.width / 320,
            isRes: true
        });
        return this.getPreviewImage({
            power: bg.width / 320,
            canvas,
            useCamera
        });
    }

    listenerMove() {
        const dom = this.boxRef.current;
        const upload = this.imageUploadRef.current;
        let startPageX = null;
        let startPageY = null;
        if (this.hasKeyListener || !dom || !upload) return;
        const moveListener = e => {
            const { preview } = this.state;
            if (preview) return;
            this.moveOptions.x = e.pageX - startPageX;
            this.moveOptions.y = e.pageY - startPageY;
            this.getCanvas();
        };
        this.hasKeyListener = true;
        dom.addEventListener('mousedown', e => {
            startPageX = e.pageX - this.moveOptions.x;
            startPageY = e.pageY - this.moveOptions.y;
            document.addEventListener('mousemove', moveListener);
        });
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveListener);
        });

        document.addEventListener('keydown', e => {
            const { preview } = this.state;
            if (preview) return;
            if ([87, 83, 82, 65, 68, 69].includes(e.keyCode)) {
                if (e.keyCode == 87) {
                    this.moveOptions.y = this.moveOptions.y - 1;
                }
                if (e.keyCode == 83) {
                    this.moveOptions.y = this.moveOptions.y + 1;
                }
                if (e.keyCode == 65) {
                    this.moveOptions.x = this.moveOptions.x - 1;
                }
                if (e.keyCode == 68) {
                    this.moveOptions.x = this.moveOptions.x + 1;
                }
                if (e.keyCode == 69) {
                    this.sizeInputRef && this.sizeInputRef.setState({
                        value: (this.moveOptions.size + 0.2).toFixed(2)
                    });
                    this.handleSize(parseInt(this.moveOptions.size * 100 + 20) / 100, false);
                }
                if (e.keyCode == 82) {
                    this.sizeInputRef && this.sizeInputRef.setState({
                        value: (this.moveOptions.size - 0.2).toFixed(2)
                    });
                    this.handleSize(parseInt(this.moveOptions.size * 100 - 20) / 100, false);
                }
                this.getCanvas();
            }
        });

        if (this.dragBox1.current) {
            const box = this.dragBox1.current;
            let sx = null;
            let size = null;
            const listener = e => {
                const current = e.clientX - sx;
                box.style.left = `${current}px`;
                const diff = (current - 798) / 10;
                const value = size + diff;
                if (value >= 1) {
                    this.sizeInputRef && this.sizeInputRef.setState({
                        value: value.toFixed(2)
                    });
                    this.handleSize(value);
                }
            };
            box.addEventListener('mousedown', e => {
                e.stopPropagation();
                e.preventDefault();
                sx = e.clientX - box.offsetLeft;
                size = parseFloat(this.moveOptions.size);
                document.addEventListener('mousemove', listener);
            });
            document.addEventListener('mouseup', e => {
                e.stopPropagation();
                e.preventDefault();
                box.style.left = '798px';
                document.removeEventListener('mousemove', listener);
            });
        }
        if (this.dragBox2.current) {
            const box = this.dragBox2.current;
            let sx = null;
            let rotate = this.moveOptions.rotate;
            const listener = e => {
                const current = e.clientX - sx;
                box.style.left = `${current}px`;
                const diff = (current - 798);
                let value = Math.abs(rotate + diff);
                if (value > 360) value = 0;
                this.rotateInputRef && this.rotateInputRef.setState({
                    value: value
                });
                this.handleRotate(value);
            };
            box.addEventListener('mousedown', e => {
                e.stopPropagation();
                e.preventDefault();
                sx = e.clientX - box.offsetLeft;
                document.addEventListener('mousemove', listener);
            });
            document.addEventListener('mouseup', e => {
                e.stopPropagation();
                e.preventDefault();
                box.style.left = '798px';
                document.removeEventListener('mousemove', listener);
            });
        }
    }

    handleSize(value = 0, isGet = true) {
        const upload = this.imageUploadRef.current;
        if (!upload) return;
        if (!/^-?(0|[1-9][0-9]*)(\.[0-9]{1,})?$/.test(value)) return;
        this.moveOptions.x = this.moveOptions.x + upload.width * (this.moveOptions.size - value) / 200;
        this.moveOptions.y = this.moveOptions.y + upload.height * (this.moveOptions.size - value) / 200;
        this.moveOptions.size = value;
        isGet && this.getCanvas();
    }

    handleRotate(value) {
        this.moveOptions.rotate = value;
        this.getCanvas();
    }

    handlePreview(get = true) {
        if (!this.select) {
            message.error('请先选择机型');
            return;
        }
        if (!this.state.image) {
            message.error('请先上传定制图片');
            return;
        }
        
        this.setState({
            preview: get ? this.getPreviewImage() : null
        }, () => {
            if (get) this.getCanvas();
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.select) {
            message.error('请先选择机型');
            return;
        }
        if (!this.state.image) {
            message.error('请先上传定制图片');
            return;
        }

        const { form: { validateFields } } = this.props;

        validateFields((err, values) => {
            if (!err) {
                if (!this.token) {
                    message.error('网络出错了，刷新页面试试');
                    return;
                }
                this.setState({
                    submit: true
                });
                const pl = [
                    () => {
                        const formdata = new FormData();
                        formdata.append('file', convertBase64UrlToBlob(this.getResultImage()), `${new Date().getTime()}.png`);
                        formdata.append('token', this.token);
                        return MServer.post('//upload-z0.qiniup.com', formdata, {
                            withCredentials: false,
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            silent: true
                        }).then(res => `${locale[process.env.NODE_ENV].url.cdnUser}${res.key}`);
                    },
                    () => {
                        const formdata = new FormData();
                        formdata.append('file', convertBase64UrlToBlob(this.getResultImage(false)), `${new Date().getTime()}.png`);
                        formdata.append('token', this.token);
                        return MServer.post('//upload-z0.qiniup.com', formdata, {
                            withCredentials: false,
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            silent: true
                        }).then(res => `${locale[process.env.NODE_ENV].url.cdnUser}${res.key}`);
                    },
                ];
                Promise.all(pl.map(item => item())).then(res => {
                    MServer.post('/order/save', {
                        ...values,
                        cate_id: this.select.id,
                        image: res[0],
                        image1: res[1]
                    }).then(res => {
                        this.setState({
                            submit: false
                        });
                        if (res.errcode == 0) {
                            message.success('提交成功');
                        }
                    });
                });
            }
        });
    }

    readFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const that = this;
        reader.onload = function () {
            delete that.moveOptions.size;
            delete that.moveOptions.y;
            that.moveOptions.x = 0;
            that.setState({
                image: this.result
            }, () => {
                that.imageUploadRef.current.onload = () => {
                    that.getCanvas();
                    that.listenerMove();
                    const { preview } = that.state;
                    if (preview) {
                        that.handlePreview(true);
                    }
                };
            });
        };
    }

    render() {
        const { image, preview, submit, color, pickerColor, auto, list } = this.state;
        const { form: { getFieldDecorator } } = this.props;
        const { select } = this;

        return (
            <div className="page-layout-center">
                <div className={style.layoutHome}>
                    <div className={style.layoutHomeHd}>
                        <Cascader
                            showSearch={{
                                filter:(input, path) => {

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
                            allowClear={false}
                            options={list}
                            style={{ width: 320 }}
                            placeholder="选择手机型号，支持搜索"
                            onChange={value => {
                                this.select = this.cateObj[value[2]];
                                MServer.get(`/cate/catetextureattr/${this.select.id}`).then(res => {
                                    this.select.texture_attr = res.errcode == 0 ? res.data : [];
                                    this.forceUpdate(() => {
                                        if (this.imageBgRef.current.complete) {
                                            this.getCanvas();
                                        } else {
                                            this.imageBgRef.current.onload = () => {
                                                this.getCanvas();
                                            };
                                        }
                                    });
                                });
                            }}    
                        />
                        <Input
                            className="hide"
                            type="file"
                            ref={e => this.uploadInputRef = e && e.input}
                            accept={'image/png,image/jpg,image/jpeg'}
                            onChange={e => this.readFile(e.target.files[0])}
                        />
                        <Button
                            type="primary"
                            icon="cloud-upload"
                            onClick={() => this.uploadInputRef.click()}
                        >上传图片</Button>
                    </div>
                    <div className={style.layoutHomeBd}>
                        <div className={style.mobilePreview}>
                            <div className={style.mobilePreviewCanvas} ref={this.boxRef}>
                                {
                                    preview ? (
                                        <div className={style.previewImage}>
                                            <div><img src={preview} /></div>
                                        </div>
                                    ) : null
                                }
                                <div key="images" className="hide">
                                    <img ref={this.transBgRef} crossOrigin="" src="http://pxynkk8s9.bkt.clouddn.com//static/images/transparent_bg.jpg" />
                                    {image ? <img ref={this.imageUploadRef} crossOrigin="" src={image}></img> : null}
                                    {select ? <img ref={this.imageBgRef} crossOrigin="" src={`${locale[process.env.NODE_ENV].url.cdn}/${select.size_img}`} /> : null}
                                    {select && select.camera_img ? <img ref={this.imageCameraRef} crossOrigin="" src={`${locale[process.env.NODE_ENV].url.cdn}/${select.camera_img}`} /> : null}
                                </div>
                                <canvas key="canvas1" ref={this.canvasRef} />
                                <canvas key="canvas2" ref={this.canvasCameraRef} />
                                <Tooltip title="上传图片后，拖动进行放大缩小"><div className={style.box1} ref={this.dragBox1}></div></Tooltip>
                                <Tooltip title="上传图片后，拖动进行旋转"><div className={style.box2} ref={this.dragBox2}></div></Tooltip>
                            </div>
                        </div>
                        <div className={style.orderConfig}>
                            <Form className={`inline-form ${style.sizeForm}`}>
                                <div style={{ display: 'flex' }}>
                                    <Form.Item label="缩放" style={{ flex: '1' }}>
                                        <Input 
                                            style={{ width: 80 }} 
                                            disabled={!!preview || auto} 
                                            ref={e => this.sizeInputRef = e} 
                                            onChange={e => this.handleSize(e.target.value)} 
                                            defaultValue={100}
                                        />
                                        <span style={{ marginLeft: '10px' }}>%</span>
                                    </Form.Item>
                                    <Form.Item label="旋转" style={{ flex: '1' }}>
                                        {/* <InputNumber disabled={!!preview} defaultValue={0} onChange={this.handleRotate} /> */}
                                        <Input
                                            style={{ width: 80 }}
                                            disabled={!!preview || auto}
                                            ref={e => this.rotateInputRef = e}
                                            onChange={e => this.handleRotate(e.target.value)}
                                            defaultValue={0}
                                        />
                                    </Form.Item>
                                </div>
                                <Form.Item label="背景色设置">
                                    <div>
                                        <Select
                                            style={{ width: 120 }}
                                            value={color}
                                            onChange={value => this.setState({ color: value }, () => {
                                                if (value != -1) {
                                                    this.getCanvas();
                                                }
                                            })}
                                            options={[
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
                                                    value: '-1'
                                                }
                                            ]}
                                        />
                                        {
                                            color == -1 ? (
                                                <div style={{ display: 'inline-block', position: 'relative', top: '5px', left: '10px' }}>
                                                    <ColorPicker
                                                        color={pickerColor}
                                                        onChange={c => {
                                                            this.setState({
                                                                pickerColor: c.color
                                                            }, this.getCanvas);
                                                        }}
                                                    />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <Checkbox 
                                        disabled={!this.select || !image} 
                                        checked={auto} 
                                        onChange={e => {
                                            this.setState({ auto: e.target.checked }, () => {
                                                this.getCanvas();
                                                if (e.target.checked) {
                                                    this.handlePreview(true);
                                                } else {
                                                    this.setState({
                                                        preview: null
                                                    });
                                                }
                                            });
                                        }}
                                    >图片自适应</Checkbox>
                                    <Button style={{ marginLeft: '10px' }} onClick={() => this.handlePreview(!preview)}>{preview ? '编辑' : '预览'}</Button>
                                </Form.Item>
                                <Form.Item>
                                    <span><Tag>W</Tag>上移</span>，
                                    <span><Tag>S</Tag>下移</span>，
                                    <span><Tag>A</Tag>左移</span>，
                                    <span><Tag>D</Tag>右移</span>，
                                    <span><Tag>E</Tag>放大</span>，
                                    <span><Tag>R</Tag>缩小</span>
                                </Form.Item>
                            </Form>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item label="配货标签">
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
                                            <InputNumber precision={0} min={1} />
                                        )
                                    }
                                </Form.Item>
                                {
                                    select && select.texture_attr.length ? (
                                        <Form.Item label="属性(颜色)">
                                            {
                                                getFieldDecorator('texture_attr_id', {
                                                    rules: [{
                                                        required: true,
                                                        message: '请先选择属性'
                                                    }]
                                                })(
                                                    <Select
                                                        options={select.texture_attr} fieldName={{ label: 'texture_attr_name', value: 'texture_attr_id' }}
                                                        placeholder="选择属性"
                                                        style={{ width: 180 }}
                                                    />
                                                )
                                            }
                                        </Form.Item>
                                    ) : null
                                }
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" loading={submit}>提交订单</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {
    form: PropTypes.object
};

export default Form.create()(Index);