"use client"

import { useState, useEffect } from "react"
import React from 'react';
import { validate3 } from "../../lib/validation";
import { useNavigate , useLocation} from "react-router-dom";
import { inputitems3 } from "../../Content";
import { Link } from "react-router-dom";
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
  const handleRegister = () => {
    setErrors(validate3(inputValues));
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/data')
    console.log(inputValues);
    addEmployeeData({ ...inputValues });
  }
   
  };

 
  return (
    <div className="flex gap-10">

         <div>
          <p className="font-bold text-3xl text-center mb-4">
            Create Account
          </p>
            <div className="w-60">
              {inputitems3.map((item) => (
                <div key={item.name} className="w-60">
                  <div className=" mt-4">
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
                    {errors[item.name] && (
                      <span className="text-red-500 text-sm">
                        {errors[item.name]}
                    </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-2 flex flex-grow-1 justify-center items-center  ">
              <button className=" bg-pink-500 text-white font-bold text-xl rounded-lg px-8 py-1 mr">
              <Link to='/personal'>Back</Link>
              </button>
              <button onClick={handleRegister}  className=" bg-pink-500 text-white font-bold text-xl rounded-lg px-8 py-1 ml-3">
              NEXT
              </button>

            </div>
           
           
          
        </div>
    </div>
  );
};

export default Address;