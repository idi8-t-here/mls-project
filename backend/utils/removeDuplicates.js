function removeDuplicates(array, keyAttributes) {
    const uniqueMap = new Map();
    for (const item of array) {
        const key = keyAttributes.map(attr => item[attr]).join('|');
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, item);
        }
    }
    return Array.from(uniqueMap.values());
}

module.exports = removeDuplicates;
