import request  from 'supertest';
import { Server } from '../src/server/server';

xdescribe('Payments test hotels', () => {
    test('should return list of type of payments paginated - 200 GET - /payments', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "credit card"
            },
            {
                id: 2,
                type: "debit card"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/payments?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
    test('should return especific type of payment - 200 GET - /payments', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "credit card"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/payments?type=credit card');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
});