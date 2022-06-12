import { addPagination } from '../src/helpers/addPagination';

xdescribe('Helpers', () => {
    test('should return the options search with limit and offset', () => {
        const expected = {
            where: {},
            limit: 2,
            offset: 0
        };
        const options = { where: {} };
        const actual = addPagination(options, 2, 0);
        expect(actual).toMatchObject(expected);
    });
    test('should return the options search with not limit and offset', () => {
        const expected = {
            where: {},
            limit: 2,
            offset: 0
        };
        const options = { where: {} };
        const actual = addPagination(options, undefined, undefined);
        expect(actual).not.toMatchObject(expected);
    });
});