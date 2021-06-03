import React, {useState} from 'react'
import './index.css'
import {URL} from "../../constans/config";

export const Header = ({setTexts}) => {
    const [text, setText] = useState('');
    const handleClick = async () => {
        if (!text) {
            return;
        }
        try {
            const response = await fetch(`${URL}/iecho?text=${text}`)
            if (response.status === 200) {
                const result = await response.json();
                setTexts(result.text);
            }
        } catch (error) {
            console.log('error', error);
        }
        setText('');
    }
    return (
        <div className="bg-danger d-flex flex-row justify-content-center align-items-center p-3">
            <div className="header-container d-flex flex-row ">
                <input className="form-control" type="text" placeholder="Insert text" value={text}
                       onChange={(value) => setText(value.target.value)}/>
                <button type="button" className="btn btn-primary ms-4 px-4" onClick={handleClick}>Send</button>
            </div>
        </div>
    )
}