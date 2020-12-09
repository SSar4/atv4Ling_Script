class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }
    
    isAdmin(){
        if(this.Admin){
            
            return true;
            
        }
        else{
           
            return false;
             

        }
               
    }
}
class Admin extends Usuario{
    constructor(email, senha){
        super(email,senha);
        this.email = email;
        this.senha = senha;
        this.Admin = true;
       
    }
}

const User1 = new Usuario('luma@gmail.com','123');
const Adm1 = new Admin('luz@gmail.com','1w2');


console.log(User1.isAdmin());
console.log(Adm1.isAdmin());


//ATIVIDADE 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
console.log('2.1');
let tdsIdades = usuarios.map(function (obj){
    return obj.idade
})

console.table(tdsIdades);

//2.2
console.log('2.2')
let FuncionarioMaioresDe18 = usuarios.filter((elem) => elem.empresa == 'Rocketseat' && elem.idade >18)
console.table(FuncionarioMaioresDe18)

//2.3
console.log('2.3')
let ProcuraFuncionario = usuarios.find(elem => elem.empresa == 'Google')
console.log(ProcuraFuncionario)
//2.4
let FuncionariosIdadeMultiplicada = usuarios.filter(function(elem){
    if(elem.idade*2 <50){
        elem.idade = elem.idade*2
        return elem
    }
  });
console.log('2.4')
console.table(FuncionariosIdadeMultiplicada)

//EXERCICIO 3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
console.log(arr);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario => usuario.idade);
console.log(mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => {
return new Promise((resolve, reject) => resolve())
}
console.log(promise());

//EXERCICIO 4

//4.1
console.log('\n\n destruturação simples')
const empresa = {
    nomeEmp: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
    
};
const {nomeEmp, endereco:{cidade, estado}} = empresa;
console.log(nomeEmp);
console.log(cidade);
console.log(estado);

//4.2
console.log('\n\ndestruturação por parametros')
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

//EXERCICIO 5

//5.1
const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((total, next) =>total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.2
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario1, nome: "Gabriel"}
const usuario3 = {...usuario1, endereco:{cidade:"Lontras"}}
console.log(usuario2);
console.log(usuario3);

//EXERCICIO 6

const user = 'Diego';
const age = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${user} possui ${age} anos`);

//EXERCICIO 7

//OBS: AProveitando as variaveis de cima, user e age

//const nome = 'Diego';
//const idade = 23;
const usuario4 = {
user,
age,
cidade: 'Rio do Sul',
};

console.log(usuario4);
