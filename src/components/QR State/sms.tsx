import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react';

type Props = {
  QrShow: boolean;
  //Turn off type checking
  Generate: any;
}

const SMS: React.FC<Props> = ({ QrShow, Generate }: Props) => {
  const [num, setNum] = useState('');
  const [message, setMessage] = useState('');

  //this function set the num as the value of the event it is being called from
  const ShowNum = (event: any) => {
    setNum(event.target.value);
  }

  //this function set the message as the value of the event it is being called from
  const ShowMessage = (event: any) => {
    setMessage(event.target.value);
  }

  const GenerateData = () => {
    Generate()
  }

  return (
    <div className="input_body">
      <div>
        <h1 className="input_header">SEND AN SMS THROUGH QR</h1>
        <div className="input_box">
          <div className="input_field">
            <p className="input_label">Phone Number</p>
            <div className="control">
              <input className="input" type="text" placeholder="Number" onInput={ShowNum} />
            </div>
          </div>

          <div className="input_field">
            <p className="input_label">Message</p>
            <div className="control">
              <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
            </div>
          </div>

          {/**creates a generate button that calls the function GenerateData when clicked */}
          <button onClick={GenerateData}>Generate</button>

        </div>
      </div>
      {QrShow &&
        <div className="qr">
          <div>
            <QRCodeCanvas value={`SMS:${num}:${message}`} size={256} />
          </div>
        </div>
      }
    </div >
  )
}

export default SMS