function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        // Append the new user's id to the DOM
        const body = document.querySelector("body");
        const newUser = document.createElement("p");
        newUser.textContent = `New user ID: ${object.id}`;
        body.appendChild(newUser);
      })
      .catch(function (error) {
        // Handle errors and append them to the DOM
        const body = document.querySelector("body");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errorMessage);
      });
  }
  