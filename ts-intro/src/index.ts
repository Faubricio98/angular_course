/*
    ===== Código de TypeScript =====
*/

// BASIC TYPES
let nombre : string = "Faubricio";
let hp : number | string = 95;
let isAlive : boolean = true;

// ARRAY
let myName : string[] = ['Dave', 'Faubricio', 'Chaves'];
//myName.push(true); Lanza error
//myName.push(24); Lanza error
myName.push('Hernández'); //Solo recibe Strings

// OBJECTS
interface Persona{
    nombre: string;
    edad: number;
    pais: string;
    pueblo?: string;
};

const persona : Persona = {
    nombre: "Faubricio",
    edad: 24,
    pais: "Costa Rica"
};

persona.pueblo = "Tucurrique";

// FUNCIONES

function sumar(a : number, b : number) : number{
    return a + b;
}

const res = sumar(1, 15);

const funcArrow = (a : number, b : number) : number =>{
    return a + b;
};

function times(numero : number, base : number, otherNumero? : number) : number{
    return numero * base;
}

const resTimes = times(2, 23);

function curar(personaje : Persona, vida : number) : void{
    personaje.edad += vida;
    console.log(personaje);
}

curar(persona, 1);

// OBJETOS E INTERFACES
interface Address{
    town: string;
    city: string;
    country: string;
}

interface Superheroe{
    name: string;
    age: number;
    address: Address;
    showAddress : () => string;
}

const superheroe : Superheroe = {
    name : 'Spiderman',
    age: 25,
    address : {
        town: 'Tucurrique',
        city: 'Cartago',
        country: 'Costa Rica'
    },
    showAddress(){
        return this.address.town + ', ' + this.address.city + ', ' + this.address.country;
    }
};