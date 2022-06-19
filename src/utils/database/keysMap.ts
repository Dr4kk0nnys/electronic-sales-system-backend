const getKeysMap = (parameters: Record<string, any>, separator = ' AND ') => {
    /*
        * Note: keysMap is going to map each key passed in parameters, asserting it an id.
        parameters: { id: 1, title: 'Title' }
        keysMap: id = $1 AND title = $2
    */
    return Object.keys(parameters).map((key, index) => `${key} = $${index + 1}`).join(separator);
}

const createKeysMap = (parameters: Record<string, any>) => {
    /*
        * Note: keysMap is going to map each key passed in parameters, asserting it an id.
        parameters: { id: 1, title: 'Title' }
        keysMap: id, title
    */
    return Object.keys(parameters).join(', ');
}

const anonymousKeysMap = (parameters: Record<string, any>) => {
    /*
        * Note: keysMap is going to map each key passed in parameters, asserting it an id.
        parameters: { id: 1, title: 'Title' }
        keysMap: $1, $2
    */
    return Object.keys(parameters).map((_, index) => `$${index + 1}`).join(', ');
}

export { getKeysMap, createKeysMap, anonymousKeysMap };