import request  from 'supertest';
import { Server } from '../src/server/server';


xdescribe('Reservations test hotels', () => {

    test('should return list of reservations paginated - 200 GET - /reservations', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                "id": 1,
                "amount": "78.99",
                "day_stay": 5
            },
            {
                "id": 2,
                "amount": "100.99",
                "day_stay": 10
            }
        ];

        const res = await request(new Server().appServer)
            .get('/api/v1/reservations?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });

    test('should update one reservation - 200 PUT - /reservations/:id', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = {
            "rowsAffected": [1],
            "id": "1"
        };
        const res = await request(new Server().appServer)
            .put('/api/v1/reservations/1')
            .send({
                payment_id: 2
            });
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });

    test('should delete one reservation - 200 DELETE - /reservations/:id', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = {
            "rowsAffected": [0],
            "id": "1"
        };
        const res = await request(new Server().appServer)
            .delete('/api/v1/reservations/1');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });

    test('should return message with existing player - 400 POST - /reservations', async () => {
        const expectedStatusCode = 400;
        const reservation = {
            status: 3,
            room_id: 2,
            client_id: 7,
            payment_id: 3,
            amount: 66.99,
            day_stay: 3,
            invoice : {
                client_id: 7,
                detail: "new room, great"
            }
        };
        const expectedReponse = {msg: `This cliente has a reservation pending client_id-${reservation.client_id}`};
        const res = await request(new Server().appServer)
            .post('/api/v1/reservations')
            .send(reservation);
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });

    test('should create one reservation - 200 POST - /reservations', async () => {
        const expectedStatusCode = 200;
        const reservation ={
            status: 3,
            room_id: 1,
            client_id: 8,
            payment_id: 1,
            amount: 6.99,
            day_stay: 1,
            invoice : {
                client_id: 8,
                detail: "new room, great"
            }
        };
        const res = await request(new Server().appServer)
            .post('/api/v1/reservations')
            .send(reservation);
        expect(res.status).toBe(expectedStatusCode);
    });

});