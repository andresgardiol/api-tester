import type {NextApiRequest, NextApiResponse} from 'next'
import {Contacto} from "../../models/contacto";

export default (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "POST":
            handlePost(req, res);
            break;
        default:
            handleNotFound(req, res);
            break;
    }
    return;
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const contacto: Contacto = req.body;
    contacto.id = Math.floor(Math.random() * (10 - 1)) + 1;
    contacto.direccion = {
        calle: "Calle falsa",
        numero: "123"
    };
    res.status(200).json(contacto);
}

function handleNotFound(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({
        message: "Method not found"
    });
}
