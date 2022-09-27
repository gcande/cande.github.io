// let asunto = document.getElementById("asunto").value;
let boton = document.getElementById("botonContacto");




boton.addEventListener("click", (e) => {
  e.preventDefault();
  let asunto = document.getElementById("asunto").value
  let email = document.getElementById("email").value
  let comentario = document.getElementById("comentario").value
  if (asunto != "" && email != "" && comentario != "") {
    swal({
      title: "Mensaje!",
      text: "Asunto: " + asunto + "\n correo: " + email + "\nComentario: " + comentario,
    });


    document.getElementById("asunto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";

  } else {

    swal({
      title: "!CAMPOS IMCOMPLETOS¡",
      text: "por favor llene los campos incompletos.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
  }

})


