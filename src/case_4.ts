const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentual(faturamento: Record<string, number>) {
  const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
  const percentuais = Object.fromEntries(
    Object.entries(faturamento).map(([estado, valor]) => [estado, ((valor / total) * 100).toFixed(2) + "%"])
  );
  return percentuais;
}

console.log("Percentual por estado:", calcularPercentual(faturamentoEstados));