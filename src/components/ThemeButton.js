import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const ThemeButton = ({ theme, setTheme, eventList, setEventList }) => {
    const [buttonText, setButtonText] = useState("Light");
    const setCurrTheme = setTheme;
    function buttonHandler() {
        if (!theme) {
            setButtonText("Dark");
            setCurrTheme(true);
        }
        else {
            setButtonText("Light");
            setCurrTheme(false);
        }
    }
    return (
        <div className='ThemeButton'>
            <Button onClick={buttonHandler} size="sm" variant={theme ? "outline-dark" : "outline-light"}>{buttonText}</Button>
        </div>
    )
}

export default ThemeButton