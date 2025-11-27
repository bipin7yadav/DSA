// 1) Longest Substring Without Repeating
// 2) Longest Repeating Character Replacement
// 3) Smallest window containing all characters
// 4) Print all anagrams together
// 5) Sentence Palindrome
// 6) Longest Palindromic Substring
// 7) Palindromic Substrings

// 1. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            left = Math.max(charIndexMap.get(s[right]) + 1, left);
        }
        charIndexMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// 2. Longest Repeating Character Replacement
function characterReplacement(s, k) {
    let countMap = new Map();
    let left = 0, maxCount = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        countMap.set(s[right], (countMap.get(s[right]) || 0) + 1);
        maxCount = Math.max(maxCount, countMap.get(s[right]));

        while (right - left + 1 - maxCount > k) {
            countMap.set(s[left], countMap.get(s[left]) - 1);
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

// 4. Print All Anagrams Together
function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

// 5. Sentence Palindrome
function isSentencePalindrome(sentence) {
    // Clean the sentence: remove non-alphanumeric and convert to lowercase
    // Example: "A man, a plan, a canal: Panama" -> "amanaplanacanalpanama"
    let cleaned = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Two-pointer technique
    let left = 0, right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}