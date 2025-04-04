const form = document.querySelector(".login-form")

form.addEventListener("submit", HandleSubmit);

function HandleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
     const email = elements.email.value.trim();
    const password = elements.password.value.trim();
   const info = {
        email,
        password,
    };
  if (info.email === "" || info.password === "") {
    return  alert("All form fields must be filled in");
  }
    console.log(info);
  form.reset();
    
}