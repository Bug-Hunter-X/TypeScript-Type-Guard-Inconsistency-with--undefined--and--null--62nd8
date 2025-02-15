# TypeScript Type Guard Inconsistency with 'undefined' and 'null'

This example demonstrates an inconsistency in TypeScript's type guard behavior when handling optional parameters that might be 'null' or 'undefined'.

The `printName` function uses a type guard to check if the `name` parameter is null. If it's null, a message is printed; otherwise, the name is printed in uppercase.

The issue is that while the type guard works correctly with 'null', it fails when 'undefined' is passed, resulting in a TypeScript compiler error.

## Bug
The bug lies in the inconsistent handling of nullish values by TypeScript's type system. A more robust solution is needed to handle both null and undefined gracefully.

## Solution
The solution involves using the optional chaining operator and nullish coalescing operator to handle both 'null' and 'undefined' gracefully.
