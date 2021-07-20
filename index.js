/**
 * Returns every possible way to arrange a set of items
 * Based on this StackOverflow answer, ported to JS
 * https://stackoverflow.com/a/14133501 ported to JavaScript
 * @template T
 * @param {Set<T>} itemSet The set get all permutations from
 * @param {T[]} [permutation=[]] internal use
 * @param {number} [size=itemSet.size] internal use
 * @param {T[][]} [result=[]] internal use
 * @returns {T[][]}
 */
const allPermutations = function(itemSet, permutation = [], size = itemSet.size, result = []) {
	/* permutation stack has become equal to size that we require */
	if(permutation.length == size) {
		/* add the permutation to the results */
		result.push(permutation.slice());
	}

	/* items available for permutation (copied) */
	const availableItems = [...itemSet];
	for(const i of availableItems) {
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
module.exports = {allPermutations};
