// HAMBURGER MENU //
// const menuBtn = document.querySelector(".hamburger-menu");
// const navMenu = document.querySelector(".nav-items");

// menuBtn.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

// FORM VALIDATION //

// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();
// }); // paraliza envío formulario

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fname = event.target.fname.value;
  const lname = event.target.lname.value;
  const email = event.target.email.value;
  const phone = event.target.tel.value;
  //   const mensaje = event.target.mensaje.value;

  let msj = "";

  if (fname.length < 3 || fname.length > 30) {
    //err
    alert("Nombre fuera de tamaño: 3-30");
    msj += "Nombre fuera de tamaño: 3-30\n";
  }

  // 3 < lname < 30 required
  if (lname.length < 3 || lname.length > 30) {
    alert("Apellido fuera de tamaño: 3-30");
    msj += "Apellido fuera de tamaño: 3-30\n";
  }

  if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    alert("Error validación: " + email);
    msj += "Error validación: " + email + "\n";
  }
  if (phone.length === !9) {
    alert("Telefono incorrecto");
    msj += "Telefono incorrecto";
  }
  if (mensaje.length < 30) {
    alert("Telefono incorrecto");
    msj += "Telefono incorrecto";
  }
  if (msj.length != 0) {
    alert(msj); //imprime mensaje final de error
    //document.body.innerHTML += msj;
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    document.getElementById("contact").appendChild(p); // dibuja resultado
  } else {
    //Enviar formulario
    document.querySelector("form").submit();
    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});
