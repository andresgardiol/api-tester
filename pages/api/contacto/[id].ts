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

function handleUnauthorized(res: ServerResponse & { send: Send<any>; json: Send<any>; status: (statusCode: number) => NextApiResponse<any>; redirect: { (url: string): NextApiResponse<any>; (status: number, url: string): NextApiResponse<any> }; setPreviewData: (data: (object | string), options?: { maxAge?: number }) => NextApiResponse<any>; clearPreviewData: () => NextApiResponse<any>; unstable_revalidate: (urlPath: string) => Promise<void> }) {
    res.status(401).json({error: "Unauthorized"});
    return;
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers.authorization != "Bearer asd") {
        handleUnauthorized(res);
    }
    let id = +req.query.id;
    if (!id) handleNotFound(req, res);
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

function handleNotFound(req: NextApiRequest, res: NextApiResponse) {
    res.status(404).json({
        message: "Not found"
    });
}
