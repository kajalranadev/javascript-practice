// Function call before declaration
hoistedFunction(); 

// Function declaration
function hoistedFunction() {
  console.log("Function  declaration is hoisted!");
}

// Function call before declaration 
notHoistedFunction(); 

// Function expression is not hoisted 
const notHoistedFunction = function () {
  console.log(" Function Expression  is not hoisted!");
};

// Function call before declaration 
showMessage();

// Arrow Function is not hoisted
const showMessage = () => {
  console.log("Arrow function is not hoisted!");
};
