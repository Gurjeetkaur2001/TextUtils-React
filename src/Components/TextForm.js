import React, { useState } from "react";

const TextForm = (props) => {

    const[text,setText]=useState(" ")
  

    const handleupclick=()=>{
        /* console.log("clicked uppercase") */
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("converted to uppercase!","success")
    }

    const handleloclick=()=>{
        /* console.log("lowercase") */
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to Lowercase!","success")
    }
    /* const handlejoinclick=()=>{
        /* console.log("concate") */
        /* let newtext=text.concat("and")
        setText(newtext)
    }  */

    const handlecopy=()=>{
      // console.log("copy text")
      let text=document.getElementById("myform")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("copy to clipboard!","success")
  }

  const handlespace=()=>{
    let newtext=text.split(/[  ]+/)
    setText(newtext.join(" "))
    props.showAlert("Extra space removed!!","success")
  }

    const handleclearclick=()=>{
        /* console.log("clicked uppercase") */
        let newtext=" "
        setText(newtext)
        props.showAlert("Clear text!!","success")
    }

    const handlechnage=(e)=>{
        /* console.log("handle change") */
        setText(e.target.value)
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#090f31'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myform" className="form-label"></label>
        <textarea className="form-control" value={text}  onChange={handlechnage} style={{backgroundColor: props.mode==='dark'?'#090f31':'white',color:props.mode==='dark'?'white':'#090f31'}} id="myform" rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert Lowercase</button>
    {/*   <button className="btn btn-primary mx-1" onClick={handlejoinclick}>Concat text</button> */}
      <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handlespace}>Remove Extra Space</button>
      <button className="btn btn-primary mx-1" onClick={handleclearclick}>clear text</button>
    </div>


    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#090f31'}}>
    <h2>Your text here</h2>
    
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  
    );
};

export default TextForm;
