function pipoca(padrao, tempo) {

    if (padrao >= 10 && tempo <= 15) {
        return pipoca = 'Prato pronto';
    } else (padrao <= 5 && tempo <= 10)
    return pipoca = 'tempo insuficiente';
}
function pipoca2(padrao, tempo) {
    if (padrao >= 20 && tempo <= 25) {
        return pipoca = 'Prato queimado';
    } else (padrao >= 30 && tempo >= 30)
    return pipoca = 'kabum';
}


function macarrao(padrao, tempo) {

    if (padrao >= 8 && tempo <= 15) {
        return macarrao = 'Prato pronto';
    } else (padrao < 8 && tempo < 8)
    return macarrao = 'tempo insuficiente';
}
function macarrao2(padrao, tempo) {
    if (padrao >= 16 && tempo <= 20) {
        return macarrao = 'Prato queimado';
    } else if (padrao > 24 && tempo > 24)
        return macarrao = 'kabumm';
}
function carne(padrao, tempo) {

    if (padrao >= 15 && tempo <= 25) {
        return carne = 'Prato pronto';
    } else (padrao < 15 && tempo <= 14)
    return carne = 'tempo insuficiente';
}
function carne2(padrao, tempo) {
    if (padrao >= 30 && tempo <= 40) {
        return carne = 'Prato queimado';
    } else if (padrao >= 45 && tempo >= 45)
        return carne = 'kabumm';
}
function feijao(padrao, tempo) {

    if (padrao >= 12 && tempo <= 24) {
        return feijao = 'Prato pronto';
    } else (padrao < 12 && tempo <= 11)
    return feijao = 'tempo insuficiente';
}
function feijao2(padrao, tempo) {
    if (padrao >= 24 && tempo <= 25) {
        return feijao = 'Prato queimado';
    } else if (padrao >= 36 && tempo <= 40)
        return feijao = 'kabumm';
}
function brigadeiro(padrao, tempo) {

    if (padrao >= 8 && tempo <= 15) {
        return brigadeiro = 'Prato pronto';
    } else (padrao < 8 && tempo < 8)
    return brigadeiro = 'tempo insuficiente';
}
function brigadeiro2(padrao, tempo) {
    if (padrao >= 16 && tempo <= 20) {
        return brigadeiro = 'Prato queimado';
    } else if (padrao > 24 && tempo > 24)
        return brigadeiro = 'kabumm';
}



let num = pipoca ( 10 ,15)
console.log(num);
