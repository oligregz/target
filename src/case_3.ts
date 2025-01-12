interface Faturamento {
  dia: number;
  valor: number;
}

const faturamentoMensal: Faturamento[] = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 }, // Fim de semana/feriado
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 }
];

function analisarFaturamento(faturamento: Faturamento[]) {
  const valoresValidos = faturamento.filter(f => f.valor > 0).map(f => f.valor);
  const menor = Math.min(...valoresValidos);
  const maior = Math.max(...valoresValidos);
  const media = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
  const diasAcimaMedia = valoresValidos.filter(valor => valor > media).length;

  return { menor, maior, diasAcimaMedia };
}

const resultadoFaturamento = analisarFaturamento(faturamentoMensal);
console.log("Menor faturamento:", resultadoFaturamento.menor);
console.log("Maior faturamento:", resultadoFaturamento.maior);
console.log("Dias acima da média:", resultadoFaturamento.diasAcimaMedia);