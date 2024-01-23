"use client"

import { useState, useEffect } from "react"
import React from 'react';
import { toast } from 'react-toastify';
import { validateAddress } from "../../lib/validation";
import { useNavigate } from "react-router-dom";
import { Address_inputitems } from "../../Content";
import { addEmployeeData} from '../../services/localstorage';
function Address()  {
 
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e, name) => {
    const { value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

  };
  //register function to submit the data and validate the data
  const handleRegister = () => {
    setErrors(validateAddress(inputValues));
    setIsSubmitting(true);
  };

  //to  navigate to next page
  useEffect(() => { 
    if (Object.keys(errors).length === 0 && isSubmitting) {
      addEmployeeData({ ...inputValues });
      toast.success('Data saved successfully');
      navigate('/personal')
     
    }
    else if(Object.keys(errors).length !== 0 && isSubmitting){
      toast.error('Please enter valid data');
    }
  },[errors]);

 
  return (
    <div className="flex gap-10 ">

         <div className=" ">
          <p className="font-bold text-3xl text-center mb-4">
            Address data
          </p>
            <div >
              {/* mapping the inputs  */}
              {Address_inputitems.map((item) => (
                <div key={item.name} >
                  <div className=" mt-4 ">
                    <span className=" absolute -translate-y-1/2 bg-white text-md text-pink-500 ml-6 ">
                      {item.name}
                    </span>
                     <span className=" p-1 absolute beg-0 grid w-10 ">
                      {item.icon}{' '}
                    </span>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                     // Add onchange event listener
                     onChange={(e) => handleInputChange(e, item.name)}
              value={inputValues[item.name] || ''}
                      className="h-10 border-2 border-pink-500 rounded-lg pl-10 text-pink-500 placeholder-pink-500 focus:border-transparent  focus:outline-none w-96"
                    />
                    <br />
                    {errors[item.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[item.name]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-2 px-28">
              <button onClick={handleRegister}  className="bg-pink-500 text-white font-bold text-xl rounded-lg  justify-center text-center   items-center w-40 h-9">
              NEXT
              </button>
            </div>
            

           
          
        </div>
    </div>
  );
};

export default Address;