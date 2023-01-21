// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return []
    return matrix
        .map((it, i) => i % 2 === 0 ? it : it.reverse())
        .flat(1);
};
