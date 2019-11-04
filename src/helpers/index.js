/**
 * transforms a Hashtable (object containing sub-objects) into an Array of Objects
 * @param {Object} hashtable an Object of Sub-Objects
 * @returns An Array of Objects
 */
export const objToArr = hashtable => Object.values(hashtable).map(item => item);

/**
 * get certain parts of a Hashtable by providing the keys you are interested in and transforming the partialHashtable into an Array
 * @param {Object} hashtable Object of Sub-Objects
 * @param {Array} keys an Array of keys (a key equals a sub-objects id property)
 * @returns An Array of Objects
 */
export const objToArrOrdered = (hashtable, keys) => {
    // (intentionally not using functional style here for performance reasons)
    const length = keys.length;
    const arr = [];
    for (let i = 0; i < length; i++) {
        const currentId = keys[i];

        // check if currentId exists and push the value
        const current = hashtable[currentId];
        if (current) {
            arr.push(current);
        }
    }
    return arr;
};

/**
 * get certain parts of a Hashtable by providing the keys you are interested in
 * @param {Object} hashtable Object of Sub-Objects
 * @param {Array} keys an Array of keys (a key equals a sub-objects id property)
 * @returns A Hashtable with all the Sub-Objects of interest
 */
export const objToObjOrdered = (hashtable, keys) => {
    // (intentionally not using functional style here for performance reasons)
    const partialHashtable = {};

    const length = keys.length;
    for (let i = 0; i < length; i++) {
        const currentId = keys[i];

        // check if currentId exists and push the value
        const current = hashtable[currentId];
        if (current) {
            partialHashtable[currentId] = current;
        }
    }
    return partialHashtable;
};
