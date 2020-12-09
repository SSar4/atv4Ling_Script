class Usuario{
    constructor(nome, idade, empresa){
        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;

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
    constructor(nome,idade, empresa, email, senha){
        super(nome, idade,empresa);
        this.email = email;
        this.senha = senha;
        this.Admin = true;
       
    }
}

const User1 = new Usuario('luma@gmail.com','123');
const Adm1 = new Admin('luz@gmail.com','1w2');


console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
