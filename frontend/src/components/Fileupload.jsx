
import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Fileupload() {

    const [fileData, setFileData]= useState("")
    const onFileChange = (e) => {
        setFileData(e.target.files[0])
    }

    const onFileupload = (e) => {
        e.preventDefault()
        const data= new FormData()
        data.append("file", fileData)
        Axios.post("http://localhost:3000/upload",data).then((res) => {
            alert(" data stored succes")
        })
    }
 
    return(
        <div>
            <h1>File upload</h1>
            <div className='d-flex justify-content-center'>
                <form method="POST" onSubmit={onFileupload}>
                    <input type="file" className='form-control' onChange={onFileChange}/>
                    <button className='btn btn-primary'>UPLOAD</button>
                </form>
            </div>
        </div>
    )
}
export default Fileupload