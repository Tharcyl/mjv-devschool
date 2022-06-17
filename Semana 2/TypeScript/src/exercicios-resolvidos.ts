//Exercicio 1
interface Aluno {
    nome: string,
    profissao: string,
    idade: number,
    interesse: string[]
}

//Exercicio 2
const pessoa: Aluno = {
    nome: "Tharcyl",
    profissao: "Analista Junior",
    idade: 22,
    interesse: ["Jogar online", "Assistir series"]
}

//Exercicio 3 e 4   
function listaDeInteresses(aluno: Aluno): string[] {
    return aluno.interesse
}

console.log(listaDeInteresses(pessoa))

//Exercicio 5
enum Materia {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

//Exercicio 6
interface Professor {
    nome: string,
    lista_materia: Materia[]
}

//Exercicio 7
const alan: Professor = {
    nome: "Alan",
    lista_materia: [Materia.Angular, Materia.Git, Materia.Typescript]
}

const nathan: Professor = {
    nome: "Nathan",
    lista_materia: [Materia.Angular, Materia.Git]
}

//Exercicio 8
const professores: Array<Professor> = [
    alan,
    nathan
]

//Exercicio 9
function retornaNomes(professores: Array<Professor>): Array<string> {
    let resultado: Array<string>
    resultado = professores.map(function(element){
        return element.nome
    })

    return resultado
}

console.log(retornaNomes([alan, nathan]))

//Exercicio 10
function retornaMaterias(professores: Array<Professor>): Array<Materia>{
    
    let resultado: Array<Materia>
    
    resultado = professores.reduce(function(total_materias, professor){
        return total_materias.concat(professor.lista_materia)
    }, [] as Materia[])

    return resultado

    }

    console.log(retornaMaterias([alan, nathan]))

//Exercicio 11
function professorTypescript(professores: Array<Professor>): Professor | undefined{
    let resultado: Professor | undefined

    resultado = professores.find(element => element.lista_materia.includes(Materia.Typescript))

    return resultado
}

console.log(professorTypescript([nathan, alan]))
