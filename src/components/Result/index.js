import React from 'react'
import './index.css'
import {Text} from "../Text";

export const Result = ({texts}) => {
    return (
        <div className="result-container container container-fluid container-md bg-white mt-5">
            <h1 className="text-secondary px-3 py-5">Results: </h1>
            <div className="d-flex flex-column align-items-center">
                <div className="result-text-container">
                    {texts.map(text => <Text key={text} text={text}/>)}
                </div>
            </div>
        </div>
    )
}