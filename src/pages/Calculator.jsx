document
  .getElementById("metaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const valorMeta = parseFloat(
      document
        .getElementById("valorMeta")
        .value.replace(/\./g, "")
        .replace(",", ".")
    );
    const valorInicial = parseFloat(
      document
        .getElementById("valorInicial")
        .value.replace(/\./g, "")
        .replace(",", ".")
    );
    const frequencia = document.getElementById("frequencia").value;
    const duracao = parseFloat(document.getElementById("duracao").value);

    const frequencias = {
      semanal: 52,
      quinzenal: 26,
      mensal: 12,
      anual: 1,
    };

    const periodosFrequencias = {
      semanal: ["semana", "semanais"],
      quinzenal: ["quinzena", "quinzenais"],
      mensal: ["mês", "mensais"],
      anual: ["ano", "anuais"],
    };

    const periodoContribuicoes = frequencias[frequencia];
    const numeroContribuicoes = duracao * periodoContribuicoes;
    const contribuicaoPeriodica =
      (valorMeta - valorInicial) / numeroContribuicoes;

    const calcularMetaFinanceira = (
      valorInicial,
      contribuicao,
      frequencia,
      duracao
    ) => {
      const periodoContribuicoes = frequencias[frequencia];
      const numeroContribuicoes = Math.floor(duracao * periodoContribuicoes);
      let valorTotal = valorInicial;

      for (let i = 0; i < numeroContribuicoes; i++) {
        valorTotal += contribuicao;
      }

      return valorTotal;
    };

    const valorAtingido = calcularMetaFinanceira(
      valorInicial,
      contribuicaoPeriodica,
      frequencia,
      duracao
    );

    const obterMensagemDuracao = (duracao) => {
      if (duracao <= 1) {
        return "Cada pequeno esforço diário te aproxima do seu objetivo!";
      } else if (duracao <= 3) {
        return "A constância é a chave para alcançar grandes sonhos!";
      } else {
        return "Grandes objetivos requerem tempo, e cada esforço será recompensado!";
      }
    };

    const pluralOuSingular = (valor, singular, plural) => {
      return valor === 1 ? singular : plural;
    };

    const duracaoTexto = pluralOuSingular(duracao, "ano", "anos");
    const contribuicaoTexto = pluralOuSingular(
      numeroContribuicoes,
      periodosFrequencias[frequencia][0],
      periodosFrequencias[frequencia][1]
    );
    const frequenciaTexto = periodosFrequencias[frequencia][0];
    const mensagemDuracao = obterMensagemDuracao(duracao);

    let mensagemFinal;
    if (valorAtingido >= valorMeta) {
      mensagemFinal = "Parabéns! Você atingiu sua meta financeira!";
    } else {
      mensagemFinal =
        "Você está muito perto de sua meta financeira! Com alguns ajustes nas contribuições ou na duração, você pode alcançar o valor exato desejado.";
    }

    const formatadorNumerico = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    document.getElementById("resultados").innerHTML = `
        <p>Para atingir a meta de ${formatadorNumerico.format(
          valorMeta
        )} em ${duracao} ${duracaoTexto} com contribuições ${contribuicaoTexto}, você precisará contribuir aproximadamente ${formatadorNumerico.format(
      contribuicaoPeriodica
    )} por ${frequenciaTexto}.</p>
        <p>${mensagemDuracao}</p>
        <p>${mensagemFinal}</p>
    `;
  });

const formatarParaDecimal = (input) => {
  input.addEventListener("input", function (event) {
    let valor = event.target.value.replace(/\D/g, "");
    valor = (parseFloat(valor) / 100)
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    event.target.value = valor;
  });
};

document.querySelectorAll('input[type="text"]').forEach(function (input) {
  formatarParaDecimal(input);
});

