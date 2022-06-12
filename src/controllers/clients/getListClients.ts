import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import { CLIENTS } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getClients = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        }
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const clients = await CLIENTS.findAll(optionsSearch);
        res.send(clients).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};