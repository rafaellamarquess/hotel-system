document.getElementById('reservaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const reserva = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      dataEntrada: document.getElementById('dataEntrada').value,
      dataSaida: document.getElementById('dataSaida').value,
      observacoes: document.getElementById('observacoes').value,
      adultos: document.getElementById('adultos').value,
      criancas: document.getElementById('criancas').value
    };

    fetch('http://localhost:3000/reservas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reserva)
    })
    .then(response => response.json())
    .then(data => {
      alert('Reserva realizada com sucesso!');
      document.getElementById('reservaForm').reset();
    })
    .catch(error => console.error('Erro:', error));
  });