
function valueSelection(){
 var valorSelecionado = document.getElementById("selecionaMateria");
 console.log(valorSelecionado.value);

     if(valorSelecionado.value === "Selecione uma Matéria") {
          document.getElementById("boas-vindas").style.display = 'block';

          document.getElementById("interfaceBhaskara").style.display = 'none';
          document.getElementById("resultadoCalc").style.display = 'none';
          document.getElementById("explicBhaskara").style.display = 'none';

          document.getElementById("interfacePorcentagem").style.display = 'none';
          document.getElementById("resultadoCalcPercent").style.display = 'none';
          document.getElementById("explicPorcentagem").style.display = 'none';

          document.getElementById("interfaceKMparaM").style.display = 'none';
          document.getElementById("resultadoCalcKMparaM").style.display = 'none';
          document.getElementById("explicKMparaM").style.display = 'none';

          document.getElementById("interfaceMparaKM").style.display = 'none';
          document.getElementById("resultadoCalcMparaKM").style.display = 'none';
          document.getElementById("explicMparaKM").style.display = 'none';
  
     }

     if(valorSelecionado.value === "Bhaskara"){
      document.getElementById("boas-vindas").style.display = 'none';

      document.getElementById("interfaceBhaskara").style.display = 'block';
      document.getElementById("resultadoCalc").style.display = 'none';
      document.getElementById("explicBhaskara").style.display = 'block';

      document.getElementById("interfacePorcentagem").style.display = 'none';
      document.getElementById("resultadoCalcPercent").style.display = 'none';
      document.getElementById("explicPorcentagem").style.display = 'none';

      document.getElementById("interfaceKMparaM").style.display = 'none';
      document.getElementById("resultadoCalcKMparaM").style.display = 'none';
      document.getElementById("explicKMparaM").style.display = 'none';

      document.getElementById("interfaceMparaKM").style.display = 'none';
      document.getElementById("resuladoCalcMparaKM").style.display = 'none';
      document.getElementById("explicMparaKM").style.display = 'none';
      
      console.log("bháskara selecionada") 
  }

     if(valorSelecionado.value === "Porcentagem"){
      document.getElementById("boas-vindas").style.display = 'none';

      document.getElementById("interfaceBhaskara").style.display = 'none';
      document.getElementById("resultadoCalc").style.display = 'none';
      document.getElementById("explicBhaskara").style.display = 'none';

      document.getElementById("interfacePorcentagem").style.display = 'block';
      document.getElementById("resultadoCalcPercent").style.display = 'none';
      document.getElementById("explicPorcentagem").style.display = 'block';

      document.getElementById("interfaceKMparaM").style.display = 'none';
      document.getElementById("resultadoCalcKMparaM").style.display = 'none';
      document.getElementById("explicKMparaM").style.display = 'none';

      document.getElementById("interfaceMparaKM").style.display = 'none';
      document.getElementById("resultadoCalcMparaKM").style.display = 'none';
      document.getElementById("explicMparaKM").style.display = 'none';

      console.log("porcentagem selecionada");
     }

     if(valorSelecionado.value === "KMparaM"){
      document.getElementById("boas-vindas").style.display = 'none';

      document.getElementById("interfaceBhaskara").style.display = 'none';
      document.getElementById("resultadoCalc").style.display = 'none';
      document.getElementById("explicBhaskara").style.display = 'none';

      document.getElementById("interfacePorcentagem").style.display = 'none';
      document.getElementById("resultadoCalcPercent").style.display = 'none';
      document.getElementById("explicPorcentagem").style.display = 'none';

      document.getElementById("interfaceKMparaM").style.display = 'block';
      document.getElementById("resultadoCalcKMparaM").style.display = 'none';
      document.getElementById("explicKMparaM").style.display = 'block';

      document.getElementById("interfaceMparaKM").style.display = 'none';
      document.getElementById("resultadoCalcMparaKM").style.display = 'none';
      document.getElementById("explicMparaKM").style.display = 'none';
      
     }

     if(valorSelecionado.value === "MparaKM"){
          document.getElementById("boas-vindas").style.display = 'none';

          document.getElementById("interfaceBhaskara").style.display = 'none';
          document.getElementById("resultadoCalc").style.display = 'none';
          document.getElementById("explicBhaskara").style.display = 'none';

          document.getElementById("interfacePorcentagem").style.display = 'none';
          document.getElementById("resultadoCalcPercent").style.display = 'none';
          document.getElementById("explicPorcentagem").style.display = 'none';

          document.getElementById("interfaceKMparaM").style.display = 'none';
          document.getElementById("resultadoCalcKMparaM").style.display = 'none';
          document.getElementById("explicKMparaM").style.display = 'none';

          document.getElementById("interfaceMparaKM").style.display = 'block';
          document.getElementById("resultadoCalcMparaKM").style.display = 'none';
          document.getElementById("explicMparaKM").style.display = 'block';
          
     }

}

