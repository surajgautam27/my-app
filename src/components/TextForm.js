import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>
  {
    // console.log("Upper Case Was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>
  {
    // console.log("Upper Case Was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to upper case")
  }
  const clear = ()=>
  {
    // console.log("Upper Case Was clicked"+ text);
    let newText='';
    setText(newText)
  }
  const handleOnChange=(event)=>
  {
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text Here');
// text ="new text"; worng way
// setText=("new Text"); correct
  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.Heading} </h2>
    <div className="mb-2">
    <textarea className="form-control" id="myBox" onChange={handleOnChange}
     style= {{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}} value={text} rows="7"></textarea>
    </div>
    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To upper case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert To Lower case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={clear}>Clear Text</button>
  </div>
<div className="container my-1"  style= {{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summery </h2>
 <p>{text.split(" ").length} words and {text.length} characters</p> 
 <p>{0.008*text.split(" ").length} Minutes To Read</p>
 <h3>Preview</h3>
 <p>{text}</p>
</div>
  </>

      
  )
}
