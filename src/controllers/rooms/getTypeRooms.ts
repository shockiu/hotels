import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import { TYPE_ROOM } from '../../models/index';
import { addPagination } from '../../helpers/addPagination';

export const getRooms = async (req: Request, res: Response) => {
    const { limit, page, ...restParmas } = req.query;   
    let optionsSearch: FindOptions = {
        where: {
            ...restParmas
        }
    };
    optionsSearch = addPagination(optionsSearch, limit, page)
    try{
        const rooms = await TYPE_ROOM.findAll(optionsSearch);
        res.send(rooms).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};