//Código cálculo Bháskara
function btnCalcularBhaskara() {
   let valorDeA = document.getElementById("valorA").value;
   let valorDeB = document.getElementById("valorB").value;
   let valorDeC = document.getElementById("valorC").value;
   let resultado = document.getElementById("resultadoCalc");
   let explicacao = document.getElementById("explicBhaskara");

   let calculo1 = ((valorDeB * (-1)) + (Math.sqrt((valorDeB * valorDeB) - (4 * valorDeA * valorDeC)))) /(2 * valorDeA);
   let calculo2 = ((valorDeB * (-1)) - (Math.sqrt((valorDeB * valorDeB) - (4 * valorDeA * valorDeC)))) /(2 * valorDeA);



   if(isNaN(calculo1 || calculo2)) {
        resultado.style.display = 'block';
        explicacao.style.display = 'block';
        resultado.innerHTML = "O resultado é ∄"
        explicacao.innerHTML = "Para o cálculo da Bháskara será pego o valor de a(x²), o valor de b(x) e o valor de c. A partir desses valores montamos a fórmula de bháskara com " + "-b± √(b)² - 4.a.c / 2.a" + ", para montarmos substituíremos os valores de a, b e c na fórmula. Com isso chegaremos a " + "-" + valorDeB + "±" + "√" + '(' + valorDeB + ')' + '²' + '- 4.' + valorDeA + '.' + valorDeC + "/ 2." + valorDeA  + "." + ", o cálculo será feito e chegaremos na resposta, que será inexistente, pois após realizarmos os cálculos dentro da raíz, chegaremos a um valor que não possui raíz. Logo o resultado é ∄";
   } else {
        resultado.style.display = 'block';
        explicacao.style.display = 'block';
        resultado.innerHTML = "O Resultado é " + calculo1 + " e " + calculo2;
        explicacao.innerHTML = "Para o cálculo da Bháskara será pego o valor de a(x²), o valor de b(x) e o valor de c. A partir desses valores montamos a fórmula de bháskara com " + "-b± √(b)² - 4.a.c / 2.a" + ", para montarmos substituíremos os valores de a, b e c na fórmula. Com isso chegaremos a " + "-" + valorDeB + "±" + "√" + '(' + valorDeB + ')' + '²' + '- 4.' + valorDeA + '.' + valorDeC + "/ 2." + valorDeA  + ", o cálculo será feito e chegaremos na resposta que serão os valores " + calculo1 + " e " + calculo2 + ".";
   }
}

//Código cálculo Porcentagem
function btnCalcularPorcentagem() {
     let valorTotal = document.getElementById("valorTotalPorcentagem").value;
     let valorPorcentagem = document.getElementById("valorPorcento").value;

     let resultadoPorcentagem = document.getElementById("resultadoCalcPercent");
     let explicPorcent = document.getElementById("explicPorcentagem");

     if(isNaN(valorTotal || valorPorcentagem)){
          resultadoPorcentagem.style.display = 'block';
          resultadoPorcentagem.innerHTML = "Digite apenas números!"
     } else{
          resultadoPorcentagem.style.display = 'block';
          explicPorcent.style.display = 'block';
          let calculoPorcentagem = (valorTotal * valorPorcentagem) / 100;
          resultadoPorcentagem.innerHTML = "O Resultado é " + calculoPorcentagem + ".";
          explicPorcent.innerHTML = "Para esse cálculo é pego o valor total inserido e multiplicado pela porcentagem inserida, o resultado da multiplicação é dividido por 100, com isso teremos algo como " + "(" + valorTotal + "*" + valorPorcentagem + ")" + "/100" + ", após resolvermos essa expressão chegaremos a " + calculoPorcentagem + " que é o valor equivalente a " + valorPorcentagem + "% de " + valorTotal + ".";
     }

}

//Código cálculo KM para M
function btnCalcularKMparaM(){
     let valorDoKM = document.getElementById("valorKM").value;
     let resultadoKMparaM = document.getElementById("resultadoCalcKMparaM");
     let explicKMparaM = document.getElementById("explicKMparaM");
     
     if(isNaN(valorDoKM)){
     resultadoKMparaM.style.display = 'block';
     resultadoKMparaM.innerHTML = "Digite um valor válido!"
     } else {
     resultadoKMparaM.style.display = 'block';
     explicKMparaM.style.display = 'block';
     let calculoKMparaM = valorDoKM * 1000;
     resultadoKMparaM.innerHTML = valorDoKM + " KM equivale a " + calculoKMparaM + " metros."
     explicKMparaM.innerHTML = "Para essa conversão utilizaremos a multiplicação por 1000 para chegarmos ao resultado, pois 1km = 1000m. No caso, será " + valorDoKM + " * 1000, que será " + calculoKMparaM + ", com isso a conversão estará pronta.";
     }
}

//Código cálculo M para KM
function btnCalcularMparaKM(){
     let valorDoM = document.getElementById("valorM").value;
     let resultadoMparaKM = document.getElementById("resultadoCalcMparaKM");
     let explicMparaKM = document.getElementById("explicMparaKM");
     
     if(isNaN(valorDoM)){
     resultadoMparaKM.style.display = 'block';
     resultadoMparaKM.innerHTML = "Digite um valor válido!"
     } else {
     resultadoMparaKM.style.display = 'block';
     explicMparaKM.style.display = 'block';
     let calculoMparaKM = valorDoM / 1000;
     resultadoMparaKM.innerHTML = valorDoM + " M equivale a " + calculoMparaKM + " KM. ";
     explicMparaKM.innerHTML = "Para essa conversão utilizaremos a multiplicação por 1000 para chegarmos ao resultado, pois 1km = 1000m. No caso, será " + valorDoM + " / 1000, que equivale a " + calculoMparaKM + ", com isso a conversão estará pronta.";
     }
}

//Código cálculo M para CM


//Código cálculo CM para M


//Código cálculo H para M


//Código cálculo M para H
