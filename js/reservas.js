function carregarReservas() {
      fetch('http://localhost:3000/reservas')
        .then(response => response.json())
        .then(data => {
          const tabela = document.getElementById('reservasTable');
          tabela.innerHTML = ''; // Limpa a tabela antes de inserir os dados

          data.forEach(reserva => {
            const row = `
              <tr>
                <td>${reserva.nome}</td>
                <td>${reserva.email}</td>
                <td>${reserva.dataEntrada}</td>
                <td>${reserva.dataSaida}</td>
                <td>${reserva.observacoes}</td>
                <td>${reserva.adultos}</td>
                <td>${reserva.criancas}</td>
              </tr>
            `;
            tabela.innerHTML += row;
          });
        })
        .catch(error => console.error('Erro ao carregar as reservas:', error));
    }

    // Carregar as reservas ao iniciar a página
    window.onload = carregarReservas;