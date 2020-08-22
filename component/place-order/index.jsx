import React from 'react';
import { Button } from 'antd';

import UploadBtn from '../upload-btn';
import { useState } from 'react';

export default function PlaceOrder() {
    const [preview, setPreview] = useState(false);

    const onLoadImage = () => {

    };

    const handleUpload = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const img = new Image();
            img.src = this.result;
            img.onload = () => {
                onLoadImage(img);
            };
        };
    };

    return <div>
        <div>
            <div>
                <UploadBtn.Local
                    buttonProps={{
                        type: 'primary',
                        icon: 'cloud-upload'
                    }}
                    text="上传图片"
                    onUpload={handleUpload}
                />
                <Button onClick={() => setPreview(!preview)}>{preview ? '编辑' : '预览'}</Button>
                <Button>初始化图片</Button>
                <Button>去除图片</Button>
            </div>
            <div>
                
            </div>
        </div>
    </div>;
}