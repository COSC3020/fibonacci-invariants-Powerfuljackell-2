# Fibonacci Invariants

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Used Prior work at: https://github.com/COSC3020/fibonacci-invariants-Powerfuljackell-1

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Previous Answer:
- At the beginning of every Nth recursion there is an array of N+1 integers called fibArray where N $\ge$ 0: fibArray[0] = 0
- At the beginning of every Nth recursion there is an array of N+1 integers called fibArray where N $\ge$ 1: fibArray[1] = 1
- At the beginning of every Nth recursion there is an array of N+1 integers called fibArray where N > 2: fibArray[n-1] is equal to fibArray[n-2] + fibArray[n-3]
Current Answer:
- For a given Ith recursion, fibArray[I-1] and fibArray[I-2] are equal to the corresponding values of the fibonacci sequence.
