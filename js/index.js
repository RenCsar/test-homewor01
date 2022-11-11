export function Verificar(txt) {
    if (txt == "sim") {
        return `parabéns!`;
    }
    else if (txt == "não") {
        return `Que pena`;
    }
    else {
        return `Você tem noção dos seus atos?`;
    }
}
;
//-------------------------------------------------------------------------------------------------------------
export function calcularTempo(valor) {
    let total = valor;
    const segundos = 1;
    const minutos = 60;
    const horas = 3600;
    const dias = 86400;
    if (valor >= dias) {
        var dia = Math.floor(valor / dias);
        valor = valor - (dias * Math.floor(valor / dias));
    }
    else {
        var dia = 0;
    }
    if (valor > horas) {
        var hora = Math.floor(valor / horas);
        valor = valor - (horas * Math.floor(valor / horas));
    }
    else {
        var hora = 0;
    }
    if (valor > minutos) {
        var minuto = Math.floor(valor / minutos);
        valor = valor - (minutos * minuto);
    }
    else {
        var minuto = 0;
    }
    let segundo = valor;
    return `Em ${total} segundos temos: ${dia} dias, ${hora} horas, ${minuto} minuto, e  ${segundo} segundos.`;
}
//-------------------------------------------------------------------------------------------------------------
export function verificaAno(ano) {
    if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
        return `é ano bissexto!`;
    }
    else {
        return `não é ano bissexto.`;
    }
}
;
//-------------------------------------------------------------------------------------------
export function Calcular(n1, n2, operacao) {
    switch (operacao) {
        case '+':
            return `${n1 + n2}`;
            break;
        case '-':
            return `${n1 - n2}`;
            break;
        case '*':
            return `${n1 * n2}`;
            break;
        case '/':
            if (n2 == 0) {
                return `Não existe divisão por zero.`;
            }
            ;
            return `${n1 / n2}`;
            break;
        default:
            return `Operação inválida! Reinicie a página.`;
    }
}
//---------------------------------------------------------------------------------------------------
export function diferencaDeIdade(idade1, idade2) {
    return `Nossa diferença de idade é ${idade1 - idade2}`;
}
// //----------------------------------------------------------------------------------------------------
export function calcularGeracoes(media, anoMedia) {
    return `Passaram ${Math.floor((anoMedia - 1500) / media)} gerações`;
}
