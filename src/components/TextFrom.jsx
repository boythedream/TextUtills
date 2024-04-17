import React, { useState } from "react";

const TextFrom = (props) => {
  const handleOnClick=()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Success',"the Upper case is ")

}
const handleLowerCase=()=>{
    let newText1 = text.toLowerCase()

    setText(newText1)
    props.showAlert("the Lower case is ",'Success')

  }
  const HandleOnChange=(event)=>{
    setText(event.target.value)
  }

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter  text here2');
// text = 'new text' // wrong way to change the state
// setText("dil")
  return (
    <>
      
      <div className="container my-5" style={{  color: props.mode ==='light'?'grey':'dark'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control" onChange={HandleOnChange} value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}
            id="exampleFormControlTextarea1"
            rows="10"
           placeholder="Enter the text here" ></textarea>
        </div>
        <button className="btn btn-primary mx-3"  onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary"  onClick={handleLowerCase}>Convert to LowerCase</button>
      </div>
      <div className="container my-3 "style={{backgroundColor: props.mode ==='dark'?'#42743':'42743',color: props.mode ==='light'?'grey':'dark'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
            </>
    
  );
};

export default TextFrom;
