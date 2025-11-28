// 1) Pair with the given Sum
// 2) Best Time to Buy and Sell Stock
// 3) Product of Array Except Self
// 4) Maximum Subarray
// 5) Container With Most Water
// 6) Factorial of a large number
// 7) Trapping Rain Water
// 8) Insert and Merge Intervals
// 9) Merge Intervals


// 1. Pair with the given Sum
function hasPairWithSum(arr, targetSum) {
    let numSet = new Set();
    for (let num of arr) {
        let complement = targetSum - num;
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

// 2. Best Time to Buy and Sell Stock
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

// 3. Product of Array Except Self
function productExceptSelf(nums) {
    let length = nums.length;
    let answer = new Array(length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

console.log(hasPairWithSum([10, 15, 3, 7], 17)); // Output: true
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]

// 4. Maximum Subarray
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

// 5. Container With Most Water
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// 6. Factorial of a large number
function factorial(n) {
    let result = [1];

    for (let i = 2; i <= n; i++) {
        let carry = 0;
        for (let j = 0; j < result.length; j++) {
            let prod = result[j] * i + carry;
            result[j] = prod % 10;
            carry = Math.floor(prod / 10);
        }
        while (carry) {
            result.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return result.reverse().join('');
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(factorial(25)); // Output: "15511210043330985984000000"

// 7. Trapping Rain Water
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }
    return waterTrapped;
}

// 8. Insert and Merge Intervals
function insertInterval(intervals, newInterval) {
    let result = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// 9. Merge Intervals
function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = merged[merged.length - 1];
        if (intervals[i][0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
}

// Example usage:
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // Output: true
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(factorial(25)); // Output: "15511210043330985984000000"
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(insertInterval([[1,3],[6,9]], [2,5])); // Output: [[1,5],[6,9]]
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]

// 1. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
            left = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// 2. Longest Repeating Character Replacement
function characterReplacement(s, k) {
    let countMap = new Map();
    let left = 0, maxCount = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        countMap.set(char, (countMap.get(char) || 0) + 1);
        maxCount = Math.max(maxCount, countMap.get(char));

        while (right - left + 1 - maxCount > k) {
            let leftChar = s[left];
            countMap.set(leftChar, countMap.get(leftChar) - 1);
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// 3. Smallest Window Containing All Characters
function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    let dictT = new Map();
    for (let char of t) {
        dictT.set(char, (dictT.get(char) || 0) + 1);
    }

    let required = dictT.size;
    let left = 0, right = 0, formed = 0;
    let windowCounts = new Map();
    let ans = [-1, 0, 0];

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (dictT.has(char) && windowCounts.get(char) === dictT.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (dictT.has(char) && windowCounts.get(char) < dictT.get(char)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}


function groupAnagrams(strs){
    let anagrams = new Map();
    for(let str of strs){
        let key = str.split("").sort().join("")
        if(!anagrams.has(key)){
            anagrams.set(key,[])
        }
        anagrams.get(key).push(str)
    }

    return Array.from(anagrams.values())
}


console.log();
