import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';



const Pincodepage =() => {

const [postOffices,setPostOffices]=useState([]);

const [pincode,setPincode]=useState("");
   
const url= `https://api.postalpincode.in/pincode/${pincode}`

 useEffect(()=>{
  getAllPostOffice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 } , [pincode]);
  


const getAllPostOffice=async()=>{
    await axios.get(`${url}`).then((res)=>{
      const allPostOffices=res
      console.log({allPostOffices});
      setPostOffices(allPostOffices);
    }).catch(error=>console.error(`Error:${error}`));
  }

  const updateSearch=e=>{
    setPincode(e.target.value);

  } ;
  const getSearch = e =>{
    e.preventDefault();
    setPincode("");
    
  } ;
  
   

  return (
  
  <section id="cover" className="min-vh-100">
    <div id="cover-caption">
        <div className="container">
            <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    
                    <div className="px-2">
                        <form  onSubmit={getSearch} className="justify-content-center">
                            <div className="form-group">
                                <label className="sr-only">Pincode</label>
                                <input type="text" className="form-control" value={pincode} onChange={updateSearch} placeholder="Search pincode.."/>
                            </div>
                            
                            <button type="submit" onClick={getAllPostOffice} className="btn btn-primary btn-lg">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        
  )
}

export default Pincodepage