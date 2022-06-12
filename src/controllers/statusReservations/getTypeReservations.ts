import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import { STATUS_RESERVATION } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getStatusReser = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        }
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const statusReserv = await STATUS_RESERVATION.findAll(optionsSearch);
        res.send(statusReserv).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};