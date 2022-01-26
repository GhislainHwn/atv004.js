//1 - crie uma função que exiba uma mensagem no console
function sms(){
    console.log("Fazendo o desafio 04")
}sms()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function meuNome(nome){
    console.log(nome)
}meuNome("Ghislain")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function nomeIdadeEst(nome, idade, estiloMusical) {
    console.log(nome, idade, estiloMusical )
}nomeIdadeEst("Ghislain",26+" anos", "Rap")
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filmeMusic(filme, musica) {
    console.log(filme, musica)
}filmeMusic("Don't look up", "La lune")
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triploN(numero){
    console.log(numero *3)
}triploN(26)