import React, {useState} from 'react'
import './App.css'
import {Header} from "./components/Header";
import {Result} from "./components/Result";

export const App = () => {
    const [texts, setTexts] = useState([]);
    return (
        <div className="app bg-light">
            <Header setTexts={(text) => {
                console.log('text', text);
                setTexts([text, ...texts])
            }}/>
            <Result texts={texts}/>
        </div>
    )
}