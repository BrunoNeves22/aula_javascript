
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obriado pro clicar!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert ("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://google.com/");
    // window.location.href = "https://google.com/";
}
function trocar (elemento){
    elemento.innerHTML = "Obrigado passar o mouse!";
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}
function voltar (elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load (){
    alert("Pagina carregada!");
}
function funcaoChange (elemento){
    console.log(elemento.value);
}


// function soma(n1, n2){
//     return n1 + n2;
// }

// function validarIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     }else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validarIdade(idade));

// var d = date();
// alert(d.getDay());
// alert(d.gethOURS());
// alert(d.getMinutes());


// var count;
// for(count = 0; count <= 5; count++){
//     alert(count);
// }


// var count = 0;
// while (count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }


// var idade = prompt("Qual sua idade?");
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };


// var frutas = [{nome:"maca" , cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);


// var fruta = {nome:"maca", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);


// var lista= ["marca", "pera", "laranja"];
// lista.push("uva");
// lista.pop();


// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" "));


// var nome = " Bruno Neves";
// var n1 = 37;
// var n2 = 10;
// var frase = "Japao eh o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase.toLowerCase());
// console.log(frase.replece("Japao", "Brasil"));