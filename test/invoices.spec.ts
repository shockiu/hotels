import request  from 'supertest';
import { Server } from '../src/server/server';

xdescribe('Invoices test hotels', () => {
    test('should return list of invoices paginated - 200 GET - /invoices', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                client_id: 3,
                detail: 'I want to sleep',
            },
            {
                id: 2,
                client_id: 5,
                detail: 'big room for me please',
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/invoices?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
    test('should return especific invoice - 200 GET - /invoices', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                client_id: 3,
                detail: 'I want to sleep',
            },
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/invoices?detail=I want to sleep');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
});