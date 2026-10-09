  // Cada funcao recebe dois numeros e devolve o resultado.
    function somar(a, b) {
      return a + b;
    }


    function subtrair(a, b) {
      return a - b;
    }


    function multiplicar(a, b) {
      return a * b;
    }


    function dividir(a, b) {
      return a / b;
    }


    // Esta função lê os campos, escolhe a operação
    // e apresenta o resultado no HTML.
    function calcular(operacao) {
      // 1. Localiza os campos e o parágrafo de resultado.
      const campo1 = document.getElementById("numero1");
      const campo2 = document.getElementById("numero2");
      const textoResultado = document.getElementById("resultado");


      // 2. Verifica se algum campo está vazio.
      if (campo1.value === "" || campo2.value === "") {
        textoResultado.textContent = "Preencha os dois números.";
        return; // Encerra a função sem realizar o cálculo.
      }


      // 3. Obtém os valores dos campos como números.
      const numero1 = campo1.valueAsNumber;
      const numero2 = campo2.valueAsNumber;


      // 4. Confere se os dois valores são números válidos.
      if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
        textoResultado.textContent = "Digite números válidos.";
        return;
      }


      let resultado;
      let simbolo;


      // 5. Chama a função correspondente à operação escolhida.
      switch (operacao) {
        case "somar":
          resultado = somar(numero1, numero2);
          simbolo = "+";
          break;


        case "subtrair":
          resultado = subtrair(numero1, numero2);
          simbolo = "−";
          break;


        case "multiplicar":
          resultado = multiplicar(numero1, numero2);
          simbolo = "×";
          break;


        case "dividir":
          // A divisão por zero não será permitida.
          if (numero2 === 0) {
            textoResultado.textContent = "Não é possível dividir por zero.";
            return;
          }


          resultado = dividir(numero1, numero2);
          simbolo = "÷";
          break;


        default:
          textoResultado.textContent = "Operação inválida.";
          return;
      }


      // 6. Verifica se o cálculo ultrapassou o limite numérico.
      if (!Number.isFinite(resultado)) {
        textoResultado.textContent = "O resultado ultrapassou o limite numérico.";
        return;
      }


      // 7. Formata o resultado para apresentação em português.
      const resultadoFormatado = resultado.toLocaleString("pt-BR", {
        maximumFractionDigits: 10
      });


      // 8. Exibe a conta e o resultado no parágrafo do HTML.
      textoResultado.textContent =
        `${numero1.toLocaleString("pt-BR")} ${simbolo} ` +
        `${numero2.toLocaleString("pt-BR")} = ${resultadoFormatado}`;
    }
