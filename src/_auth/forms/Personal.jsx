import React, { useState, useEffect } from 'react';
import { inputitems2 } from '../../Content';
import { validate2 } from '../../lib/validation';
import { Link, useNavigate } from 'react-router-dom';
const Personal = () => {
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
    setErrors(validate2(inputValues));
    setIsSubmitting(true);
  };
  useEffect(() => {
    console.log(errors);  
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/account')
      console.log(inputValues);
    }
  },[errors]);

 

  return (
    <>
     <p className="font-bold text-3xl text-center mb-4">
            Personal Info
          </p>
          <div className='flex flex-col '>
      {inputitems2.map((item) => (
        <div key={item.name} className="w-60">
          <div className="mt-4 relative">
            <span className="absolute -translate-y-1/2 bg-white text-md text-pink-500 ml-6">
              {item.name}
            </span>
            <span className="p-1 absolute beg-0 grid w-10">{item.icon}</span>
            {item.type === 'select' ? (
              <select
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                onChange={(e) => handleInputChange(e, item.name)}
                value={inputValues[item.name] || ''}
                className="h-10 border-2 border-pink-500 rounded-lg pl-10 text-pink-500 placeholder-pink-500 focus:border-transparent  focus:outline-none w-96"
              >
                {item.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={item.type}
                placeholder={item.placeholder}
                onChange={(e) => handleInputChange(e, item.name)}
                value={inputValues[item.name] || ''}
                className="h-10 border-2 border-pink-500 rounded-lg pl-10 text-pink-500 placeholder-pink-500 focus:border-transparent  focus:outline-none w-96"
              />
            )}
            {errors[item.name] && (
              <span className="text-red-500 text-sm">{errors[item.name]}</span>
            )}
          </div>
        </div>
        
        
      ))
      }
    </div>
      <div className="mt-2 flex flex-grow-1 justify-center items-center  ">
              <button className=" bg-pink-500 text-white font-bold text-xl rounded-lg px-8 py-1 mr">
              <Link to='/Address'>Back</Link>
              </button>
              <button onClick={handleRegister}  className=" bg-pink-500 text-white font-bold text-xl rounded-lg px-8 py-1 ml-3">
              NEXT
              </button>

            </div>
    </>
  );
};

export default Personal;
