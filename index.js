class Heroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    
    atacar() {
        
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque genérico";
        }

        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("lincoln", 23, "mago");
const guerreiro = new Heroi("ericklles", 21, "guerreiro");
const monge = new Heroi("dennis", 34, "monge");
const ninja = new Heroi("dayane", 25, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();