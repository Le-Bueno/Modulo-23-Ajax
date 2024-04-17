//Abstração


class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


}

// Classe herdeira 1
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        return "Au Au!";
    }
}

// Classe herdeira 2
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        return "Miau!";
    }
}

const cachorro1 = new Cachorro("Max", 5, "Labrador");
const gato1 = new Gato("Bella", 3, "Branco");
const cachorro2 = new Cachorro("Rex", 2, "Vira-lata");


console.log(cachorro1.emitirSom());
console.log(gato1.emitirSom());
console.log(cachorro2.emitirSom()); 
