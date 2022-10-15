// Doble pleca para hacer comentatios de una línea.

/* Pleca y Asterisco abren un comentario de línea mñultiple...
..............................................................
...Asterisco y Pleca cierran un comentario de línea múltiple. */

/*
Lenguajes de Programación Tipados: Java, C++, C

Variables:
            Integer
            String
            Boolean

Lenguajes de Programación No Tipados: JavaScript: JavaScript

-- Superset TypeScript

Declaración de Variables:
                            let : Declara la variable en su entorno local.
                            var : Declara la variable en un entorno global.
                            const : Es una variable estática o fija.
                            this. : 
*/

const NumDia = 17;
    console.log(NumDia)

let Name = 'Mirza';
    console.log(Name)
    Name = 'Memo';
    console.log(Name)
        if(true){
            let Name = 'Mirmo';
            Name = 'Meza'
        }
    console.log(Name)

        if(true){
            let Age = 21;
            console.log(Age)
        }
        // Age = 22;
        // console.log(Age)

var Greeting = 'Hola';
        console.log(Greeting)

function Greet(){
    this.Name = 'Antonio';
    console.log(this.Name);
    let Name = 'y Alejandra';
    console.log(this.Name, Name);
}

Greet();