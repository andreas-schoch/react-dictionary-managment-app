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

/**
 * utility that trims whitespace and makes string all lowercase for easier comparison
 * @param {string} string string to be cleaned
 * @return {string} cleaned string
 */
const clean = string => string.trim().toLowerCase();

/**
 * utility to trims whitespace and sets domain and range to lowercase for easier comparison
 * @param {object} entry a dict entry object with domain and range properties
 * @returns {array} an Array with cleaned [domain, range]
 */
const getSanitizedPair = ({ domain, range }) => [clean(domain), clean(range)];

// Duplicates. Duplicate Domain - Range pairs: Two rows in the dictionary map to the same value
const findDuplicates = entries => {
    const duplicateIds = [];

    entries.forEach(entry1 => {
        const [domain1, range1] = getSanitizedPair(entry1);

        const foundDuplicate = entries.some(entry2 => {
            const [domain2, range2] = getSanitizedPair(entry2);
            return entry1.id !== entry2.id && domain1 === domain2 && range1 === range2;
        });

        if (foundDuplicate) {
            duplicateIds.push(entry1.id);
        }
    });
    return duplicateIds;
};

// Forks. Duplicate Domains with different Ranges: Two rows in the dictionary map to different values
const findForks = entries => {
    const forkedIds = [];

    entries.forEach(entry1 => {
        const [domain1, range1] = getSanitizedPair(entry1);

        const foundFork = entries.some(entry2 => {
            const [domain2, range2] = getSanitizedPair(entry2);
            return entry1.id !== entry2.id && domain1 === domain2 && range1 !== range2;
        });

        if (foundFork) {
            forkedIds.push(entry1.id);
        }
    });
    return forkedIds;
};

// Cycles. Two or more rows in a dictionary result in cycles, resulting in a never-ending transformation
// It seems to work most of the time, sometime it doesn't mark all the entries that are part of the cycle only last one
const findCycle = (entriesHashed, initialId, currentId, depth, maxDepth) => {
    const currentRange = currentId ? entriesHashed[currentId].range : null;

    if (currentRange === entriesHashed[initialId].domain) {
        // cycle was found
        return true;
    } else if (currentRange === undefined || depth >= maxDepth) {
        // no cycle was found
        return false;
    } else {
        // going deeper
        const ids = Object.keys(entriesHashed);
        const newCurrentId = ids.find(id => currentId !== id && entriesHashed[id].domain === currentRange);
        return findCycle(entriesHashed, initialId, newCurrentId, depth + 1, maxDepth);
    }
};

const findCycles = entries => {
    const cycleIds = [];
    const entryIds = entries.map(entry => entry.id);
    const entriesHashed = entries.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});

    entryIds.forEach(id => {
        if (findCycle(entriesHashed, id, id, 1, entries.length)) {
            cycleIds.push(id);
        }
    });

    return cycleIds;
};

// Chains. A chain structure in the dictionary (a value in Range column also appears in Domain column of another entry)
const findChains = entries => {
    const chainIds = [];

    // a bit of brute force
    for (let i = 0; i < entries.length; i++) {
        const [domain1, range1] = getSanitizedPair(entries[i]);
        for (let y = 0; y < entries.length; y++) {
            if (i === y) {
                continue;
            }
            const [domain2, range2] = getSanitizedPair(entries[y]);
            if ((domain1 === range2 && domain2 !== range1) || (range1 === domain2 && range2 !== domain1)) {
                chainIds.push(entries[i].id);
            }
        }
    }
    return chainIds;
};

/**
 * Helper function that checks all entries for consistency and returns a hashtable with the results
 * @param {array} entries an array of entries
 * @returns {object} an object with the entryId as key and a sub-object with properties duplicate, fork, chain and cycle set to true or false
 */
export const getEntryErrorTable = entries => {
    const entryErrorTable = {};

    // duplicates
    findDuplicates(entries).forEach(id => {
        if (!entryErrorTable[id]) {
            entryErrorTable[id] = {};
        }
        entryErrorTable[id].duplicate = true;
    });

    // forks
    findForks(entries).forEach(id => {
        if (!entryErrorTable[id]) {
            entryErrorTable[id] = {};
        }
        entryErrorTable[id].fork = true;
    });

    // cycles
    findCycles(entries).forEach(id => {
        if (!entryErrorTable[id]) {
            entryErrorTable[id] = {};
        }
        entryErrorTable[id].cycle = true;
    });

    // chains
    findChains(entries).forEach(id => {
        if (!entryErrorTable[id]) {
            entryErrorTable[id] = {};
        }
        entryErrorTable[id].chain = true;
    });

    return entryErrorTable;
};
