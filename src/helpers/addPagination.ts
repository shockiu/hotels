export const addPagination = <T>(optionsSearch: T, limit: any, page: any): T => {
    if ( limit !== undefined &&  page !== undefined) {
        optionsSearch = {
            ...optionsSearch,
            limit: parseInt(limit),
            offset: parseInt(page) * parseInt(limit)
        };
        return optionsSearch;
    }
    return optionsSearch
}