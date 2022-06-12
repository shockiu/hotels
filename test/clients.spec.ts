import request  from 'supertest';
import { Server } from '../src/server/server';

xdescribe('Clients test hotels', () => {
    test('should return list of clients paginated - 200 GET - /clients', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                full_name: "Jenifer Hilpert",
                email: "anastacio.abshire@example.org",
            },
            {
                id: 2,
                full_name: "Kyler Jacobson",
                email: "osinski.paxton@example.org",
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/clients?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
    test('should return especific clients - 200 GET - /clients', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                full_name: "Jenifer Hilpert",
                email: "anastacio.abshire@example.org",
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/clients?full_name=Jenifer Hilpert');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
})