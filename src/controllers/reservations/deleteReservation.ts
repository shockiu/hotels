import { Request, Response } from 'express';
import { RESERVATIONS } from '../../models/index';

export const deleteReservation = async(req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const affectedCount = await RESERVATIONS.update({
            status: 3
        },{
           where: {
            id
           }
        });
        res.send({rowsAffected: affectedCount, id}).status(200);
    } catch (error) {
        console.log(error);
        res.send({message: 'Error en el servidor'}).status(500);
    }

}