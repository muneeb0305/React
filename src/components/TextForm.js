import React, {useState} from 'react';
export default function TextForm(props)
{
    const hanldeUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Upper Case","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const hanldeLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lower Case","success");
    }

    const CopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Text copy to clipboard","success");
    }
    
    const hanldeClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert(" Text cleared","success");
    }
    const[text, setText] = useState("");
    return <>
        <div className='container'>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control"style={{backgroundColor: props.mode==='light'?'white':'', color: props.mode==='light'?'black':'white' }} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={hanldeUpClick}>Covert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={hanldeLowerClick}>Covert to Lowercase</button>  
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={CopyClick}>Copy to clipboard</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={hanldeClearClick}>Clear Text</button> 
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
}