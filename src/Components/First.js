import React, { useState } from 'react'
import "../App.css"
export const First = (props) => {
    const onHandleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const onHandleDnClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const onRemove = () => {
        let newText = ""
        setText(newText)
    }
    const onHandleChange = (event) => {
        setText(event.target.value)
        calculateLetters()
    }
    const [Bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [cursive, setCursive] = useState(false)
    const [roboto, setRoboto] = useState(false)
    const onBold = () => {
        setBold(!Bold)
    }

    const onRoboto=()=>{
        setRoboto(!roboto)
        console.log("ssssdd")
    }
    const onCursive=()=>{
        setCursive(!cursive)
    }
    const onitalic = () => {
        setItalic(!italic)
    }

    const [text, setText] = useState(null)
    function calculateWords() {
        if (text) {
            let counter = 0;
            text.split(" ").forEach(ele => {
                if (ele !== "" && ele !== " ") {
                    counter++;
                }
            });
            return counter
        } else {
            return 0
        }
    }
    function calculateLetters() {
        if (text) {
            let remText = text.replace(/(\s)/g, "");
            return remText.length
        } else {
            return 0
        }
    }
   
    return (
        <>
            <div className="container my-5">
                <h5 className='heading'>{props.heading}</h5>
                <label id="mybox" className="form-label" ></label>
                <textarea className={`form-control ${Bold? 'bold' : null}  ${italic? 'font1' : null} ${cursive? 'font2' : null} ${roboto? 'font3' : null}`} id="mybox" rows="5" cols="5" value={text ? text : ""} onChange={onHandleChange} />

                <div className='btn1 my-3'>
                    <button type="button" className="butn btn btn-primary mx-1" onClick={onHandleUpClick}>CONVERT TO UPPERCASE</button>
                    <button type="button" className="butn btn btn-primary mx-1" onClick={onHandleDnClick}>convert to lowercase</button>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Transform your font
                        </button>   
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item bold" onMouseEnter={onBold} onMouseLeave={onBold} onClick={onBold}>Bold</a></li>
                            <li><a className="dropdown-item font1" onMouseEnter={onitalic} onMouseLeave={onitalic} onClick={onitalic}>Italic</a></li>
                            <li><a className="dropdown-item font2" onMouseEnter={onCursive} onMouseLeave={onCursive} onClick={onCursive}>Cursive</a></li>
                            <li><a className="dropdown-item font3" onMouseEnter={onRoboto} onMouseLeave={onRoboto} onClick={onRoboto}>Roboto</a></li>
                        </ul>
                    </div>
                    <button type="button" className="butn btn btn-danger mx-1" onClick={onRemove}>Remove all the text</button>
                </div>
                <h2>Your text summary</h2>
                <h6>Word and Leters with spaces</h6>
                <p>{calculateWords()} words and {text ? text.split("").length : 0} letters </p>
                <h6>Word and Leters without spaces</h6>
                <p>{calculateWords()} words and {calculateLetters()} letters</p>
                <h3>preview</h3>
                <p> {text} </p>
            </div>
        </>
    )
}