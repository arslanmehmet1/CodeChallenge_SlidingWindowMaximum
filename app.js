const test = (arr, k) => {
  let start = 0;
  let end = k;
  const iteration = arr.length - k + 1;
  const maxArr = [];
  for (let i = 0; i < iteration; i++) {
    let newArr = arr.slice(start, end);
    // console.log(newArr);

    maxArr.push(Math.max(...newArr));
    start += 1;
    end += 1;
  }
  console.log(maxArr);
};

test([10, 5, 2, 7, 8, 7], 3);
test([1, 3, -1, -3, 5, 3, 6, 7], 3);

// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
