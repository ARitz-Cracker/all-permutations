/**
 * Returns every possible way to arrange a set of items
 * Based on this StackOverflow answer, ported to JS
 * https://stackoverflow.com/a/14133501 ported to JavaScript
 */
export function allPermutations<T>(
  itemSet: Set<T>,
  permutation: T[] = [],
  size: number = itemSet.size,
  result: T[][] = []
): T[][] {
  /* permutation stack has become equal to size that we require */
  if (permutation.length == size) {
    /* add the permutation to the results */
    result.push(permutation.slice());
  }

  /* items available for permutation (copied) */
  const availableItems: T[] = [...itemSet];
  for (const i of availableItems) {
    /* add current item */
    permutation.push(i);

    /* remove item from available item set */
    itemSet.delete(i);

    /* pass it on for next permutation */
    allPermutations(itemSet, permutation, size, result);

    /* pop and put the removed item back */
    itemSet.add(permutation.pop());
  }

  return result;
}
