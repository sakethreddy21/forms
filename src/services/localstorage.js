import { v4 as uuidv4 } from 'uuid';

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

  // Check if the employeeData already has an ID
  if (employeeData.id) {
    // If it has an ID, treat it as an update (edit)
    const index = allEmployeeData.findIndex(employee => employee.id === employeeData.id);

    if (index !== -1) {
      // Delete the existing employee data with the same ID
      allEmployeeData.splice(index, 1);
    }
  }

  // Add a unique ID to the employee data
  const employeeWithId = {
    id: employeeData.id || uuidv4(), // If updating, use the existing ID; otherwise, generate a new one
    ...employeeData
  };

  // Add the updated or new employee data
  allEmployeeData.push(employeeWithId);

  // Update the local storage with the modified array
  localStorage["employeeDataArray"] = JSON.stringify(allEmployeeData);
};


