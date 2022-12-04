import React, { useEffect, useState } from 'react';

const Form = () => {
    const data = {
        name:"",
        email:"",
        password:""
    } ;
    
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false) ;
    useEffect(()=>{
        console.log("Registered")
    },[flag])

    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }
        else{
             setFlag(true)
        }
    }
    return (
        <div>
            <pre>{(flag)? <h2>Hello {inputData.name} You have registered Successfully</h2> : " "}</pre>
            <form className='container' onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <div>
                    <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
                </div>
                <div>
                    <input type='email' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
                </div>
                <div>
                    <input type='password' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData}></input>
                    
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
            
        </div>
    );
};

export default Form;