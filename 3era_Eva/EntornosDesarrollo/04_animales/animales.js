/*
    3 clases: Animal(atributo nombre y método hablar), gato(hereda de animal), perro(hereda de animal)
*/

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar(){}
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre);
    }
    hablar(){
        console.log(`El gato llamado ${this.nombre} dice miau miau`);
    }
}

class Perro extends Animal{
    constructor(nombre){
        super(nombre);
    }
    hablar(){
        console.log(`El perro llamado ${this.nombre} dice miau miau`);
    }
}