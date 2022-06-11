import { Request, Response } from 'express';
import { RESERVATIONS, INVOICES } from '../../models/index';

export const modifyReservation= async(req: Request, res: Response) => {
    const body = req.body;
    try {
        const affectedCount = RESERVATIONS.update(body, {
           where: {
            id : body.id
           } 
        })
        res.send({affectedCount, id: body.id}).status(200);
    } catch (error) {
        console.error(error);
        res.send({message: 'Error en el servidor'}).status(500);
    }
    
}