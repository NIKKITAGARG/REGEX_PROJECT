import { useState } from "react";

export default function Textarea(props) {

    const HandleUpClick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const HandleLoClick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const HandleClearClick = ()=>{
      settext("")
    }
    const HandleCopyClick = ()=>{
      let text = document.getElementById("Textarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        settext(event.target.value)
    }

    // const countSpaces = ()=>{
    //   let count = 0;
    //   text.split(""){
    //       if()
    //   }
    // }

    const [text, settext] = useState("Enter text here");
    // console.log(text);

  return (
    <div className='container'>
      <h3 className='my-3'>{props.heading}</h3>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea1" rows="5"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={HandleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-2' onClick={HandleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-2' onClick={HandleClearClick}>Clear text</button>
  <button className='btn btn-primary mx-2' onClick={HandleCopyClick}>Copy text</button>
  <h3>Preview</h3> <p>{text.split(" ").length} words and {text.length + " characters"}</p>
  <p>{text}</p>

    </div>
  )
}

