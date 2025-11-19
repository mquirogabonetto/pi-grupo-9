
let formulariolog = document.querySelector(".form-login") 
let inputemail = document.querySelector(".inputlogin")
let inputcontra = document.querySelector(".contraseña")


formulariolog.addEventListener("submit", function (e) {
   
   let email = inputemail.value;
   let password = inputcontra.value;

   if (email === "" || password === ""){
      e.preventDefault()
      alert("Debe completar los campos");
   } else if (email === ""){
      e.preventDefault()
      alert("Debe completar el campo Email")
   } else if (password === ""){
      e.preventDefault()
      alert("Debe completar el campo Contraseña")
   } else if (password.length > 0 && password.length < 6){
      e.preventDefault()
      alert("La contraseña debe tener al menos 6 caracteres")
   } else {
      
      localStorage.setItem("emailUsuario", email);
      
   }
   
})
