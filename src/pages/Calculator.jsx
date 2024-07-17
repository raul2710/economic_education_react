import React, { useState } from 'react';
import './calculadora.css';

function App() {
  const [valorMeta, setValorMeta] = useState('');
  const [valorInicial, setValorInicial] = useState('');
  const [frequencia, setFrequencia] = useState('semanal');
  const [duracao, setDuracao] = useState('');
  const [contribuicao, setContribuicao] = useState(null);
  const [valorAtingido, setValorAtingido] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularContribuicaoPeriodica = (valorMeta, valorInicial, frequencia, duracao) => {
    const frequencias = {
      semanal: 52,
      mensal: 12,
      anual: 1
    };
    
    const periodoContribuicoes = frequencias[frequencia];
    const numeroContribuicoes = duracao * periodoContribuicoes;
    const contribuicaoPeriodica = (valorMeta - valorInicial) / numeroContribuicoes;
    
    return contribuicaoPeriodica;
  };

  const calcularMetaFinanceira = (valorInicial, contribuicao, frequencia, duracao) => {
    const frequencias = {
      semanal: 52,
      mensal: 12,
      anual: 1
    };
    
    const periodoContribuicoes = frequencias[frequencia];
    const numeroContribuicoes = duracao * periodoContribuicoes;
    let valorTotal = valorInicial;
    
    for (let i = 0; i < numeroContribuicoes; i++) {
      valorTotal += contribuicao;
    }
    
    return valorTotal;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contrib = calcularContribuicaoPeriodica(parseFloat(valorMeta), parseFloat(valorInicial), frequencia, parseFloat(duracao));
    setContribuicao(contrib.toFixed(2));
    const valorFinal = calcularMetaFinanceira(parseFloat(valorInicial), contrib, frequencia, parseFloat(duracao));
    setValorAtingido(valorFinal.toFixed(2));

    if (valorFinal >= parseFloat(valorMeta)) {
      setMensagem('Parabéns! Você atingiu sua meta financeira!');
    } else {
      setMensagem('Você não atingiu sua meta financeira. Considere ajustar suas contribuições ou a duração para alcançar seu objetivo.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Metas Financeiras</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Valor Total da Meta:</label>
          <input type="number" value={valorMeta} onChange={(e) => setValorMeta(e.target.value)} required />
        </div>
        <div>
          <label>Valor Inicial:</label>
          <input type="number" value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} required />
        </div>
        <div>
          <label>Frequência das Contribuições:</label>
          <select value={frequencia} onChange={(e) => setFrequencia(e.target.value)}>
            <option value="semanal">Semanal</option>
            <option value="mensal">Mensal</option>
            <option value="anual">Anual</option>
          </select>
        </div>
        <div>
          <label>Duração (em anos):</label>
          <input type="number" value={duracao} onChange={(e) => setDuracao(e.target.value)} required />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {contribuicao !== null && (
        <div>
          <p>Para atingir a meta de R$ {valorMeta} em {duracao} anos com contribuições {frequencia}, você precisará contribuir aproximadamente R$ {contribuicao} por período.</p>
          <p>Valor total poupado ao final do período: R$ {valorAtingido}</p>
          <p>{mensagem}</p>
        </div>
      )}
    </div>
  );
}

export default App;
