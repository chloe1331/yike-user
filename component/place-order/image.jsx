import React from 'react';
import { Tooltip } from 'antd';

import s from './style.less';

export default function ImagePreview () {
    return <div ref={this.moveRef} className={s.imagePreview}>
        <Tooltip title="上传图片后，拖动进行放大缩小"><div className={s.box1} ref={this.dragBox1}></div></Tooltip>
        <Tooltip title="上传图片后，拖动进行旋转"><div className={s.box2} ref={this.dragBox2}></div></Tooltip>
        <img
            ref={this.uploadRef}
            className={s.uploadImage}
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
                                    ref={this.cameraImageRef}
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
                    } : (checkColor ? {
                        backgroundColor: '#000',
                        backgroundImage: 'none'
                    } : {}))}
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
    </div>;
}