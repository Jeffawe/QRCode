import React, { useState } from 'react';
import SMS from '../QR State/sms';
import Email from '../QR State/email';
import Url from '../QR State/url';
import './page.css'

const EmailWork: React.FC = () => {
    const [Qrshow, setQrshow] = useState(false)
    const [QrButtons, setQrButtons] = useState(0)

    const GenerateData = () => {
        setQrshow(true);
    }

    const PickQrGenerator = (id: number) => {
        setQrButtons(id)
        setQrshow(false)
    }

    return (
        <div>
            <div className='body_background'>
                <button onClick={() => { PickQrGenerator(1) }}>SMS</button>
                <button onClick={() => { PickQrGenerator(2) }}>Email</button>
                <button onClick={() => { PickQrGenerator(3) }}>URL</button>
            </div>

            <div className="body_body">
                <div>
                    {QrButtons === 1 &&
                        <SMS QrShow={Qrshow} Generate={GenerateData} />
                    }
                    {QrButtons === 2 &&
                        <Email QrShow={Qrshow} Generate={GenerateData} />
                    }
                    {QrButtons === 3 &&
                        <Url QrShow={Qrshow} Generate={GenerateData} />
                    }
                </div>
            </div>
        </div >
    )
}

//this exports the function
export default EmailWork;


