import React,{useState}from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
     const Handle = ()=>{
         
         let newText = text.toUpperCase();
         setText(newText);
     }
     const handleOnChange=(event)=>{
        setText(event.target.value);
     }

     const onClicking = ()=>{
        setText("");
     }
    return (
        <>
        <div className = "container">
                <h1>{props.title}</h1>
                <div className="mb-3">
               
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="box" rows="5 "></textarea>
                </div>
                <button className="btn btn-primary" onClick= {Handle} >Convert to Uppercase</button>
                <button className="btn btn-primary" onClick= {onClicking} >Clear Text</button>
        </div>
        <div className = "container my-5">
            <h2>Your Text Summary.</h2>
            Your text contains {text.split(" ").length} words and {text.length} Characters.

        </div>
        </>
    )
}
