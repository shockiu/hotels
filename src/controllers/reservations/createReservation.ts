import { Request, Response } from 'express';
import { RESERVATIONS, INVOICES } from '../../models/index';


export const createReservation = async(req: Request, res: Response) => {
    const body = req.body;
    try {
        const [reservation, exists] = await RESERVATIONS.findOrCreate({
            where: {
                client_id: body.client_id,
                status: 1
            },
            defaults: {
                ...body
            },
            include: [INVOICES]
        });
        if ( !exists ) {
            return res.status(400).send({msg: 'This cliente has a reservation pending client_id-' + body.client_id});
        }
        res.status(200).send({reservation});   
    } catch (error) {
        console.log(error);
        res.send({message: 'Error en el servidor'}).status(500);
    }

}