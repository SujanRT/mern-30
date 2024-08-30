const login = (username, password) => {
    const x = new Promise((resolve, reject) => {
        const response = true;
        resolve(response);
    })
    return x    
}

const result = login("username", "password");
result
      .then((data) => {
           console.log("Then", data)
      })
      .catch((exception) => {
        console.log("catch", exception)
   })