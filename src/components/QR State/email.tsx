import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react';

type Props = {
  QrShow: boolean;
  //Turn off type checking
  Generate: any;
}

const Email: React.FC<Props> = ({ QrShow, Generate }: Props) => {
  const [mail, setMail] = useState('');
  const [sub, setSub] = useState('');
  const [body, setBody] = useState('');

  //this function set the mail as the value of the event it is being called from
  const ShowMail = (event: any) => {
    setMail(event.target.value);
  }

  //this function set the sub as the value of the event it is being called from
  const ShowSub = (event: any) => {
    setSub(event.target.value);
  }

  //this function set the body as the value of the event it is being called from
  const ShowBody = (event: any) => {
    setBody(event.target.value);
  }

  const GenerateData = () => {
    Generate();
  }

  return (
    <div className="input_body">
      <div>
        <h1 className="input_header">SEND A MAIL THROUGH QR</h1>
        <div className="input_box">
          <div className="input_field">
            <p className="input_label">Mail To</p>
            <div className="control">
              {/**The onInput calls the function inside it when something is typed into the input box */}
              <input className="input" type="text" placeholder="Email address" onInput={ShowMail} />
            </div>
          </div>

          <div className="field">
            <p className="input_label">Subject</p>
            <div className="control">
              <input className="input" type="text" placeholder="Subject" onInput={ShowSub} />
            </div>
          </div>

          <div className="field">
            <p className="input_label">Body</p>
            <div className="control">
              <textarea className="textarea" placeholder="Write Mail here" onInput={ShowBody}></textarea>
            </div>
          </div>

          {/**creates a generate button that calls the function GenerateData when clicked */}
          <button onClick={GenerateData}>Generate</button>
        </div>
      </div>
      {QrShow &&
        <div className="qr">
          <div>
            <QRCodeCanvas value={`mailto:${mail}?subject=${sub}&body=${body}.`} size={256} />
          </div>
        </div>
      }
    </div>
  )
}

export default Email