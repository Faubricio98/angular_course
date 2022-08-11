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

// DESESTRUCTURACIÓN DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anno: number;
}

const reproductor : Reproductor = {
    volumen: 20,
    segundo: 123,
    cancion: "Go West",
    detalles: {
        autor: "Pet Shop Boys",
        anno: 1998
    }
}

// ------------ SEPARA LAS VARIABLES DEL OBJETO ------------ //
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anno} = detalles;

// DESESTRUCTURACIÓN DE ARREGLOS
const carros: string[] = ["BMW", "Mercedez Benz", "VOlvo"];
const [c1, c2, c3] = carros;

// DESESTRUCTURACIÓN DE ARGUMENTOS
import { calcISV } from "./functions";
import { Producto } from './interfaces';

const telefono : Producto = {
    detalle: "Xiaomi 11T",
    precio: 300
}

const tablet : Producto = {
    detalle: "iPad",
    precio: 200
}

const articulos = [telefono, tablet];
const [total, isv] = calcISV(articulos);

// IMPORTACIONES Y EXPORTACIONES
import { Carrito } from "./interfaces";

const miCarrito : Carrito = {
    productos: [
        {
            detalle: "Detail",
            precio: 122,
        },
        {
            detalle: "Detail 1",
            precio: 234,
        },
        {
            detalle: "Detail 2",
            precio: 645,
        },
        {
            detalle: "Detail 3",
            precio: 876,
        },
    ],
    total: 0
}

const [total_, isv_] = calcISV(miCarrito.productos);
miCarrito.total = total_;

// CLASES BÁSICAS
class PersonaNormal{
    constructor(
        public nombre : string,
        public edad : number,
        public direccion : Address
    ){}
}

class Heroe extends PersonaNormal{
    // CONSTRUCTOR
    constructor(
        public alterEgo: string,
        public nombre : string
    ){
        super(nombre, 25, {town: "Tucurrique", city: "Cartago", country: "Costa RIca"});
    }
}

const spiderman = new Heroe("SpiderMan", "Peter Parker");
console.log(spiderman);

// GENÉRICOS
//function queTipoSoy(argumento){ // argumento : any, funcion : any
function queTipoSoy<T>(argumento : T){ // argumento : any, funcion : any
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo desde Angular!!');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9]);
let soyExplicito = queTipoSoy<number>(200);

// DECORADORES
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class SuperClass{
    public myProperty : string = "ABC123";
    print(){
        console.log("Hola Mundo desde Angular");
    }
}

console.log(SuperClass);

// ENCADENAMIENTO OPCIONAL
interface Pasajero{
    nombre : string;
    hijos? : string[];
}

const pass1 : Pasajero = {
    nombre: "Faubricio"
}

const pass2 : Pasajero = {
    nombre: "Dave",
    hijos: ["Nat", "Dan"]
}

function countSons(passenger : Pasajero) : number{
    return passenger.hijos?.length || 0;
}

console.log("TIene ", countSons(pass1), " hijo(s)");