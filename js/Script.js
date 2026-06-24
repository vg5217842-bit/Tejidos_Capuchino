

const form = document.getElementById('formSugerencias');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const datos = {
    tipo: "sugerencia",
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    mensaje: document.getElementById('mensaje').value
  };

  try {

    await fetch(
      'https://script.google.com/macros/s/AKfycbwUIPLlAzy7nJCXqWkamGqy8TcWmHOhsNjHjEXV8yGbe-6r1T_k6OgWz7os_KLSt8UVhg/exec',
      {
        method: 'POST',
        body: JSON.stringify(datos)
      }
    );

    alert('Gracias por su sugerencia');
    form.reset();

  } catch(error) {
    console.error(error);
    alert('Error al enviar');
  }
});

