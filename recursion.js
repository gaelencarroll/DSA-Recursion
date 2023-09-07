/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if(idx === nums.length){
    return 1;
  }
  return nums[idx] * product(nums, idx+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longest=0) {
  if(idx === words.length){
    return longest;
  }
  longest = Math.max(words[idx].length, longest)
  return longest(words, idx+1, longest)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, str2='') {
  if(idx >= str.length){
    return str2
  }
  str2 += str[idx]
  return everyOther(str, idx+2, str2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let right = str.length - idx - 1;
  let left = idx;
  if(right <= left){
    return true
  }
  if(str[right] !== str[left]){
    return false
  }
  return isPalindrome(str, idx+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx === arr.length){
    return -1;
  }
  if(val === arr[idx]){
    return idx;
  }
  return findIndex(arr,val,idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, str2='') {
  if(str.length === str2.length){
    return str2
  }
  str2 += str[str.length-idx-1]
  return revString(str,idx+1,str2)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for(let key in obj){
    if(typeof obj[key] === 'string'){
      arr.push(obj[key])
    }
    if(typeof obj[key] === 'object'){
      arr.push(...gatherStrings(obj[key]))
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  let middle = Math.floor((right+left)/2)
  if(right < left){
    return -1;
  }
  if(val === arr[middle]){
    return middle;
  }
  if(val < arr[middle]){
    return binarySearch(arr, val, left, middle-1)
  }
  return binarySearch(arr, val, middle+1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
