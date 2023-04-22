import React, { Component } from 'react'
import { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ccc from "./ccc logo.png"
import "./style.css"
import axios from "axios"


const Reg = () => {
    const[Name,setName] = useState();
    const[StudentNumber,setStudentNumber] = useState('');
    const[CollegeEmailId,setCollegeEmailId] = useState('');
    const[PhoneNumber,setPhoneNumber] = useState('');
    const[Year,setYear] = useState('');
    const[Section,setSection] = useState('');
    const[Branch,setBranch] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        const data = {
            Name:Name,
            StudentNumber:StudentNumber,
            CollegeEmailId:CollegeEmailId,
            PhoneNumber:PhoneNumber,
            Year:Year,
            Section:Section,
            Branch:Branch
        }
        axios.post('https://sheetdb.io/api/v1/4saunidi78lkx',data).then(response=>{
        
          // alert("Form Submitted Successfully");
        setName('');
        setStudentNumber('');
        setCollegeEmailId('');
        setPhoneNumber('');
        setYear('');
        setSection('');
        setBranch('');
    })
  }
    const diffToast = () => {
      toast.success("Registration Completed Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      }
  
    
     {
  return (
    <>
      <body>
    <div class="data">
    <div class="info">
        <img class="ccc-logo" src={ccc} alt="ccc logo" />
        <h2 class="ccc">Cloud Computing Cell</h2>
        <h4>Presents</h4>
        <h1>Py<b style={{color: "red"}}>Wizardry</b></h1>
        <h3>A Python Fundamentals & Game Development Workshop.</h3>
    </div>
    <div class="RegInBox">
        <h2>Register <b style={{color: "red"}}>Fast</b></h2>
        <form autocomplete="on" onSubmit={handleSubmit}>
        <input type="name" name="data[Name]" placeholder="Enter Name" required  onChange={(e) => setName(e.target.value)} value={Name}/>
            <input type="roll" name="data[Student Number]" placeholder="Enter Student Number" required  onChange={(e) => setStudentNumber(e.target.value)} value={StudentNumber}/>
          <input type="email" name="data[College Email Id]" placeholder="Enter College Email Id" required onChange={(e) => setCollegeEmailId(e.target.value)} value={CollegeEmailId}/>
          <input type="tel"  name="data[Phone Number]" placeholder="Enter Phone Number"  required onChange={(e) => setPhoneNumber(e.target.value)} value={PhoneNumber}/>
          <input type="Year" name="data[Year]" placeholder="Enter Year" required onChange={(e) => setYear(e.target.value)} value={Year}/> 
          <div class="SB">
            <input type="Section" name="data[Section]" placeholder="Enter Section" required onChange={(e) => setSection(e.target.value)} value={Section}/>
            <input type="Branch" name="data[Branch]" placeholder="Enter Branch" required onChange={(e) => setBranch(e.target.value)} value={Branch}/>
          </div>
          <div className="g-recaptcha" data-type="image" data-sitekey="6LdGsqglAAAAAGk5rOKGHUarYNcmWmcYu_byfmDz"></div>
          
          <input type="submit" name="Register" value="Register" onClick={diffToast} />
          <ToastContainer />
        </form>
      </div>
    </div>
</body>
    </>
  )
    }
}


export default Reg
