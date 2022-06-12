import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import { PAYMENT_METHODS } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getPayments = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        }
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const payments = await PAYMENT_METHODS.findAll(optionsSearch);
        res.send(payments).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};