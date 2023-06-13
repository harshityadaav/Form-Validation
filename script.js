function validateName(nameInput) {
    var name = nameInput.value.trim();
    var nameRegex = /^[A-Za-z\s]+$/; 
    
    if (nameRegex.test(name)) {
      nameInput.classList.remove("invalid");
      nameInput.classList.add("valid");
      nameInput.nextElementSibling.classList.remove("invalid");
      nameInput.nextElementSibling.classList.add("valid");
      return true;
    } else {
      nameInput.classList.remove("valid");
      nameInput.classList.add("invalid");
      nameInput.nextElementSibling.classList.remove("valid");
      nameInput.nextElementSibling.classList.add("invalid");
      return false;
    }
  }
  
  function validatePhoneNumber(phoneInput) {
    var phoneNumber = phoneInput.value.trim();
    var phoneNumberRegex = /^\d{10}$/; 
    
    if (phoneNumberRegex.test(phoneNumber)) {
      phoneInput.classList.remove("invalid");
      phoneInput.classList.add("valid");
      phoneInput.nextElementSibling.classList.remove("invalid");
      phoneInput.nextElementSibling.classList.add("valid");
      return true;
    } else {
      phoneInput.classList.remove("valid");
      phoneInput.classList.add("invalid");
      phoneInput.nextElementSibling.classList.remove("valid");
      phoneInput.nextElementSibling.classList.add("invalid");
      return false;
    }
  }

  function validateEmail(emailInput) {
    let email = emailInput.value.trim();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (emailRegex.test(email)) {
      emailInput.classList.remove("invalid");
      emailInput.classList.add("valid");
      return true;
    } else {
      emailInput.classList.remove("valid");
      emailInput.classList.add("invalid");
      return false;
    }
  }

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var messageInput = document.getElementById("message");
    
    var isNameValid = validateName(nameInput);
    var isEmailValid = emailInput.checkValidity();
    var isPhoneValid = validatePhoneNumber(phoneInput);
    var isMessageValid = messageInput.checkValidity();
    
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      
      console.log("Name: " + nameInput.value);
      console.log("Email: " + emailInput.value);
      console.log("Phone: " + phoneInput.value);
      console.log("Message: " + messageInput.value);
      
      document.getElementById("myForm").reset();
    }
  });
