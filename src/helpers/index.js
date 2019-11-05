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

// modifies entry domain/range pair for the comparison
const getSanitizedPair = (domain, range) => [domain.trim().toLowerCase(), range.trim().toLowerCase()];

// TODO try to combine all 4 helper functions in single iteration, if performance ever becomes an issue here
// Duplicates. Duplicate Domain - Range pairs: Two rows in the dictionary map to the same value
export const findDuplicates = entries => {
    const uniqueSet = new Set();
    const duplicateIds = [];

    entries.forEach((entry, i) => {
        const [domain, range] = getSanitizedPair(entry.domain, entry.range);
        uniqueSet.has(domain + range) ? duplicateIds.push(entry.id) : uniqueSet.add(domain + range);
    });
    return duplicateIds;
};

// Forks. Duplicate Domains with different Ranges: Two rows in the dictionary map to different values
export const findForks = entries => {
    const uniqueSet = new Set();
    const forkedIds = [];

    entries.forEach(entry => {
        const [domain] = getSanitizedPair(entry.domain, entry.range);
        uniqueSet.has(domain) ? forkedIds.push(entry.id) : uniqueSet.add(domain);
    });
    return forkedIds;
};

// Cycles. Two or more rows in a dictionary result in cycles, resulting in a never-ending transformation
export const findCycles = entries => {
    const uniqueSet = new Set();
    const cycledIds = [];

    entries.forEach(entry => {
        const [domain, range] = getSanitizedPair(entry.domain, entry.range);
        uniqueSet.has(domain + range) ? cycledIds.push(entry.id) : uniqueSet.add(range + domain);
    });
    return cycledIds;
};

// Chains. A chain structure in the dictionary (a value in Range column also appears in Domain column of another entry)
export const findChains = entries => {
    const uniqueSet = new Set();
    const chainIds = [];

    entries.forEach(entry => {
        const [domain, range] = getSanitizedPair(entry.domain, entry.range);
        uniqueSet.has(range) ? chainIds.push(entry.id) : uniqueSet.add(domain);
    });
    return chainIds;
};
