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
  

  allEmployeeData.push(employeeData);
  localStorage["employeeDataArray"] = JSON.stringify(allEmployeeData);
};

