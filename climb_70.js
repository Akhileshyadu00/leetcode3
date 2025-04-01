/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n<=2) return n;
    let climb = new Array(n+1);
    climb[1] = 1;
    climb[2] = 2;

    for(let i=3; i<=n; i++){
        climb[i] = climb[i-1] + climb[i-2];
    }
    return climb[n];
};

/* 

Time Complexity: O(n)

The function iterates from 3 to n, performing a constant-time operation (climb[i] = climb[i - 1] + climb[i - 2]) in each iteration.
Therefore, the total number of operations is proportional to n, making the time complexity O(n).
Space Complexity: O(n)

The function creates an array climb of size n+1, which consumes O(n) space.
This is because we store all intermediate results in the array, leading to linear space usage.

*/


var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let first = 1, second = 2;
    
    for (let i = 3; i <= n; i++) {
        let temp = first + second;  //first = n-2 // second = n-1 
        first = second;
        second = temp;
    }
    
    return second;
};
 
/* 


Time Complexity: O(n)
The function iterates from 3 to n, meaning it executes (n - 2) iterations.
Each iteration performs constant-time operations (addition and variable assignments).
Hence, the overall time complexity is O(n) (linear time).


Space Complexity: O(1)
The function only uses three integer variables (first, second, temp), which take constant space.
No extra data structures (like arrays) are used.
Therefore, the space complexity is O(1) (constant space).


*/