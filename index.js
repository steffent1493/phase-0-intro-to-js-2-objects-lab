// Write your solution in this file!
const employee = {
    name: 'Todd',
    address: '12345',
   
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newObj={...employee};
    newObj[key]=value;
    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newObj={...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value;
    return employee
}

