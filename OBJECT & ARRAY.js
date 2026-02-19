/* =========================
   BEGINNER
========================= */

// 1. Get User Initials
function getUserInitials(user) {
  return user.firstName[0] + user.lastName[0];
}

// 2. Count Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}

// 3. Invert Object
function invertObject(obj) {
  const res = {};
  for (let key in obj) {
    res[obj[key]] = key;
  }
  return res;
}

// 4. Remove Falsy Values
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}


/* =========================
   EASY
========================= */

// 5. Group By Age
function groupByAge(people) {
  return people.reduce((acc, person) => {
    (acc[person.age] ||= []).push(person);
    return acc;
  }, {});
}

// 6. Most Frequent Element
function findMostFrequentElement(arr) {
  const freq = {};
  let max = 0, res;

  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] > max) {
      max = freq[n];
      res = n;
    }
  }
  return res;
}

// 7. Flatten Array
function flatten(arr) {
  return arr.flat(Infinity);
}


/* =========================
   MEDIUM
========================= */

// 8. Deep Merge Objects
function mergeObjects(...objs) {
  const result = {};

  for (let obj of objs) {
    for (let key in obj) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        result[key] = mergeObjects(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

// 9. Rotate Array
function rotateArray(arr, k) {
  k %= arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// 10. Intersection
function intersection(nums1, nums2) {
  const set = new Set(nums2);
  return [...new Set(nums1.filter(n => set.has(n)))];
}

// 11. Group Anagrams
function groupAnagrams(words) {
  const map = {};

  for (let w of words) {
    const key = w.split("").sort().join("");
    (map[key] ||= []).push(w);
  }
  return Object.values(map);
}


/* =========================
   MEDIUM HARD
========================= */

// 12. Move Zeros To End
function moveZerosToEnd(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[pos], arr[i]] = [arr[i], arr[pos]];
      pos++;
    }
  }
  return arr;
}


/* =========================
   HARD
========================= */

// 13. Longest Consecutive Sequence
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let length = 1;
      while (set.has(n + length)) length++;
      max = Math.max(max, length);
    }
  }
  return max;
}

// 14. Product Except Self
function productExceptSelf(nums) {
  const res = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}

// 15. Deep Equal
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || !a || !b)
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual(a[key], b[key]));
}


// 16. Custom Serializer & Deserializer

function serializeObject(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (value === undefined) return { type: "undefined" };
    if (value instanceof Date) return { type: "Date", value: value.toISOString() };
    if (value instanceof Map) return { type: "Map", value: [...value] };
    if (value instanceof Set) return { type: "Set", value: [...value] };
    return value;
  });
}

function deserializeObject(str) {
  return JSON.parse(str, (key, value) => {
    if (value?.type === "undefined") return undefined;
    if (value?.type === "Date") return new Date(value.value);
    if (value?.type === "Map") return new Map(value.value);
    if (value?.type === "Set") return new Set(value.value);
    return value;
  });
}


/* =========================
   SAMPLE TESTS
========================= */

console.log(getUserInitials({firstName:"Rahul",lastName:"Sharma"}));
console.log(countProperties({a:1,b:2}));
console.log(invertObject({a:1,b:2}));
console.log(removeFalsyValues([0,1,false,2,"",3]));
console.log(flatten([1,[2,3],[4,[5]]]));
console.log(rotateArray([1,2,3,4,5],2));
console.log(longestConsecutiveSequence([100,4,200,1,3,2]));
console.log(productExceptSelf([1,2,3,4]));
