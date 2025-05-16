class Persona{
    // constructor
    Persona(nombre, dni, edad, colorCabello){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.colorCabello = colorCabello;
    }
    // métodos
    camina(distancia){
        console.log(`La Persona llamada ${this.nombre} ha recorrido una distancia de ${distancia} km.`);
    }
    come(comida){
        console.log(`${this.nombre} está comiendo ${comida}.`);
    }
    habla(idioma){
        console.log(`${this.nombre} tiene como lengua materna: ${idioma}.`);
    }
}

class Estudiante extends Persona{
    // constructor
    Estudiante(nombre, dni, edad, colorCabello){
        super(nombre, dni, edad, colorCabello);
    }
    // métodos
    estudia(materia){
        console.log(`El alumno ${this.nombre} estudia ${materia}.`);
    }
}

class Profesor extends Persona{
    // constructor
    Profesor(nombre, dni, edad, colorCabello){
        super(nombre, dni, edad, colorCabello);
    }
    // métodos
    enseña(materia){
        console.log(`El profesor ${this.nombre} enseña ${materia}.`);
    }
}

const persona = new Persona('Pipido','11223344Z',21,'Marrón oscuro');
var distancia = 10.0;
persona.camina(distancia);