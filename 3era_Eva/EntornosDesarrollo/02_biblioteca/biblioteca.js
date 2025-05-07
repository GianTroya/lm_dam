/*
    Crear 3 clases en js
        Libro:
            -id
            -ISBN
            -título
            -autor
            -prestar()
            -devolver()

        Usuario:
            -id
            -nombre:
            -solicitarLibro()
            -devolverLibro()
        
        Bibliotecario:
            -id:
            -turno:
            -registrarLibro():
*/
class Libro{
    //Constructor
    constructor(id, isbn, titulo, autor){
        this.id = id;
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
    }
    //Métodos
    prestar(){
        console.log(`El libro ${this.titulo} ha sido prestado.`);
    };
    devolver(){
        console.log(`El libro ${this.titulo} ha sido devuelto.`);
    };
}

class Usuario{
    //Constructor
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
    //Métodos
    solicitarLibro(libro){
        console.log(`El usuario ${this.nombre} ha solicitado el libro ${libro.titulo}.`);
    };
    devolverLibro(libro){
        console.log(`El usuario ${this.nombre} ha devuelto el libro ${libro.titulo}.`);
    };
}

class Bibliotecario{
    //Constructor
    constructor(id, turno){
        this.id = id;
        this.turno = turno;
    }
    //Métodos
    registrarLibro(libro){
        console.log(`Se ha registrado el libro ${libro.titulo} (${libro.isbn}) del autor: ${libro.autor}`)
    };
}

const user = new Usuario(1, 'Jane');
const blacksad = new Libro(1, '987654321', 'blacksad', 'Juan Díaz Canales');
const maus = new Libro(1, '987654321', 'Maus', 'Art Spielgman');
const bibliotecario = new Bibliotecario(1, 'tarde');

user.solicitarLibro(blacksad);
user.solicitarLibro(maus);
user.devolverLibro(blacksad);

bibliotecario.registrarLibro(new Libro(3, '321654987', 'Watchmen', 'Alan Moore'));