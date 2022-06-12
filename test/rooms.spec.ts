import request  from 'supertest';
import { Server } from '../src/server/server';

xdescribe('Rooms test hotels', () => {
    test('should return list of rooms paginated - 200 GET - /rooms', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "suite"
            },
            {
                id: 2,
                type: "junior suite"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/rooms?limit=2&page=0');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
    test('should return especific room - 200 GET - /rooms', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = [
            {
                id: 1,
                type: "suite"
            }
        ];
        const res = await request(new Server().appServer)
            .get('/api/v1/rooms?type=suite');
        expect(res.status).toBe(expectedStatusCode);
        expect(res.body).toMatchObject(expectedReponse);
    });
});