# Data Structures & Algorithms (DSA) Notes — Using JavaScript

> A beginner-to-intermediate guide that explains **each DSA concept** with a **real-life analogy**, **how/why it's used**, **JavaScript code**, **expected output**, and **classic programs (problems)** for practice.

---

## Table of Contents

### Part A — Foundations
1. [What is DSA & Why It Matters](#1-what-is-dsa--why-it-matters)
2. [Big-O / Time & Space Complexity](#2-big-o--time--space-complexity)

### Part B — Data Structures
3. [Arrays](#3-arrays)
4. [Strings](#4-strings)
5. [Hash Maps / Objects & Sets](#5-hash-maps--objects--sets)
6. [Stack](#6-stack)
7. [Queue](#7-queue)
8. [Linked List](#8-linked-list)
9. [Trees (Binary Tree & BST)](#9-trees-binary-tree--bst)
10. [Graphs](#10-graphs)
11. [Heap (Priority Queue idea)](#11-heap-priority-queue-idea)

### Part C — Algorithms
12. [Searching (Linear & Binary)](#12-searching-linear--binary)
13. [Sorting (Bubble, Selection, Merge, Quick)](#13-sorting)
14. [Recursion](#14-recursion)
15. [Two Pointers](#15-two-pointers)
16. [Sliding Window](#16-sliding-window)
17. [Tree/Graph Traversal (BFS & DFS)](#17-treegraph-traversal-bfs--dfs)

### Part D — Practice
18. [Classic Practice Programs](#18-classic-practice-programs)
19. [Cheat Sheet & Patterns](#19-cheat-sheet--patterns)

---

# Part A — Foundations

## 1. What is DSA & Why It Matters

### Concept
- **Data Structure** = a way to **store and organize** data (like containers).
- **Algorithm** = a **step-by-step recipe** to solve a problem using that data.

### Real-life Example
Think of a **kitchen**:
- **Data structures** are your containers — jars, fridge shelves, spice racks. Each is good for different things.
- **Algorithms** are your **recipes** — the steps to turn ingredients into a dish.

Choosing the right container (data structure) makes the recipe (algorithm) faster and easier.

### Why It Matters
- Write **efficient** code that scales to large inputs.
- Crack **coding interviews**.
- Make smart trade-offs between **speed (time)** and **memory (space)**.

---

## 2. Big-O / Time & Space Complexity

### Concept
Big-O describes **how the work grows** as input size `n` grows. It ignores constants and focuses on the dominant term.

### Real-life Example
Finding a name in a phone book:
- Flipping page by page from the start → **O(n)** (linear).
- Opening to the middle and halving each time → **O(log n)** (binary search).

### Common Complexities (fast → slow)
| Big-O | Name | Example |
|---|---|---|
| O(1) | Constant | Access array by index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Loop through array once |
| O(n log n) | Linearithmic | Merge sort, Quick sort (avg) |
| O(n²) | Quadratic | Nested loops (bubble sort) |
| O(2ⁿ) | Exponential | Naive recursion (Fibonacci) |

### Code — feel the difference
```javascript
// O(1) — constant: one operation regardless of size
const first = arr => arr[0];

// O(n) — linear: touches each element once
const sumAll = arr => {
  let sum = 0;
  for (const x of arr) sum += x;
  return sum;
};

// O(n^2) — quadratic: nested loops
const allPairs = arr => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
};

console.log(first([10, 20, 30]));
console.log(sumAll([1, 2, 3, 4]));
console.log(allPairs([1, 2, 3]));
```

### Output
```text
10
10
[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
```

> **Rule of thumb:** Aim for the lowest Big-O you reasonably can. Going from O(n²) to O(n) or O(n log n) is the most common interview win.

---

# Part B — Data Structures

## 3. Arrays

### Concept
An **ordered, indexed list** of items stored together. Access by index is **O(1)**.

### Real-life Example
A row of **lockers** numbered 0, 1, 2… You can instantly open locker #3 because you know its number.

### Key Operations & Complexity
| Operation | Method | Time |
|---|---|---|
| Access by index | `arr[i]` | O(1) |
| Push/pop (end) | `push` / `pop` | O(1) |
| Shift/unshift (start) | `shift` / `unshift` | O(n) |
| Search (unsorted) | `includes` / loop | O(n) |

### Code
```javascript
const nums = [10, 20, 30, 40];

console.log(nums[2]);          // O(1) access
nums.push(50);                  // add end
nums.unshift(5);                // add start (shifts everyone)
console.log(nums);
console.log(nums.indexOf(30)); // search
```

### Output
```text
30
[ 5, 10, 20, 30, 40, 50 ]
3
```

### Practice Program — Find max & min
```javascript
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
    if (n < min) min = n;
  }
  return { max, min };
}
console.log(findMaxMin([3, 9, 1, 7, 2]));
```

### Output
```text
{ max: 9, min: 1 }
```

---

## 4. Strings

### Concept
A string is a **sequence of characters** — like an immutable array of letters. In JS, strings can't be changed in place; methods return new strings.

### Real-life Example
A **word printed on paper**: to "change" it you re-print a new word; you can't erase one letter cleanly.

### Code
```javascript
const text = "Hello World";

console.log(text.length);        // 11
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.split(" "));    // ['Hello', 'World']
console.log(text[0]);            // 'H'
console.log(text.includes("World")); // true
```

### Output
```text
11
HELLO WORLD
[ 'Hello', 'World' ]
H
true
```

### Practice Program 1 — Reverse a string
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("javascript"));
```

### Output
```text
tpircsavaj
```

### Practice Program 2 — Check palindrome
```javascript
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("Madam"));      // true
console.log(isPalindrome("Hello"));      // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

### Output
```text
true
false
true
```

---

## 5. Hash Maps / Objects & Sets

### Concept
- **Object / Map** = stores **key → value** pairs with **O(1)** average lookup.
- **Set** = stores **unique values** only (no duplicates).

These are your secret weapon to turn O(n²) problems into O(n).

### Real-life Example
- **Map**: a **dictionary** — look up a word (key) to get its meaning (value) instantly.
- **Set**: a **guest list** where each name appears only once.

### Code
```javascript
// Map (using object)
const phoneBook = { Asha: "98765", Ravi: "91234" };
console.log(phoneBook["Asha"]); // O(1)

// Map (using Map object — better for non-string keys)
const scores = new Map();
scores.set("math", 90);
scores.set("science", 85);
console.log(scores.get("math"));

// Set — removes duplicates
const nums = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(nums)];
console.log(unique);
```

### Output
```text
98765
90
[ 1, 2, 3 ]
```

### Practice Program — Count character frequency
```javascript
function charFrequency(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("banana"));
```

### Output
```text
{ b: 1, a: 3, n: 2 }
```

### Practice Program — Two Sum (classic interview, O(n) with a map)
```javascript
function twoSum(nums, target) {
  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // indices of 2 and 7
```

### Output
```text
[ 0, 1 ]
```

---

## 6. Stack

### Concept
**LIFO** — Last In, First Out. You add and remove from the **same end (top)**.

### Real-life Example
A **stack of plates**: you put a plate on top and take the top plate off first. The last plate added is the first removed.

### Operations: `push` (add to top), `pop` (remove top), `peek` (look at top).

### Code
```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.peek()); // 30
console.log(s.pop());  // 30
console.log(s.size()); // 2
```

### Output
```text
30
30
2
```

### Practice Program — Valid parentheses (uses a stack)
```javascript
function isValidBrackets(str) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (pairs[ch]) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidBrackets("({[]})")); // true
console.log(isValidBrackets("({[}])")); // false
```

### Output
```text
true
false
```

> **Where stacks are used:** Undo/Redo, browser back button, function call stack, expression evaluation.

---

## 7. Queue

### Concept
**FIFO** — First In, First Out. Add at the **back**, remove from the **front**.

### Real-life Example
A **line at a ticket counter**: the first person to join is the first served.

### Code
```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }      // add to back
  dequeue() { return this.items.shift(); }        // remove from front
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
console.log(q.front());   // A
console.log(q.dequeue()); // A
console.log(q.size());    // 2
```

### Output
```text
A
A
2
```

> **Where queues are used:** Print spooling, task scheduling, BFS traversal, handling requests in order.

---

## 8. Linked List

### Concept
A chain of **nodes**, where each node holds **data** + a **pointer to the next node**. Unlike arrays, items aren't stored contiguously, so insert/delete at the front is **O(1)**.

### Real-life Example
A **treasure hunt**: each clue (node) contains a prize (data) and tells you where the next clue is (pointer).

### Code
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // add to end
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
  }
  // print all values
  print() {
    const out = [];
    let current = this.head;
    while (current) {
      out.push(current.value);
      current = current.next;
    }
    console.log(out.join(" -> "));
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print();
```

### Output
```text
10 -> 20 -> 30
```

### Practice Program — Reverse a linked list
```javascript
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const nextNode = current.next; // save next
    current.next = prev;            // reverse pointer
    prev = current;                 // move prev forward
    current = nextNode;             // move current forward
  }
  return prev; // new head
}
```

> **Where linked lists are used:** Implementing stacks/queues, music playlists (next/prev), undo history.

---

## 9. Trees (Binary Tree & BST)

### Concept
A **tree** is a hierarchical structure with a **root**, and each node has **children**.
A **Binary Search Tree (BST)** is a binary tree where: **left child < parent < right child**. This makes search **O(log n)** on average.

### Real-life Example
A **family tree** or a **company org chart**: one head at top, branching into sub-levels.

### Code — Build a BST and insert
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) { current.left = node; return; }
        current = current.left;
      } else {
        if (!current.right) { current.right = node; return; }
        current = current.right;
      }
    }
  }
  // In-order traversal => sorted output for a BST
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
}

const tree = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(v => tree.insert(v));
console.log(tree.inOrder()); // sorted!
```

### Output
```text
[ 20, 30, 40, 50, 60, 70, 80 ]
```

> **Where trees are used:** File systems, DOM (HTML), databases (indexes), decision trees.

---

## 10. Graphs

### Concept
A set of **nodes (vertices)** connected by **edges**. Can be directed/undirected, weighted/unweighted. Often stored as an **adjacency list**.

### Real-life Example
A **social network** (people = nodes, friendships = edges) or a **map of cities** connected by roads.

### Code — Adjacency list graph
```javascript
class Graph {
  constructor() {
    this.adj = {}; // node -> array of neighbors
  }
  addVertex(v) {
    if (!this.adj[v]) this.adj[v] = [];
  }
  addEdge(a, b) {
    this.adj[a].push(b);
    this.adj[b].push(a); // undirected
  }
  print() {
    for (const node in this.adj) {
      console.log(`${node} -> ${this.adj[node].join(", ")}`);
    }
  }
}

const g = new Graph();
["A", "B", "C", "D"].forEach(v => g.addVertex(v));
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.print();
```

### Output
```text
A -> B, C
B -> A, D
C -> A
D -> B
```

> **Where graphs are used:** Google Maps (shortest path), social networks, recommendation systems, network routing.

---

## 11. Heap (Priority Queue idea)

### Concept
A **heap** is a special tree where the parent is always **larger (max-heap)** or **smaller (min-heap)** than its children. Used to always get the **highest/lowest priority** item quickly — `O(log n)` insert, `O(1)` peek.

### Real-life Example
A **hospital emergency room**: patients are treated by **severity**, not arrival order. The most critical patient is always served next.

### Code — Simple Min-Heap concept (using sorted insert for clarity)
```javascript
// Simplified priority queue (for learning the idea)
class PriorityQueue {
  constructor() {
    this.items = []; // { value, priority }
  }
  enqueue(value, priority) {
    this.items.push({ value, priority });
    this.items.sort((a, b) => a.priority - b.priority); // lowest first
  }
  dequeue() {
    return this.items.shift(); // highest priority (lowest number)
  }
}

const er = new PriorityQueue();
er.enqueue("Cold", 5);
er.enqueue("Heart Attack", 1);
er.enqueue("Broken Arm", 3);
console.log(er.dequeue()); // most urgent first
```

### Output
```text
{ value: 'Heart Attack', priority: 1 }
```

> A real heap uses an array-based binary tree for `O(log n)` operations; the version above keeps it readable for learning.

---

# Part C — Algorithms

## 12. Searching (Linear & Binary)

### Concept
- **Linear search**: check each item one by one — **O(n)**. Works on any array.
- **Binary search**: repeatedly halve a **sorted** array — **O(log n)**.

### Real-life Example
- Linear: flipping a deck of cards one at a time to find the Ace.
- Binary: finding a word in a **sorted dictionary** by opening the middle and halving.

### Code
```javascript
// Linear search — O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary search — O(log n), array MUST be sorted
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(linearSearch([5, 3, 8, 1], 8));      // index 2
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // index 3
```

### Output
```text
2
3
```

---

## 13. Sorting

### Concept
Arranging items in order. Trade-offs between **simplicity** and **speed**.

| Algorithm | Avg Time | Idea |
|---|---|---|
| Bubble Sort | O(n²) | Swap adjacent out-of-order pairs |
| Selection Sort | O(n²) | Pick smallest, place it in front |
| Merge Sort | O(n log n) | Divide, sort halves, merge |
| Quick Sort | O(n log n) | Pick pivot, partition around it |

### Real-life Example
Sorting a **deck of cards** in your hand — you naturally do something like insertion/selection sort.

### Code — Bubble Sort (easy to understand)
```javascript
function bubbleSort(arr) {
  const a = [...arr]; // don't mutate original
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // swap
      }
    }
  }
  return a;
}
console.log(bubbleSort([5, 2, 8, 1, 9, 3]));
```

### Output
```text
[ 1, 2, 3, 5, 8, 9 ]
```

### Code — Merge Sort (efficient, O(n log n))
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
```

### Output
```text
[ 3, 9, 10, 27, 38, 43, 82 ]
```

### Code — Quick Sort
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => x < pivot && i < arr.length - 1);
  const right = arr.filter((x, i) => x >= pivot && i < arr.length - 1);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 7, 8, 9, 1, 5]));
```

### Output
```text
[ 1, 5, 7, 8, 9, 10 ]
```

> **In practice:** JavaScript's built-in `arr.sort((a, b) => a - b)` is highly optimized — use it for real work. Learn the others to understand *how* sorting works.

---

## 14. Recursion

### Concept
A function that **calls itself** to solve a smaller version of the same problem, until it reaches a **base case** (the stopping condition).

### Real-life Example
Standing in a line and asking "what's my position?" — you ask the person ahead, who asks the person ahead… until the front person says "I'm #1" (base case), and answers ripple back.

### Two rules of recursion
1. **Base case** — when to stop (prevents infinite loop).
2. **Recursive case** — call itself with a smaller input.

### Code — Factorial
```javascript
function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive case
}
console.log(factorial(5)); // 5*4*3*2*1
```

### Output
```text
120
```

### Code — Fibonacci
```javascript
function fib(n) {
  if (n < 2) return n;           // base case
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7)); // 0,1,1,2,3,5,8,13 -> index 7 = 13
```

### Output
```text
13
```

### Code — Sum of array (recursive)
```javascript
function sumArray(arr) {
  if (arr.length === 0) return 0;        // base case
  return arr[0] + sumArray(arr.slice(1)); // recursive
}
console.log(sumArray([1, 2, 3, 4, 5]));
```

### Output
```text
15
```

> **Where recursion shines:** Tree/graph traversal, divide-and-conquer (merge/quick sort), backtracking problems.

---

## 15. Two Pointers

### Concept
Use **two indices** moving through an array (often from both ends or at different speeds) to solve problems in **O(n)** instead of O(n²).

### Real-life Example
Two people checking a guest list from **both ends** of the table, moving toward the middle until they meet — twice as fast.

### Code — Check if a sorted array has a pair summing to target
```javascript
function hasPairSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) return [sortedArr[left], sortedArr[right]];
    if (sum < target) left++;   // need bigger sum
    else right--;               // need smaller sum
  }
  return null;
}
console.log(hasPairSum([1, 2, 4, 6, 8, 11], 10)); // 2 + 8
```

### Output
```text
[ 2, 8 ]
```

---

## 16. Sliding Window

### Concept
Maintain a **"window" (subrange)** that slides across the array to avoid recomputing from scratch — turns many O(n²) problems into O(n).

### Real-life Example
Looking through a **moving train window**: as the train moves, one scene leaves the frame and a new one enters — you don't re-look at the whole landscape each time.

### Code — Max sum of any k consecutive elements
```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // first window
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;

  // slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // add new, remove old
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 5+1+3 = 9
```

### Output
```text
9
```

---

## 17. Tree/Graph Traversal (BFS & DFS)

### Concept
- **BFS (Breadth-First Search)**: explore **level by level** — uses a **queue**.
- **DFS (Depth-First Search)**: go **as deep as possible** first — uses a **stack / recursion**.

### Real-life Example
- BFS: exploring a building **floor by floor**.
- DFS: following **one hallway to its very end** before backtracking.

### Code — BFS & DFS on a graph
```javascript
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// BFS — uses a queue
function bfs(start) {
  const visited = new Set();
  const queue = [start];
  const order = [];
  visited.add(start);
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}

// DFS — uses recursion
function dfs(start, visited = new Set(), order = []) {
  visited.add(start);
  order.push(start);
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) dfs(neighbor, visited, order);
  }
  return order;
}

console.log("BFS:", bfs("A"));
console.log("DFS:", dfs("A"));
```

### Output
```text
BFS: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
DFS: [ 'A', 'B', 'D', 'E', 'F', 'C' ]
```

---

# Part D — Practice

## 18. Classic Practice Programs

### 1) FizzBuzz (logic + conditionals)
```javascript
function fizzBuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push("FizzBuzz");
    else if (i % 3 === 0) out.push("Fizz");
    else if (i % 5 === 0) out.push("Buzz");
    else out.push(String(i));
  }
  return out;
}
console.log(fizzBuzz(15).join(" "));
```
**Output**
```text
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
```

### 2) Find duplicates in an array (Set)
```javascript
function findDuplicates(arr) {
  const seen = new Set();
  const dupes = new Set();
  for (const x of arr) {
    if (seen.has(x)) dupes.add(x);
    seen.add(x);
  }
  return [...dupes];
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
```
**Output**
```text
[ 2, 1 ]
```

### 3) Check anagram (frequency / sorting)
```javascript
function isAnagram(a, b) {
  const normalize = s => s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return normalize(a) === normalize(b);
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
```
**Output**
```text
true
false
```

### 4) Find the missing number (0..n)
```javascript
function missingNumber(nums) {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2; // sum 0..n
  const actual = nums.reduce((s, x) => s + x, 0);
  return expected - actual;
}
console.log(missingNumber([3, 0, 1])); // 2
```
**Output**
```text
2
```

### 5) Most frequent element (hash map)
```javascript
function mostFrequent(arr) {
  const freq = {};
  let maxItem = arr[0];
  let maxCount = 0;
  for (const x of arr) {
    freq[x] = (freq[x] || 0) + 1;
    if (freq[x] > maxCount) {
      maxCount = freq[x];
      maxItem = x;
    }
  }
  return { item: maxItem, count: maxCount };
}
console.log(mostFrequent([1, 3, 1, 3, 3, 2]));
```
**Output**
```text
{ item: 3, count: 3 }
```

### 6) Flatten a nested array (recursion)
```javascript
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) result = result.concat(flatten(item));
    else result.push(item);
  }
  return result;
}
console.log(flatten([1, [2, [3, [4, 5]]], 6]));
```
**Output**
```text
[ 1, 2, 3, 4, 5, 6 ]
```

---

## 19. Cheat Sheet & Patterns

### Data Structure quick-pick
| Need | Use |
|---|---|
| Fast index access, ordered list | **Array** |
| Fast key lookup / counting | **Object / Map** |
| Unique items | **Set** |
| LIFO (undo, matching brackets) | **Stack** |
| FIFO (scheduling, BFS) | **Queue** |
| Frequent insert/delete at ends | **Linked List** |
| Hierarchy / sorted lookups | **Tree / BST** |
| Connections / networks | **Graph** |
| Always get min/max priority | **Heap** |

### Algorithm pattern signals
| If the problem says… | Think about… |
|---|---|
| "sorted array" + find pair/target | **Binary Search / Two Pointers** |
| "contiguous subarray/substring of size k" | **Sliding Window** |
| "count / frequency / duplicates / seen before" | **Hash Map / Set** |
| "all paths / explore tree or graph" | **BFS / DFS / Recursion** |
| "smaller subproblem repeats" | **Recursion / Divide & Conquer** |
| "always pick highest/lowest priority" | **Heap / Priority Queue** |

### Big-O goals
- Try to beat **O(n²)** → aim for **O(n log n)** or **O(n)**.
- A **hash map** is often the trick to drop one nested loop.
- **Sorting first** can unlock two-pointer / binary-search solutions.

---

### How to Run These Examples
1. Install [Node.js](https://nodejs.org/).
2. Copy any snippet into a file, e.g. `dsa.js`.
3. Run in terminal: `node dsa.js`.

> **Study tip:** Don't just read — type each program, run it, then change the input and predict the output. That's how DSA actually sticks. Happy practicing!
