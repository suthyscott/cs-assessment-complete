| Array Used | doublerAppend Time | doublerInsert Time |
| ---------- | ------------------ | ------------------ |
| tinyArray  | 99.8 μs            | 43 μs              |
| smallArray | 116.6 μs           | 48.701 μs          |
| mediumArray| 137.1 μs           | 169.5 μs           |
| largeArray | 529.3 μs           | 9.141199 ms        |
| extraLargeArray | 3.2198 ms     | 1.126101101 s      |



A microsecond (μs) is a millionth of a second. 

The append function that uses .push has a time complexity of O(n), but push has a time complexity of O(1). Meaning that the length of the overall function runtime is dependent on the array it's looping over. But push is always taking the same amount of time in that equation. 

The insert function also has a runtime complexity of O(n), but the .unshift method also has a runtime complexity of O(n). The overall function is O(n^2), because the .unshift method will traverse the array within each iteration of the for loop. The runtime will always scale much worse that then append function because unshift has to iterate through the entire array for each iteration of the for loop. 

So the append function will scale better because the .push method is O(1) vs .unshift which is O(n). That does not mean the append function will always be faster at first, but as we scale them up it will significantly outperform the other, as is demonstrated by the above table. 