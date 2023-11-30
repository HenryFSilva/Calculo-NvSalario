let num1 = 3;
let num2 = 3;

function comparar (num1, num2){
    if(num1>num2){
        return `O primeiro numero é o maior`;
    }
    else if(num1<num2){
        return `O segundo numero é o maior`;
    }else{
        return `Não existe valor maior, os dois são iguais`
    }
}

const result = comparar(num1,num2)
console.log(result);