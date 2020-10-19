
// https://stackoverflow.com/a/14133501 ported to JavaScript
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
