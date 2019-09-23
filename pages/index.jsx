import { Component, createRef } from 'react';
import { Form, Input, InputNumber, Button, Tag } from 'antd';

import { Select, UploadBtn } from 'component';
import { MServer } from 'public/utils';
import style from 'public/theme/pages/index.less';
import locale from 'config/locale';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            brandTypes: [],
            cates: [],
            brandTypeLoading: false,
            textureLoading: false,
            image: null
        };
        const handles = ['handleChangeBrand', 'handleChangeBrandType', 'handleChangeTexture', 'getBgCanvas', 'handleSize', 'handleRotate'];
        handles.forEach(item => this[item] = this[item].bind(this));
        this.condition = {
            brand_id: undefined,
            brand_type_id: undefined,
            texture_id: undefined
        };
        this.imageBgRef = createRef();
        this.canvasBgRef = createRef();
        this.imageCameraRef = createRef();
        this.imageUploadRef = createRef();
        this.boxRef = createRef();
        this.select = null; // 选择到的机型
        this.moveOptions = {
            x: 0,
            y: 0,
            rotate: 0
        };
        this.hasKeyListener = false;
    }

    componentDidMount() {
        this.getBrands();
        if (this.select) {
            this.getBgCanvas();
            this.listenerMove();
        }
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

    getBgCanvas() {
        const canvas = this.canvasBgRef.current;
        const image = this.imageBgRef.current;
        const imageCamera = this.imageCameraRef.current;
        const width = 918;
        const context = canvas.getContext('2d');
        
        const drawImage = () => {
            this.getCanvas();
            const imageLeft = width / 2 - image.width / 2;
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', image.height);
            const imageDataLeft = context.getImageData(0, 0, imageLeft, image.height);
            for (let i = 0; i < imageDataLeft.data.length; i += 4) {
                imageDataLeft.data[i] = 255;
                imageDataLeft.data[i + 1] = 255;
                imageDataLeft.data[i + 2] = 255;
                imageDataLeft.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataLeft, 0, 0);
            const imageDataRight = context.getImageData(imageLeft + image.width, 0, image.width, image.height);
            for (let i = 0; i < imageDataRight.data.length; i += 4) {
                imageDataRight.data[i] = 255;
                imageDataRight.data[i + 1] = 255;
                imageDataRight.data[i + 2] = 255;
                imageDataRight.data[i + 3] = 127.5;
            }
            context.putImageData(imageDataRight, imageLeft + image.width, 0);
            context.drawImage(image, 0, 0, image.width, image.height, imageLeft, 0, image.width, image.height);
            const imageData = context.getImageData(imageLeft, 0, image.width, image.height);
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i + 3] == 0) {
                    imageData.data[i] = 255;
                    imageData.data[i + 1] = 255;
                    imageData.data[i + 2] = 255;
                    imageData.data[i + 3] = 127.5;
                } else {
                    imageData.data[i + 3] = 0;
                }
            }
            // context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(imageData, imageLeft, 0);
            if (imageCamera && this.select.camera_img) {
                const drawCamera = () => {
                    context.drawImage(imageCamera, 0, 0, image.width, image.height, imageLeft, 0, image.width, image.height);
                    const imageCameraData = context.getImageData(imageLeft, 0, image.width, image.height);
                    for (let i = 0; i < imageCameraData.data.length; i += 4) {
                        if (imageCameraData.data[i] == 166) {
                            imageCameraData.data[i] = 0;
                            imageCameraData.data[i + 1] = 0;
                            imageCameraData.data[i + 2] = 0;
                            imageCameraData.data[i + 3] = 255;
                        }
                    }
                    context.putImageData(imageCameraData, imageLeft, 0);
                };
                if (imageCamera.complete) {
                    drawCamera();
                } else {
                    imageCamera.onload = () => {
                        drawCamera();
                    };
                }
            }
        };
        if (image.complete) {
            drawImage();
        } else {
            image.onload = () => {
                drawImage();
            };
        }
    }

    getCanvas() {
        let { x, y, size, rotate } = this.moveOptions;
        const ctxImageUpload = this.imageUploadRef.current;
        if (!ctxImageUpload) return;
        const canvas = ctxImageUpload.querySelector('canvas');
        const image = ctxImageUpload.querySelector('img');
        const imageBg = this.imageBgRef.current;
        if (!imageBg || !image) return;
        const context = canvas.getContext('2d');
        const width = 918;

        const drawImage = () => {
            if (!this.moveOptions.size) {
                size = this.moveOptions.size = 918 / image.width;
                this.forceUpdate();
            }
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', imageBg.height);
            if (rotate) {
                context.translate(width / 2, imageBg.height / 2);
                context.rotate(rotate * Math.PI / 180);
                context.translate(-width / 2, -imageBg.height / 2);
            }
            context.drawImage(image, x, y, image.width * size, image.height * size);
        };

        if (image.complete) {
            drawImage();
        } else {
            image.onload = () => {
                drawImage();
            };
        }
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
        dom.addEventListener('mousedown', e => {
            startPageX = e.pageX - this.moveOptions.x;
            startPageY = e.pageY - this.moveOptions.y;
            dom.addEventListener('mousemove', moveListener);
        });
        dom.addEventListener('mouseup', () => {
            dom.removeEventListener('mousemove', moveListener);
        });

        document.addEventListener('keydown', e=> {
            if ([87, 83, 65, 68].includes(e.keyCode)) {
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
                this.getCanvas();
            }
        });
        this.hasKeyListener = true;
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
            this.getBgCanvas();
            this.listenerMove();
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

    render() {
        const { brands, brandTypes, cates, brandTypeLoading, textureLoading, image } = this.state;
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
                        <UploadBtn 
                            buttonProps={{
                                type: 'primary'
                            }}
                            buttonText="上传图片" 
                            show={false} 
                            onChange={value => {
                                this.setState({
                                    image: `${locale[process.env.NODE_ENV].url.cdnUser}${value}`
                                }, () => {
                                    if (this.select) {
                                        this.getCanvas();
                                    }
                                });
                            }}
                        />
                    </div>
                    <div className={style.layoutHomeBd}>
                        <div className={style.mobilePreview}>
                            {
                                select || image ? (
                                    <div className={style.mobilePreviewCanvas} ref={this.boxRef}>
                                        {
                                            select ? [
                                                <canvas key="canvas" ref={this.canvasBgRef} />,
                                                <img key="image" className="hide" crossOrigin="" ref={this.imageBgRef} src={`${locale[process.env.NODE_ENV].url.cdn}/${select.size_img}`} />,
                                                select.camera_img ? <img key="image1" className="hide" crossOrigin="" ref={this.imageCameraRef} src={`${locale[process.env.NODE_ENV].url.cdn}/${select.camera_img}`} /> : null
                                            ].filter(item => item) : null
                                        }
                                        <div className={style.previewImg} ref={this.imageUploadRef}>
                                            <canvas />
                                            {
                                                image ? <img className={select ? 'hide' : ''} src={image}></img> : null
                                            }
                                        </div>
                                    </div>
                                ) : null
                            }
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
                                    <Tag>W</Tag>上移，<Tag>S</Tag>下移，<Tag>A</Tag>左移，<Tag>D</Tag>右移
                                </Form.Item>
                            </Form>
                            <Form>
                                <Form.Item label="配货标签">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="订货数量">
                                    <InputNumber precision={0} min={1} />
                                </Form.Item>
                                {
                                    select && select.texture_attr.length ? (
                                        <Form.Item label="属性(颜色)">
                                            <Select
                                                options={select.texture_attr} fieldName={{ label: 'texture_attr_name', value: 'id' }}
                                                placeholder="选择属性"
                                                style={{ width: 180 }}
                                            />
                                        </Form.Item>
                                    ) : null
                                }
                                <Form.Item>
                                    <Button type="primary">提交审核</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}