import type {NextApiRequest, NextApiResponse} from 'next'
import {Contacto} from "../../models/contacto";

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            handleGet(req, res);
            break;
        default:
            handleNotFound(req, res);
            break;
    }
    return;
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const contactos: Contacto[] = [
        {
            id: 1,
            nombre: 'Aquiles Baeza',
            celular: 1115464558,
            direccion: {
                calle: 'Reconquisa Norte',
                numero: '1041',
            }
        },
        {
            id: 2,
            nombre: 'Elmo Linete',
            celular: 2615558697,
            direccion: {
                calle: 'Maradona Sur',
                numero: '54',
            }
        },
        {
            id: 3,
            nombre: 'Abraham Meloyo',
            celular: 264206489,
            direccion: {
                calle: 'Laprida Oeste',
                numero: '135',
            }
        }
    ];
    res.status(200).json({contactos});
}

function handleNotFound(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({
        message: "Method Not found"
    });
}
