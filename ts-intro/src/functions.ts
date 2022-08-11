import { Producto } from "./interfaces";

export function calcISV(productos: Producto[]) : [number, number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    });

    return [total, total * 0.15];
}