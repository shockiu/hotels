import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import { INVOICES } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getInvoices = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        }
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const invoices = await INVOICES.findAll(optionsSearch);
        res.send(invoices).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};