function inverterString(str: string): string {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

const texto = "OpenAI";
console.log(`String invertida: ${inverterString(texto)}`);
