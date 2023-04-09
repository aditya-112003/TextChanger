import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log(text.toUpperCase());
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared the Text","success");
    }   
    const handleDummyClick = (event) =>{
        let name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veniam!";
        // setText(name + {text});
        let yep = text + name;
        setText(yep);
        props.showAlert("Added some Dummy text","success");
    }
    const handleSnakeClick = () =>{
        let words = text.split(" ");
        setText(words.join("_"));
        props.showAlert("Converted to Snakecase","success");
    }
    const handleCopy =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");

    }

    const [text, setText] = useState('');
    
    return (
        <>
            {/* <div className="container" style={{color: props.mode==='dark'?'white':'#33393d'}}> */}
            <div className="container my-4 " style={{color: props.txtcolor}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#33393d':'white',color: props.mode==='dark'?'white':'#33393d'}} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
                    <textarea className="form-control" value={text} style={{backgroundColor: props.rgb , color: props.mode==='dark'?'white':'#33393d'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleDummyClick} >Add 10 words</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleSnakeClick} >Convert to Snakecase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick} >Clear Text</button>
            </div>
            {/* <div className="container my-3" style={{color: props.mode==='dark'?'white':'#33393d'}}> */}
            <div className="container my-3" style={{color: props.txtcolor}}>
                <h2>Your Text Summary</h2>
                {/* <p>{text.split(" ").length} words,{text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element)=>{ return element.length}).length} words , {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{ return element.length}).length} minutes </p>
                <h2>Preview</h2>
                <p>{text==='' ? "Write some fckin words to preview" : text} </p>
                
            </div>
        </>
    )
}
