function calcularNotaFiscal() {
    // Obter valores do formulário
    const nomeCliente = document.getElementById('nomeCliente').value;
    const endCliente = document.getElementById('endCliente').value;
    const CPF = document.getElementById('CPF').value
    const valorServico = parseFloat(document.getElementById('valorServico').value);

    // Calcular impostos (Exemplo simples para fins educacionais)
    const impostoFederal = valorServico * 0.1;  // 10% de imposto federal
    const impostoEstadual = valorServico * 0.05;  // 5% de imposto estadual
    const total = valorServico + impostoFederal + impostoEstadual;

    // Gerar nota fiscal na página
    const resultadoNotaFiscal = 
    
    `
    <div class="nota">
        <h2>Nota Fiscal</h2>
        <div><strong>Cliente:</strong> <span>${nomeCliente}</span></div>
        <div><strong>Endereço:</strong> <span>${endCliente}</span></div>
        <div><strong>CPF:</strong> <span>${CPF}</span></div>
        <div><strong>Valor do Serviço:</strong> <span>R$ ${valorServico.toFixed(2)}</span></div>
        <div><strong>Imposto Federal (10%):</strong> <span>R$ ${impostoFederal.toFixed(2)}</span></div>
        <div><strong>Imposto Estadual (5%):</strong> <span>R$ ${impostoEstadual.toFixed(2)}</span></div>
        <div><strong>Total:</strong> <span>R$ ${total.toFixed(2)}</span>
    </div>
    `;

    // Exibir nota fiscal na página
    document.getElementById('notaFiscalResultado').innerHTML = resultadoNotaFiscal;
}