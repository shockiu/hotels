import { Request, Response } from 'express';
import { RESERVATIONS, INVOICES } from '../../models/index';

export const modifyReservation= async(req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const affectedCount = await RESERVATIONS.update(body, {
           where: {
            id
           } 
        });
        res.send({rowsAffected: affectedCount, id}).status(200);
    } catch (error) {
        console.error(error);
        res.send({message: 'Error en el servidor'}).status(500);
    }
    
}