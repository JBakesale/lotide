# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joshuadfbaker92/lotide`

**Require it:**

`const _ = require('@joshuadfbaker92/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the 0th index on an array
* `function2(tail)`: returns the last element of an array
* `function3(middle)`: returns the last (or last two elements, if array length is even) element, as an array
* `function1(eqArray)`: asserts whether or not the two inputted arrays are have the identical values
* `function2(assertArraysEqual)`: asserts whether or not the arrays are equal and inputs a string literal
* `function3(assertEquals)`: another assertion printout, but not just for arrays