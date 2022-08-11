export interface Producto{
    detalle: string;
    precio: number;
}

export interface Carrito{
    productos: Producto[];
    total: number;
}