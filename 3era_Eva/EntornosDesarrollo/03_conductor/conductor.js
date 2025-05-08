
// clase persona

class Persona{

    // constructor
    constructor(nombre, pais, edad){
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }

    // método mostrarPersona
    mostrarPersona(){
        console.log(`Hola me llamo ${this.nombre}.`);
    }
}

// clase Conductor que hereda de Persona

class Conductor extends Persona{

    // constructor de Conductor
    constructor(nombre, pais, edad, licencia){
        super(nombre, pais, edad);
        this.licencia = licencia;
        this.vehiculos = [];
    }
    
    // metodo mostrarDetalles
    mostrarDetalles(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`País: ${this.pais}.`);
        console.log(`Edad: ${this.edad}.`);
        console.log(`Licencia: ${this.licencia}.`);
    }

    // método agregarVehiculo()
    agregarVehiculo(Vehiculo){
        this.Vehiculo.push(Vehiculo);
    }
}

// clase Vehiculo

class Vehiculo{

    // constructor
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // método mostrarDetalles
    mostrarDetalles(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}.`);
        console.log(`Año: ${this.año}.`);
    }
}

const newConductor = new Conductor('Carlos', 'España', 25, 'Permiso B');
newConductor.mostrarDetalles();

const newVehiculo = new Vehiculo('Chevrolet', 'Camaro', 2008);
newVehiculo.mostrarDetalles();