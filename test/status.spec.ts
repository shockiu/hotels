import request  from 'supertest';
import { Server } from '../src/server/server';

xdescribe('Status test hotels', () => {
    test('should return list of status paginated - 200 GET - /status', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "pending"
            },
            {
                id: 2,
                type: "paid out"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/status?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
    test('should return especific status - 200 GET - /status', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "pending"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/status?type=pending');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
});