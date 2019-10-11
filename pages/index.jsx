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
            preview: null,
            submit: false
        };
        const handles = ['handleChangeBrand', 'handleChangeBrandType', 'handleChangeTexture', 'handleSize', 'handleRotate', 'handlePreview', 'handleSubmit'];
        handles.forEach(item => this[item] = this[item].bind(this));
        this.condition = {
            brand_id: undefined,
            brand_type_id: undefined,
            texture_id: undefined
        };
        this.transBgRef = createRef();
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

    getCanvas({ power = 1, canvas = this.canvasRef.current, isRes = false } = {}) {
        const { preview } = this.state;
        if (preview) return;
        const upload = this.imageUploadRef.current;
        const bg = this.imageBgRef.current;
        const camera = this.imageCameraRef.current;
        const trans = this.transBgRef.current;
        const box = this.boxRef.current;

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
            context.fillStyle = context.createPattern(trans, 'repeat');
            context.fill();
        }

        if (upload && upload.complete) {
            let { x, y, size, rotate } = this.moveOptions;
            if (!this.moveOptions.size) {
                size = this.moveOptions.size = upload.width > upload.height ? canvasWidth / upload.width : boxHeight / upload.height;
                this.forceUpdate();
            }
            if (!y) {
                y = this.moveOptions.y = -(upload.height * size - height) / 2;
                if (upload.width < upload.height) {
                    x = this.moveOptions.x = (canvasWidth - upload.width * size) / 2;
                }
            }

            if (rotate) {
                context.translate(width / 2, height / 2);
                context.rotate(rotate * Math.PI / 180);
                context.translate(-width / 2, -height / 2);
            }
            size = size * power;
            context.drawImage(upload, x * power, y * power, upload.width * size, upload.height * size);
            if (rotate) {
                context.translate(width / 2, height / 2);
                context.rotate(-rotate * Math.PI / 180);
                context.translate(-width / 2, -height / 2);
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
        let startPageX = null;
        let startPageY = null;
        if (this.hasKeyListener && !dom) return;
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
            dom.addEventListener('mousemove', moveListener);
        });
        dom.addEventListener('mouseup', () => {
            dom.removeEventListener('mousemove', moveListener);
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

        const { preview } = this.state;
        
        this.setState({
            preview: preview ? null : this.getPreviewImage()
        }, () => {
            if (preview) this.getCanvas();
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
        const { brands, brandTypes, cates, brandTypeLoading, textureLoading, image, preview, submit } = this.state;
        const { form: { getFieldDecorator } } = this.props;
        const { brand_id, brand_type_id, texture_id } = this.condition;
        const { select } = this;

        return (
            <div className="page-layout-center">
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
                                    delete that.moveOptions.size;
                                    delete that.moveOptions.y;
                                    that.moveOptions.x = 0;
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
                                {
                                    preview ? (
                                        <div className={style.previewImage}><img src={preview} /></div>
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
                            </div>
                        </div>
                        <div className={style.orderConfig}>
                            <Form className={`inline-form ${style.sizeForm}`}>
                                <Form.Item label="缩放">
                                    <InputNumber disabled={!!preview} precision={2} value={(this.moveOptions.size || 0) * 100} onChange={this.handleSize} />
                                    <span style={{ marginLeft: '10px' }}>%</span>
                                </Form.Item>
                                <Form.Item label="旋转">
                                    <InputNumber disabled={!!preview} defaultValue={0} onChange={this.handleRotate} />
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
                                    <Button style={{ marginLeft: '10px' }} onClick={this.handlePreview}>{preview ? '编辑' : '预览'}</Button>
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