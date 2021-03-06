/**
 * Дан массив точек с целочисленными координатами (x, y).
 * Определить, существует ли вертикальная прямая, 
 * делящая точки на 2 симметричных относительно этой прямой множества.
 * Note: Для удобства точку можно представлять не как массив [x, y], а как объект {x, y}
 */

isVertSym([[0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0], [4, 0]]) // true
isVertSym([[0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]) // false
isVertSym([]) // true
isVertSym([[0, 0]]) // true
isVertSym([[0, 0], [10, 0]]) // true
isVertSym([[0, 0], [11, 1]]) // false
isVertSym([[0, 0], [1, 0], [3, 0]]) // false

function isVertSym(list) {
    // code here
}