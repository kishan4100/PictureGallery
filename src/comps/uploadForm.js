import { useState } from "react";
import React from "react";
import ProgressBar from "./progressBar";


const UploadForm = () =>{
    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)

    const type =["image/png","image/jpeg"]
 
    const changeHandler = (event)=>{
        let selected = event.target.files[0]
        if(selected && type.includes(selected.type)) {
            setFile(selected)
           
        } else{
            setFile(null);
            setError("Please Select an Image file (png/jpeg)")
        }
    }

    return (
        <form>
          <label>
           <input type="file" onChange={changeHandler} />
           <span>+</span>
          </label>
            
            <div className="output">
               {error &&<div className="error"> {error}</div>}
               {file && <div className="fileName">{file.name}</div>}
               {file && <ProgressBar file={file} setFile={setFile}/> }

            </div>
        </form>
    )

}

export default UploadForm