import { Request, Response } from 'express';
import { FindOptions, Op } from 'sequelize';
import { RESERVATIONS, INVOICES, TYPE_ROOM, STATUS_RESERVATION, CLIENTS, PAYMENT_METHODS } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getReservations = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        },
        attributes: {
            exclude: [
                'status',
                'room_id',
                'invoice_id',
                'client_id',
                'payment_id'
            ]
        }, 
        include: [
            INVOICES,
            TYPE_ROOM,
            PAYMENT_METHODS,
            STATUS_RESERVATION,
            CLIENTS
        ]
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const reservations = await RESERVATIONS.findAll(optionsSearch);
        res.send(reservations).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};

