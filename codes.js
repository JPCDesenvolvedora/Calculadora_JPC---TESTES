
function valueSelection(){
 var valorSelecionado = document.getElementById("selecionaMateria");
 console.log(valorSelecionado.value);

     if(valorSelecionado.value === "Bhaskara"){
      document.getElementById("interfaceBhaskara").style.display = 'block';
      document.getElementById("interfacePorcentagem").style.display = 'none';

      console.log("bháskara selecionada") 
  }

     if(valorSelecionado.value === "Porcentagem"){
      document.getElementById("interfaceBhaskara").style.display = 'none';
      document.getElementById("interfacePorcentagem").style.display = 'block';

      console.log("porcentagem selecionada");
     }

}

//Código cálculo Bháskara
function btnCalcularBhaskara() {
   let valorDeA = document.getElementById("valorA").value;
   let valorDeB = document.getElementById("valorB").value;
   let valorDeC = document.getElementById("valorC").value;
   let resultado = document.getElementById("resultadoCalc");

   let calculo1 = ((valorDeB * (-1)) + (Math.sqrt((valorDeB * valorDeB) - (4 * valorDeA * valorDeC)))) /(2 * valorDeA);
   let calculo2 = ((valorDeB * (-1)) - (Math.sqrt((valorDeB * valorDeB) - (4 * valorDeA * valorDeC)))) /(2 * valorDeA);



   if(isNaN(calculo1 || calculo2)) {
        resultado.innerHTML = "O resultado é ∄"
   } else {
        resultado.innerHTML = "Resultado é " + calculo1 + " e " + calculo2;
   }
  //console.log(valorDeA);
  //console.log(valorDeB);
  //console.log(valorDeC);
  console.log(calculo1);
  console.log(calculo2);
}

function btnCalcularPorcentagem() {
     let valorTotal = document.getElementById("valorTotalPorcentagem").value;
     let valorPorcentagem = document.getElementById("valorPorcento").value;

     let resultadoPorcentagem = document.getElementById("resultadoCalcPercent");

     if(isNaN(valorTotal || valorPorcentagem)){
          resultado.innerHTML = "Digite apenas números!"
     } else{
     let calculoPorcentagem = (valorTotal * valorPorcentagem) / 100;

     resultadoPorcentagem.innerHTML = "O Resultado é " + calculoPorcentagem + ".";
     }

}