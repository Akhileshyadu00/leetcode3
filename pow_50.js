/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;

    let power = Math.abs(n);
    let result = 1;

    while(power>0) {
        if(power % 2 === 1) {
            result *= x;
        }
        x *= x;
        power = Math.floor(power/2);
    }
    return n < 0 ? 1 / result :result;
};


/*
Time Complexity: O(log n)

The algorithm uses Exponentiation by Squaring, which reduces the number of multiplications significantly.
Instead of multiplying x n times (O(n) complexity), we repeatedly divide n by 2, making the number of steps approximately log₂(n).
Thus, the time complexity is O(log n).

Space Complexity

Iterative Solution: O(1)
The iterative approach uses only a few extra variables (result, power, etc.). 
So the space usage is constant.

*/