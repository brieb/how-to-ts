/**
 * We use a string literal type for the action type.
 * If we didn't explicitly declare it this way,
 * it would have been of type `string`.
 * 
 * We'll see how this helps us later in our reducer.
 * 
 * It's repetitive, but at least we get a compiler error
 * if both sides don't match.
 * 
 * Docs on string literals:
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types
 */
export const MY_STANDARD_ACTION: 'airbnb/my-app/MY_STANDARD_ACTION' =
  'airbnb/my-app/MY_STANDARD_ACTION';

export const MY_PACK_ACTION: 'airbnb/my-app/MY_PACK_ACTION' =
  'airbnb/my-app/MY_PACK_ACTION';

export const MY_THUNK_ACTION: 'airbnb/my-app/MY_THUNK_ACTION' =
  'airbnb/my-app/MY_THUNK_ACTION';
