// Crie um objeto que receba ao menos três propriedades sobre você.

const jai = {
    nome: "Jaianny Vívian",
    idade: 30,
    profissão: "Estudante e Atendente"
}
console.log(jai);

// Adicione uma nova propriedade sem alterar seu objeto inicial.

jai.estado = "DF";
console.log(jai);

// Remova uma propriedade desse objeto.

delete jai.idade;
console.log(jai);

//Mostre no console todas as propriedades desse objeto.

jai.idade = "30"
console.log(jai);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

const cadastro = [
    {
        nome: "Boi",
        idade: 10,
        telefone: "555-5555",
        amigos: ["vaca", "árvore", "cavalo", "curral"]
    }, 
    {
        nome: "Vaca",
        idade: 12,
        telefone: "333-5555",
        amigos: ["boi", "árvore", "cavalo", "curral"]
    }, 
    {
        árvorenome: "Árvore",
        idade: 25,
        telefone: "555-8596",
        amigos: ["vaca", "boi", "cavalo", "curral"]
    },
    {
        nome: "Cavalo",
        idade: 5,
        telefone: "245-6325",
        amigos: ["boi", "vaca", "árvore", "curral"]
    }, 
    {
        nome: "Curral",
        idade: 50,
        telefone: "Não tem",
        amigos: ["boi", "vaca", "árvore", "cavalo", ]
    }
];

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
