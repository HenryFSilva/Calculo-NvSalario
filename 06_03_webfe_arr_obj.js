const nomeFuncionario = "Henry";
const salarioAtual = 3000;
const anosDeEmpresa = 5;

function calcularNovoSalario(nome, salario, anosNaEmpresa) {
    let aumento = 0;

    if (anosNaEmpresa <= 3) {
        aumento = salario * 0.03;
    } else if (anosNaEmpresa <= 10) {
        aumento = salario * 0.125;
    } else {
        aumento = salario * 0.2;
    }

    const novoSalario = salario + aumento;

    console.log(`Olá, ${nome}! Seu novo salário é de R$ ${novoSalario}.`);

    return novoSalario;
}


const novoSalario = calcularNovoSalario(nomeFuncionario, salarioAtual, anosDeEmpresa);