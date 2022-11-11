import { Verificar, calcularTempo, verificaAno, Calcular, diferencaDeIdade, calcularGeracoes } from './index';

//Exercício 2

describe('verificar se retorno está igual a especificação', ()=>{
  test('testar se o parâmetro da função for sim', ()=>{
    expect(Verificar("sim")).toBe("parabéns!");
  });

  test('verificar resposta padrão caso parâmetro não entre no casos acima', ()=>{
    expect(Verificar('outra coisa')).toBe(`Você tem noção dos seus atos?`)
  });
});

// exercício 5

describe('Metrificar quantidade de tempo a apartir de segundos',()=>{
  test('verificar quantos segundos tem em um dia', ()=>{
    expect(calcularTempo(86400)).toBe(`Em 86400 segundos temos: 1 dias, 0 horas, 0 minuto, e  0 segundos.`);
  });

  test('verificar quantos segundos tem em uma hora', ()=>{
    expect(calcularTempo(3600)).toBe(`Em 3600 segundos temos: 0 dias, 0 horas, 60 minuto, e  0 segundos.`);
  });

})








//exercício 6

describe('verficiar ano bissexto',()=>{
  test('verificar quando ano passado é bissexto', ()=>{
    expect(verificaAno(2008)).toBe(`é ano bissexto!`);
  });

  test('verificar quando ano passado não é bissexto', ()=>{
    expect(verificaAno(2009)).toBe(`não é ano bissexto.`);
  });

})


//exercício 8

describe('verificar operações aritméticas', ()=>{
  
  test('verificar soma', ()=>{
    expect(Calcular(1, 1, '+')).toBe(`2`)
  });

  test('verificar subtração', ()=>{
    expect(Calcular(1, 1, '-')).toBe(`0`)
  });

  test('verificar multiplicação', ()=>{
    expect(Calcular(3, 5, '*')).toBe(`15`)
  });

  test('verificar divisão', ()=>{
    expect(Calcular(10, 2, '/')).toBe(`5`)
  });

});


//exercício 9

test('verificar diferença entre as idades', ()=>{
  expect(diferencaDeIdade(15, 30)).toBe(`Nossa diferença de idade é -15`)
});

//exercicio 10

test('verificar numero de gerações até o ano 200', ()=>{
  expect(calcularGeracoes(30, 2000)).toBe(`Passaram 16 gerações`);
})