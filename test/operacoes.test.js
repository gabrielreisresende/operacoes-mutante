const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

// === BLOCO 1: Operações Básicas (1–10) ===
describe('Bloco 1 – Operações Básicas', () => {
  test("1. soma de dois números positivos deve retornar a soma correta", () => { expect(soma(2, 3)).toBe(5); });
  test("1.1 soma de um número negativo e um positivo deve retornar a soma correta", () => { expect(soma(-2, 3)).toBe(1); });

  test("2. subtração de dois números positivos deve retornar o resultado correto", () => { expect(subtracao(5, 2)).toBe(3); });
  test("2.1 subtração de dois números negativos deve retornar o resultado correto", () => { expect(subtracao(-2, -3)).toBe(1); });

  test("3. multiplicação de dois números positivos deve retornar o produto correto", () => { expect(multiplicacao(3, 4)).toBe(12); });
  test("3.1 multiplicação de um número negativo e um positivo deve retornar o produto correto", () => { expect(multiplicacao(-3, 4)).toBe(-12); });

  test("4. divisão de dois números positivos deve retornar o quociente correto", () => { expect(divisao(10, 2)).toBe(5); });
  test("4.1 divisão por zero deve lançar um erro", () => { expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.'); });

  test("5. potência com expoente positivo deve retornar o valor correto", () => { expect(potencia(2, 3)).toBe(8); });
  test("5.1 potência com expoente zero deve retornar 1", () => { expect(potencia(5, 0)).toBe(1); });

  test("6. raiz quadrada de número positivo deve retornar o valor correto", () => { expect(raizQuadrada(9)).toBe(3); });
  test("6.1 raiz quadrada de zero deve retornar 0", () => { expect(raizQuadrada(0)).toBe(0); });
  test("6.2 raiz quadrada de número negativo deve lançar erro", () => { expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'); });

  test("7. resto da divisão deve retornar o valor correto", () => { expect(restoDivisao(10, 3)).toBe(1); });

  test("8. fatorial de número positivo deve retornar o valor correto", () => { expect(fatorial(5)).toBe(120); });
  test("8.1 fatorial de zero deve retornar 1", () => { expect(fatorial(0)).toBe(1); });
  test("8.2 fatorial de um deve retornar 1", () => { expect(fatorial(1)).toBe(1); });
  test("8.3 fatorial de número negativo deve lançar erro", () => { expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.'); });

  test("9. somaArray de array com números deve retornar soma correta", () => { expect(somaArray([1, 2, 3])).toBe(6); });
  test("9.1 somaArray de array vazio deve retornar 0", () => { expect(somaArray([])).toBe(0); });

  test("10. mediaArray de array com números deve retornar média correta", () => { expect(mediaArray([1, 2, 3])).toBe(2); });
  test("10.1 mediaArray de array vazio deve retornar 0", () => { expect(mediaArray([])).toBe(0); });
});

// === BLOCO 2: Arrays e Checagens (11–20) ===
describe('Bloco 2 – Arrays e Checagens', () => {
  test("11. maximoArray deve retornar o maior valor do array", () => { expect(maximoArray([1, 5, 3])).toBe(5); });
  test("11.1 maximoArray de array vazio deve lançar erro", () => { expect(() => maximoArray([])).toThrow(new Error('Array vazio не possui valor máximo.')); });

  test("12. minimoArray deve retornar o menor valor do array", () => { expect(minimoArray([1, 5, 3])).toBe(1); });
  test("12.1 minimoArray de array vazio deve lançar erro", () => { expect(() => minimoArray([])).toThrow(new Error('Array vazio не possui valor mínimo.')); });

  test("13. valorAbsoluto de número negativo deve retornar positivo", () => { expect(valorAbsoluto(-10)).toBe(10); });
  test("14. arredondar número decimal deve retornar inteiro mais próximo", () => { expect(arredondar(4.6)).toBe(5); });

  test("15. isPar deve retornar true para número par", () => { expect(isPar(4)).toBe(true); });
  test("15.1 isPar deve retornar false para número ímpar", () => { expect(isPar(5)).toBe(false); });

  test("16. isImpar deve retornar true para número ímpar", () => { expect(isImpar(3)).toBe(true); });
  test("16.1 isImpar deve retornar false para número par", () => { expect(isImpar(2)).toBe(false); });

  test("17. calcularPorcentagem deve retornar o valor correto da porcentagem", () => { expect(calcularPorcentagem(10, 200)).toBe(20); });
  test("18. aumentarPorcentagem deve retornar valor aumentado corretamente", () => { expect(aumentarPorcentagem(100, 10)).toBe(110.00000000000001); });
  test("19. diminuirPorcentagem deve retornar valor diminuído corretamente", () => { expect(diminuirPorcentagem(100, 10)).toBe(90); });
  test("20. inverterSinal deve inverter o sinal do número", () => { expect(inverterSinal(10)).toBe(-10); });
});

// === BLOCO 3: Trigonometria e Logaritmos (21–30) ===
describe('Bloco 3 – Trigonometria e Logaritmos', () => {
  test("21. seno de 0 deve retornar 0", () => { expect(seno(0)).toBe(0); });
  test("22. cosseno de 0 deve retornar 1", () => { expect(cosseno(0)).toBe(1); });
  test("23. tangente de 0 deve retornar 0", () => { expect(tangente(0)).toBe(0); });

  test("24. logaritmoNatural de e deve retornar 1", () => { expect(logaritmoNatural(Math.E)).toBeCloseTo(1); });
  test("25. logaritmoBase10 de 100 deve retornar 2", () => { expect(logaritmoBase10(100)).toBe(2); });

  test("26. arredondarParaBaixo deve arredondar corretamente para baixo", () => { expect(arredondarParaBaixo(4.9)).toBe(4); });
  test("27. arredondarParaCima deve arredondar corretamente para cima", () => { expect(arredondarParaCima(4.1)).toBe(5); });

  test("28. hipotenusa deve retornar valor correto do triângulo retângulo", () => { expect(hipotenusa(3, 4)).toBe(5); });

  test("29. grausParaRadianos deve converter 180° para π radianos", () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test("30. radianosParaGraus deve converter π radianos para 180°", () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });
});

// === BLOCO 4: Teoria dos Números e Sequências (31–40) ===
describe('Bloco 4 – Teoria dos Números e Sequências', () => {
  test("31. mdc de 12 e 8 deve retornar 4", () => { expect(mdc(12, 8)).toBe(4); });
  test("32. mmc de 4 e 6 deve retornar 12", () => { expect(mmc(4, 6)).toBe(12); });

  test("33. isPrimo deve retornar true para número primo", () => { expect(isPrimo(7)).toBe(true); });
  test("33.1 isPrimo deve retornar false para 1", () => { expect(isPrimo(1)).toBe(false); });
  test("33.2 isPrimo deve retornar false para número composto", () => { expect(isPrimo(4)).toBe(false); });

  test("34. fibonacci de 0 deve retornar 0", () => { expect(fibonacci(0)).toBe(0); });
  test("34.1 fibonacci de 1 deve retornar 1", () => { expect(fibonacci(1)).toBe(1); });
  test("34.2 fibonacci de 6 deve retornar 8", () => { expect(fibonacci(6)).toBe(8); });

  test("35. produtoArray de vários números deve retornar o produto correto", () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test("35.1 produtoArray de array vazio deve retornar 1", () => { expect(produtoArray([])).toBe(1); });
  test("35.2 produtoArray de array com um elemento deve retornar o próprio elemento", () => { expect(produtoArray([5])).toBe(5); });

  test("36. clamp deve manter valor dentro do intervalo", () => { expect(clamp(5, 0, 10)).toBe(5); });
  test("36.1 clamp deve fixar no mínimo quando valor menor que intervalo", () => { expect(clamp(-1, 0, 10)).toBe(0); });
  test("36.2 clamp deve retornar mínimo quando valor igual ao mínimo", () => { expect(clamp(0, 0, 10)).toBe(0); });
  test("36.3 clamp deve fixar no máximo quando valor maior que intervalo", () => { expect(clamp(11, 0, 10)).toBe(10); });
  test("36.4 clamp deve retornar máximo quando valor igual ao máximo", () => { expect(clamp(10, 0, 10)).toBe(10); });

  test("37. isDivisivel deve retornar true quando divisível", () => { expect(isDivisivel(10, 2)).toBe(true); });
  test("37.1 isDivisivel deve retornar false quando não divisível", () => { expect(isDivisivel(10, 3)).toBe(false); });

  test("38. celsiusParaFahrenheit de 0 deve retornar 32°F", () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test("38.1 celsiusParaFahrenheit de valor negativo deve retornar valor correto", () => { expect(celsiusParaFahrenheit(-10)).toBe(14); });

  test("39. fahrenheitParaCelsius de 32°F deve retornar 0°C", () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test("39.1 fahrenheitParaCelsius de valor negativo deve retornar valor correto", () => { expect(fahrenheitParaCelsius(14)).toBe(-10); });

  test("40. inverso de número diferente de zero deve retornar valor correto", () => { expect(inverso(2)).toBe(0.5); });
  test("40.1 inverso de zero deve lançar erro", () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });
});

// === BLOCO 5: Geometria e Comparações (41–50) ===
describe('Bloco 5 – Geometria e Comparações', () => {
  test("41. areaCirculo deve retornar a área correta", () => { expect(areaCirculo(2)).toBeCloseTo(Math.PI * 4); });

  test("42. areaRetangulo deve retornar área correta", () => { expect(areaRetangulo(5, 2)).toBe(10); });
  test("43. perimetroRetangulo deve retornar perímetro correto", () => { expect(perimetroRetangulo(5, 2)).toBe(14); });

  test("44. isMaiorQue deve retornar true quando o primeiro valor for maior", () => { expect(isMaiorQue(5, 2)).toBe(true); });
  test("44.1 isMaiorQue deve retornar false quando os valores forem iguais", () => { expect(isMaiorQue(5, 5)).toBe(false); });

  test("45. isMenorQue deve retornar true quando o primeiro valor for menor", () => { expect(isMenorQue(2, 5)).toBe(true); });
  test("45.1 isMenorQue deve retornar false quando os valores forem iguais", () => { expect(isMenorQue(5, 5)).toBe(false); });

  test("46. isEqual deve retornar true quando os valores forem iguais", () => { expect(isEqual(3, 3)).toBe(true); });
  test("46.1 isEqual deve retornar false quando os valores forem diferentes", () => { expect(isEqual(3, 4)).toBe(false); });

  test("47. medianaArray de array com número ímpar de elementos deve retornar mediana correta", () => { expect(medianaArray([1, 3, 2])).toBe(2); });
  test("47.1 medianaArray de array com número par de elementos deve retornar mediana correta", () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
  test("47.2 medianaArray de array vazio deve lançar erro", () => { expect(() => medianaArray([])).toThrow(new Error('Array vazio не possui mediana.')); });

  test("48. dobro deve retornar o valor multiplicado por 2", () => { expect(dobro(3)).toBe(6); });
  test("49. triplo deve retornar o valor multiplicado por 3", () => { expect(triplo(3)).toBe(9); });
  test("50. metade deve retornar o valor dividido por 2", () => { expect(metade(8)).toBe(4); });
});