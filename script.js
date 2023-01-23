function calculadora() {
    const operacao = Number(prompt("Escolha alguma operção:\n 1 - Adição (+) \n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)"));

    if (!operacao || operacao >= 7) {
        alert("Opereção inválida");
        calculadora();
    }

    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor"));
    let result;

    if (!n1 || !n2) {
        alert("Parametros inválidos");
        calculadora();
    } else {
        function adicao() {
            result = n1 + n2;
            alert(`${n1} + ${n2} = ${result}`)
            novaOperacao();
        }
        function subtracao() {
            result = n1 - n2;
            alert(`${n1} - ${n2} = ${result}`)
            novaOperacao();
        }
        function multiplicacao() {
            result = n1 * n2;
            alert(`${n1} * ${n2} = ${result}`)
            novaOperacao();
        }
        function divisaor() {
            result = n1 / n2;
            alert(`${n1} / ${n2} = ${result}`)
            novaOperacao();
        }
        function divisaoi() {
            result = n1 % n2;
            alert(`O resto da divisão de ${n1} e ${n2} é ${result} `)
            novaOperacao();
        }
        function potenciacao() {
            result = n1 ** n2;
            alert(`${n1} elevado à ${n2} é ${result}`)
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt("Deseja fazer mais operações?\n 1 - Sim\n 2 - Não")

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert("Até Mais")
            } else {
                alert("Digite alguma opção válida!")
                novaOperacao();
            }
        }
    }
    if (operacao == 1) {
        adicao();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaor();
    } else if (operacao == 5) {
        divisaoi();
    } else if (operacao == 6) {
        potenciacao();
    }
}
calculadora();