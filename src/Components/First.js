import React, { useState } from 'react'
import "../App.css"
export const First = (props) => {
    const onHandleUpClick = () => {
        let newText =text.toUpperCase()
        setText(newText)
        // console.log("clicked UP");
    }
    const onHandleDnClick = () => {
        let newText =text.toLowerCase()
        setText(newText)
        // console.log("clicked Down")
    }
    const onRemove=()=>{
        let newText = ""
        setText(newText)
        
        // console.log("Removed")
    }
    const onHandleChange=(event)=>{
        // console.log("handle changed")
        setText(event.target.value)
        calculateLetters()
    }
   const[text , setText]=useState(null)
   function calculateWords(){
    if(text){
        let counter = 0;
        text.split(" ").forEach(ele => {
            if(ele!=="" && ele!==" "){
                counter++;
            } 
        });
        return counter
    } else {
        return 0
    }
   }
   function calculateLetters(){
    if(text){
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
                <textarea className="form-control" id="mybox" rows="5" cols="5"value={text?text:""} onChange={onHandleChange}/>
                
            <div className='btn1'>
                <button type="button" className="butn btn btn-primary mx-2" onClick={onHandleUpClick}>CONVERT TO UPPERCASE</button>
                <button type="button" className="butn btn btn-primary mx-2" onClick={onHandleDnClick}>convert to lowercase</button>
                <button type="button" className="butn btn btn-danger mx-2" onClick={onRemove}>Remove all the text</button>
            </div>
            <h2>Your text summary</h2>
            <h6>Word and Leters with spaces</h6>
            <p>{calculateWords()} words and {text?text.split("").length:0} letters </p>
            <h6>Word and Leters without spaces</h6>
            <p>{calculateWords()} words and {calculateLetters()} letters</p>
            <h3>preview</h3>
            <p> {text} </p>
            </div>
        </>
    )
}