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
    return;
}


function handleGet(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers.authorization != "Bearer asd") {
        console.log("No autorizado");
        return handleUnauthorized(res);
    }
    let id = +req.query.id;
    console.log(id);
    if (!id) {
        console.log("Not found");
        return handleNotFound(req, res);
    }
    let contacto: Contacto = {
        id: id,
        nombre: 'John Doe',
        celular: 123456789,
        direccion: {
            calle: 'Calle falsa',
            numero: '123',
        }
    }
    res.status(200).json(contacto);
}

function handleUnauthorized(res) {
    res.status(401).json({message: "Unauthorized"});
}

function handleNotFound(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({
        message: "Not found"
    });
}
