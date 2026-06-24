
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formEncuesta');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const datos = {
      q1: document.getElementById('q1').value,
      q2: document.getElementById('q2').value,
      q3: document.getElementById('q3').value,
      q4: document.getElementById('q4').value,
      q5: document.getElementById('q5').value,
      q6: document.getElementById('q6').value,
      q7: document.querySelector('input[name="q7"]:checked').value,
      q8: document.getElementById('q8').value,
      q9: document.querySelector('input[name="q9"]:checked').value,
      q10: document.getElementById('q10').value
    };

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwUIPLlAzy7nJCXqWkamGqy8TcWmHOhsNjHjEXV8yGbe-6r1T_k6OgWz7os_KLSt8UVhg/exec',
        {
          method: 'POST',
          body: JSON.stringify(datos)
        }
      );

      alert('¡Gracias por completar la encuesta!');
      form.reset();
      window.location.href = 'index.html';

    } catch (error) {
      alert('Error al enviar la encuesta');
      console.error(error);
    }
  });
});
