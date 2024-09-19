export function maiorNumero(lista){
    const maior = Math.max(...lista)
    if(maior == "-Infinity" || isNaN(maior)){
        return null
    } else {
        return maior
    }
}

export function verificarParOuImpar(numero){
    if(numero && typeof numero == typeof 1){
        if(numero % 2 === 0){
            return "Par"
        } else {
            return "Ímpar"
        }
    } else {
        return null
    }
}

export function contarCaracter(palavra,letra){
    if(!palavra || typeof palavra != typeof "string"){
        return null
    } else {
        let i = 0
        let quantidadeCaracter = 0
        while(i <= palavra.length - 1){
            palavra = palavra.toLowerCase()
            letra = letra.toLowerCase()
            if(palavra[i] === letra ){
                quantidadeCaracter ++
                i ++
            } else {
                i ++
            }
        }
        return quantidadeCaracter
    }
}

export function atualizarPropriedade(objeto, propriedade, novoValor){
    if(!propriedade){
        return null
    } 
    let keysObjeto = Object.keys(objeto)
    let propriedadeObjeto = keysObjeto.find((chave) => chave == propriedade)

    if(propriedadeObjeto){
        objeto[propriedadeObjeto] = novoValor
        return objeto
    } else {
        return null
    }
}
