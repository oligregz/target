function pertenceFibonacci(num: number): boolean {
  let a = 0;
  let b = 1;

  while (b < num) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === num || num === 0;
}

const numero = 21;
console.log(`O número ${numero} pertence à sequência de Fibonacci?`, pertenceFibonacci(numero));