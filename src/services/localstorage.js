// Function to generate a unique ID (you might use a library like 'uuid' for this)
// Function to generate a unique ID (you might use a library like 'uuid' for this)


export const getAllEmployeeData = () => {
  if (!localStorage["employeeDataArray"]) {
    localStorage["employeeDataArray"] = "[]";
  }

  let employeeDataArray = localStorage["employeeDataArray"];
  employeeDataArray = JSON.parse(employeeDataArray);
  return employeeDataArray;
};

export const addEmployeeData = (employeeData) => {
  const allEmployeeData = getAllEmployeeData();

  // Ensure that the added employee data has a unique ID
  

  allEmployeeData.push(employeeData);
  localStorage["employeeDataArray"] = JSON.stringify(allEmployeeData);
};

export const removeEmployee = (id) => {
  let employeeDataArray = getAllEmployeeData();
  employeeDataArray = employeeDataArray.filter((employeeData) => employeeData.id !== id);
  localStorage["employeeDataArray"] = JSON.stringify(employeeDataArray);
};

export const getEmployeeById = (id) => {
  const employeeDataArray = getAllEmployeeData();
  const employeeData = employeeDataArray.find((employeeData) => employeeData.id === id);
  return employeeData;
};

export const editEmployee = (id, newEmployeeData) => {
  let employeeDataArray = getAllEmployeeData();
  employeeDataArray = employeeDataArray.map((employeeData) => {
    if (employeeData.id === id) {
      // Update the existing employee data with the new data
      return { ...employeeData, ...newEmployeeData };
    }
    return employeeData;
  });

  localStorage["employeeDataArray"] = JSON.stringify(employeeDataArray);
};
