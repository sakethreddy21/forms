import React from 'react'

const Data = () => {
  const storedData = JSON.parse(localStorage.getItem('employeeDataArray'));
  return (
    <div>
    
     {
      !storedData?(
      <div>
        No data found in local storage
        </div>):(
        <div>
        {storedData.map((item) => (
                <div >
                  <div className=" mt-4 ">
                    <span className=" absolute -translate-y-1/2 bg-white text-md text-pink-500 ml-6 ">
                      {item.email}
                    </span>
                  </div>
                </div>
              ))}
      </div>
      )
     }
    </div>
  )
}

export default Data