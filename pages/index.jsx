import { Component, createRef } from 'react';
import { Form, Input, InputNumber, Button, Tag, message } from 'antd';
import PropTypes from 'prop-types';

import { Select, UploadBtn, DialogImagePreview } from 'component';
import { MServer } from 'public/utils';
import style from 'public/theme/pages/index.less';
import locale from 'config/locale';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            brandTypes: [],
            cates: [],
            brandTypeLoading: false,
            textureLoading: false,
            image: null,
            src: null,
            submit: false
        };
        const handles = ['handleChangeBrand', 'handleChangeBrandType', 'handleChangeTexture', 'handleSize', 'handleRotate', 'handlePreview', 'handleSubmit'];
        handles.forEach(item => this[item] = this[item].bind(this));
        this.condition = {
            brand_id: undefined,
            brand_type_id: undefined,
            texture_id: undefined
        };
        this.imageUploadRef = createRef();
        this.imageBgRef = createRef();
        this.imageCameraRef = createRef();
        this.canvasRef = createRef();
        this.canvasCameraRef = createRef();
        this.boxRef = createRef();
        this.previewDialogRef = createRef();
        this.uploadInputRef = null;
        this.select = null; // 选择到的机型
        this.moveOptions = {
            x: 0,
            rotate: 0
        };
        this.hasKeyListener = false;
    }

    componentDidMount() {
        this.getBrands();
        this.getCanvas();
    }

    getBrands() {
        MServer.get('/cate/brand', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    brands: res.data
                });
            }
        });
    }

    getCanvas() {
        const canvas = this.canvasRef.current;
        const imageUpload = this.imageUploadRef.current;
        const imageBg = this.imageBgRef.current;
        const width = 918;
        const height = imageBg && imageBg.complete ? imageBg.height : (imageUpload && imageUpload.complete ? imageUpload.height : 0);
        const context = canvas.getContext('2d');

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        if (imageUpload && imageUpload.complete) {
            let { x, y, size, rotate } = this.moveOptions;
            if (!this.moveOptions.size) {
                size = this.moveOptions.size = 918 / imageUpload.width;
                this.forceUpdate();
            }
            if (!y) {
                y = this.moveOptions.y = -(imageUpload.height * size - height) / 2;
            }
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            if (rotate) {
                context.translate(width / 2, height / 2);
                context.rotate(rotate * Math.PI / 180);
                context.translate(-width / 2, -height / 2);
            }
            context.drawImage(imageUpload, x, y, imageUpload.width * size, imageUpload.height * size);
        }

        if (imageBg && imageBg.complete) {
            const imageLeft = width / 2 - imageBg.width / 2;
            // 左侧
            const imageDataLeft = context.getImageData(0, 0, imageLeft, height);
            for (let i = 0; i < imageDataLeft.data.length; i += 4) {
                imageDataLeft.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataLeft, 0, 0);
            // 右侧
            const imageDataRight = context.getImageData(imageLeft + imageBg.width, 0, imageBg.width, height);
            for (let i = 0; i < imageDataRight.data.length; i += 4) {
                imageDataRight.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataRight, imageLeft + imageBg.width, 0);
            // 背景图
            let imageData;
            if (imageUpload && imageUpload.complete) {
                imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
                const imageCanvas = document.createElement('canvas');
                const ctx = imageCanvas.getContext('2d');
                imageCanvas.setAttribute('width', width);
                imageCanvas.setAttribute('height', height);
                ctx.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height, imageLeft, 0, imageBg.width, imageBg.height);
                const _imageData = ctx.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
                for (let i = 0; i < _imageData.data.length; i += 4) {
                    if (_imageData.data[i + 3] == 0) {
                        imageData.data[i + 3] = 127.5;
                    }
                }
            } else {
                context.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height, imageLeft, 0, imageBg.width, imageBg.height);
                imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
                for (let i = 0; i < imageData.data.length; i += 4) {
                    if (imageData.data[i + 3] == 0) {
                        imageData.data[i + 3] = 127.5;
                    } else {
                        imageData.data[i + 3] = 0;
                    }
                }
            }
            // context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(imageData, imageLeft, 0);
        }
    }

    getCameraCanvas() {
        const imageCamera = this.imageCameraRef.current;
        const canvas = this.canvasCameraRef.current;
        const imageBg = this.imageBgRef.current;
        const width = 918;
        const height = imageBg.height;
        const imageLeft = width / 2 - imageBg.width / 2;
        const context = canvas.getContext('2d');

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        context.drawImage(imageCamera, 0, 0, imageCamera.width, height, imageLeft, 0, imageBg.width, height);
        const imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i + 3] !== 0) {
                imageData.data[i] = 0;
                imageData.data[i + 1] = 0;
                imageData.data[i + 2] = 0;
            }
        }
        context.putImageData(imageData, imageLeft, 0);
    }

    getResultImage(useCamera = true) {
        const imageBg = this.imageBgRef.current;
        const imageCamera = this.imageCameraRef.current;

        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const _c = document.createElement('canvas');
        const imageLeft = canvas.width / 2 - imageBg.width / 2;
        const imageData = context.getImageData(imageLeft, 0, imageBg.width, imageBg.height);

        c.setAttribute('width', imageBg.width);
        c.setAttribute('height', imageBg.height);
        _c.setAttribute('width', imageBg.width);
        _c.setAttribute('height', imageBg.height);

        const _ctx = _c.getContext('2d');
        _ctx.drawImage(imageBg, 0, 0, imageBg.width, imageBg.height);
        const _imageData = _ctx.getImageData(0, 0, imageBg.width, imageBg.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (_imageData.data[i + 3] === 0) {
                imageData.data[i + 3] = 0;
            } else if (imageData.data[i + 3] == 0) {
                imageData.data[i] = 0;
                imageData.data[i + 1] = 0;
                imageData.data[i + 2] = 0;
                imageData.data[i + 3] = 255;
            }
        }

        if (useCamera && imageCamera) {
            const canvasCamera = document.createElement('canvas');
            const ctxCamera = canvasCamera.getContext('2d');
            canvasCamera.setAttribute('width', imageBg.width);
            canvasCamera.setAttribute('height', imageBg.height);

            ctxCamera.drawImage(imageCamera, 0, 0, imageBg.width, imageBg.height);
            const imageDataCamera = ctxCamera.getImageData(0, 0, imageBg.width, imageBg.height);
            for (let i = 0; i < imageDataCamera.data.length; i += 4) {
                if (imageDataCamera.data[i + 3] != 0) {
                    imageData.data[i + 3] = 0;
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);

        return c.toDataURL('image/png');
    }

    listenerMove() {
        const dom = this.boxRef.current;
        let startPageX = null;
        let startPageY = null;
        if (this.hasKeyListener && !dom) return;
        const moveListener = e => {
            this.moveOptions.x = e.pageX - startPageX;
            this.moveOptions.y = e.pageY - startPageY;
            this.getCanvas();
        };
        this.hasKeyListener = true;
        dom.addEventListener('mousedown', e => {
            startPageX = e.pageX - this.moveOptions.x;
            startPageY = e.pageY - this.moveOptions.y;
            dom.addEventListener('mousemove', moveListener);
        });
        dom.addEventListener('mouseup', () => {
            dom.removeEventListener('mousemove', moveListener);
        });

        document.addEventListener('keydown', e => {
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
                    this.moveOptions.size = this.moveOptions.size + 0.2 / 100;
                    this.forceUpdate();
                }
                if (e.keyCode == 82) {
                    this.moveOptions.size = this.moveOptions.size - 0.2 / 100;
                    this.forceUpdate();
                }
                this.getCanvas();
            }
        });
    }

    handleChangeBrand(brand_id) {
        this.setState({
            brandTypeLoading: true
        });
        MServer.get('/cate/brandType', {
            brand_id,
            is_all: 1
        }).then(res => {
            this.condition.brand_id = brand_id;
            if (res.errcode == 0) {
                this.condition.texture_id = undefined;
                this.condition.brand_type_id = undefined;
                this.select = null;
            }
            this.setState({
                brandTypes: res.errcode == 0 ? res.data : [],
                brandTypeLoading: false
            });
        });
    }

    handleChangeBrandType(brand_type_id) {
        this.condition.brand_type_id = brand_type_id;
        this.setState({
            textureLoading: true
        });
        MServer.get('/cate/brandTypeTexture', {
            brand_type_id
        }).then(res => {
            this.condition.texture_id = undefined;
            this.select = null;
            this.setState({
                cates: res.errcode == 0 ? res.data : [],
                textureLoading: false
            });
        });
    }
    
    handleChangeTexture(texture_id) {
        const { cates } = this.state;
        this.condition.texture_id = texture_id;
        for (let i = 0; i < cates.length; i++) {
            const item = cates[i];
            if (item.texture_id == texture_id) {
                this.select = item;
                break;
            }
        }
        this.forceUpdate(() => {
            this.imageBgRef.current.onload = () => {
                this.getCanvas();
            };
            if (this.imageCameraRef.current) this.imageCameraRef.current.onload = () => {
                this.getCameraCanvas();
            };
        });
    }

    handleSize(value) {
        this.moveOptions.size = value / 100;
        this.forceUpdate();
        this.getCanvas();
    }

    handleRotate(value) {
        this.moveOptions.rotate = value;
        this.getCanvas();
    }

    handlePreview() {
        if (!this.select) {
            message.error('请先选择机型');
            return;
        }
        if (!this.state.image) {
            message.error('请先上传定制图片');
            return;
        }
        
        this.setState({
            src: this.getResultImage(true)
        }, () => {
            this.previewDialogRef.current.open();
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
                this.setState({
                    submit: true
                });
                MServer.post('/order/save', {
                    ...values,
                    cate_id: this.select.id,
                    image: this.getResultImage(),
                    image1: this.getResultImage(false)
                }).then(res => {
                    this.setState({
                        submit: false
                    });
                    if (res.errcode == 0) {
                        message.success('提交成功');
                    }
                });
            }
        });
    }

    render() {
        const { brands, brandTypes, cates, brandTypeLoading, textureLoading, image, src, submit } = this.state;
        const { form: { getFieldDecorator } } = this.props;
        const { brand_id, brand_type_id, texture_id } = this.condition;
        const { select } = this;

        return (
            <div className="page-layout-center">
                <DialogImagePreview ref={this.previewDialogRef} image={src} width={this.imageBgRef.current && this.imageBgRef.current.width} />
                <div className={style.layoutHome}>
                    <div className={style.layoutHomeHd}>
                        <Select
                            options={brands} fieldName={{ label: 'name', value: 'id' }}
                            placeholder="选择品牌"
                            style={{ width: 180 }}
                            onChange={this.handleChangeBrand}
                            value={brand_id}
                        />
                        <Select
                            options={brandTypes} fieldName={{ label: 'name', value: 'id' }}
                            placeholder="选择型号"
                            style={{ width: 180 }}
                            value={brand_type_id}
                            loading={brandTypeLoading}
                            onChange={this.handleChangeBrandType}
                        />
                        <Select
                            options={cates} fieldName={{ label: 'texture_name', value: 'texture_id' }}
                            placeholder="选择材质"
                            style={{ width: 180 }}
                            loading={textureLoading}
                            value={texture_id}
                            onChange={this.handleChangeTexture}
                        />
                        <Input 
                            className="hide" 
                            type="file" 
                            ref={e => this.uploadInputRef = e && e.input}
                            accept={'image/png,image/jpg,image/jpeg'}
                            onChange={e => {
                                const reader = new FileReader();
                                reader.readAsDataURL(e.target.files[0]);
                                const that = this;
                                reader.onload = function() {
                                    that.setState({
                                        image: this.result
                                    }, () => {
                                        that.imageUploadRef.current.onload = () => {
                                            that.getCanvas();
                                            that.listenerMove();
                                        };
                                    });
                                };
                            }}
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
                                <div className="hide">
                                    {image ? <img ref={this.imageUploadRef} crossOrigin="" className={select ? 'hide' : ''} src={image}></img> : null}
                                    {select ? <img ref={this.imageBgRef} crossOrigin="" src={`${locale[process.env.NODE_ENV].url.cdn}/${select.size_img}`} /> : null}
                                    {select && select.camera_img ? <img ref={this.imageCameraRef} crossOrigin="" src={`${locale[process.env.NODE_ENV].url.cdn}/${select.camera_img}`} /> : null}
                                </div>
                                <canvas ref={this.canvasRef} />
                                <canvas ref={this.canvasCameraRef} />
                            </div>
                        </div>
                        <div className={style.orderConfig}>
                            <Form className={`inline-form ${style.sizeForm}`}>
                                <Form.Item label="缩放">
                                    <InputNumber precision={2} value={(this.moveOptions.size || 0) * 100} onChange={this.handleSize} />
                                    <span style={{ marginLeft: '10px' }}>%</span>
                                </Form.Item>
                                <Form.Item label="旋转">
                                    <InputNumber defaultValue={0} onChange={this.handleRotate} />
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
                                            }]
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
                                    <Button style={{ marginLeft: '10px' }} onClick={this.handlePreview}>预览</Button>
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