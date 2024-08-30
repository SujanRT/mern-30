
// Develop 3 promise based functions. 
// first function should validate the user. Which should receive and object with username, password, and role value. 
// consider, if username = admin, password = admin then only the data is valid. 
// Second function should only execute if the first function validated the data. The second function should trigger the third one
// only if the role value is admin else it should show some message regarding invalid role. 
// The third function should display Your data is correct. 
// All the functions should be promise based and should be handled on both, nesting and chaing way 


// Function to validate the user
function validateUser(user) {
    return new Promise((resolve, reject) => {
      if (user.username === 'admin' && user.password === 'admin') {
        resolve(user);
      } else {
        reject('Invalid username or password');
      }
    });
  }
  
  // Function to check the role
  function checkRole(user) {
    return new Promise((resolve, reject) => {
      if (user.role === 'admin') {
        resolve('Your data is correct');
      } else {
        reject('Invalid role');
      }
    });
  }
  
  // Function to display a message
  function displayMessage(message) {
    return new Promise((resolve) => {
      console.log(message);
      resolve();
    });
  }
  
  // Nesting way
  validateUser({ username: 'admin', password: 'admin', role: 'admin' })
    .then((user) => {
      return checkRole(user)
        .then((message) => displayMessage(message))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
  
  // Chaining way
  validateUser({ username: 'admin', password: 'admin', role: 'admin' })
    .then(checkRole)
    .then(displayMessage)
    .catch((error) => console.log(error));