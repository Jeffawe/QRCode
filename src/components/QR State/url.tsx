import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import './qrstate.css'

type Props = {
    QrShow: boolean;
    //Turn off type checking
    Generate: any;
}

const Url: React.FC<Props> = ({ QrShow, Generate }: Props) => {
    const [url, setUrl] = useState('');

    //this function set the url as the value of the event it is being called from
    const ShowURL = (event: any) => {
        setUrl(event.target.value);
    }

    const GenerateData = () => {
        Generate()
    }

    return (
        <div className="input_body">
            <div>
                <h1 className="input_header">OPEN A URL THROUGH QR</h1>
                <div className="input_box">
                    <div className="input_field">
                        <p className="input_label">URL</p>
                        <div className="control">
                            <input className="input" type="text" placeholder="Input Link" onInput={ShowURL} />
                        </div>
                    </div>
                    {/**creates a generate button that calls the function GenerateData when clicked */}
                    <button onClick={GenerateData}>Generate</button>
                </div>
            </div>
            {QrShow &&
                <div className="qr">
                    <div>
                        <QRCodeCanvas value={url} size={256} fgColor="green" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Url