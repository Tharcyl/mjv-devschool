"use strict";
//Exercicio 2
const pessoa = {
    nome: "Tharcyl",
    profissao: "Analista Junior",
    idade: 22,
    interesse: ["Jogar online", "Assistir series"]
};
//Exercicio 3 e 4   
function listaDeInteresses(aluno) {
    return aluno.interesse;
}
console.log(listaDeInteresses(pessoa));
//Exercicio 5
var Materia;
(function (Materia) {
    Materia["Angular"] = "Angular";
    Materia["Typescript"] = "Typescript";
    Materia["Git"] = "Git";
})(Materia || (Materia = {}));
//Exercicio 7
const alan = {
    nome: "Alan",
    lista_materia: [Materia.Angular, Materia.Git, Materia.Typescript]
};
const nathan = {
    nome: "Nathan",
    lista_materia: [Materia.Angular, Materia.Git]
};
//Exercicio 8
const professores = [
    alan,
    nathan
];
//Exercicio 9
function retornaNomes(professores) {
    let resultado;
    resultado = professores.map(function (element) {
        return element.nome;
    });
    return resultado;
}
console.log(retornaNomes([alan, nathan]));
//Exercicio 10
function retornaMaterias(professores) {
    let resultado;
    resultado = professores.reduce(function (total_materias, professor) {
        return total_materias.concat(professor.lista_materia);
    }, []);
    return resultado;
}
console.log(retornaMaterias([alan, nathan]));
//Exercicio 11
function professorTypescript(professores) {
    let resultado;
    resultado = professores.find(element => element.lista_materia.includes(Materia.Typescript));
    return resultado;
}
console.log(professorTypescript([nathan, alan]));
