import type {NextApiRequest, NextApiResponse} from 'next'
import {Contacto} from "../../../models/contacto";

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            handleGet(req, res);
            break;
        default:
            handleNotFound(req, res);
            break;
    }
    res.status(200).json({name: 'John Doe'})
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
    let id = +req.query.id;
    if (!id) handleNotFound(req, res);
    let contacto: Contacto = {
        id: id,
        nombre: 'John Doe',
        celular: 123456789,
        direccion: {
            calle: 'Calle falsa 123',
            numero: '123',
        }
    }
    res.status(200).json(contacto);
}

function handleNotFound(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({
        message: "Not found"
    });
}
