export type Contacto = {
    id: number;
    nombre: string;
    celular: number;
    direccion: Direccion;
};

export type Direccion = {
    calle: string;
    numero: string;
};

export type Contactos = {
    contactos: Contacto[];
};
