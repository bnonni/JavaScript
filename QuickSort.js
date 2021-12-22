function quickSort(arr, left, right) {
	let index;
	if (arr.length > 1)	{
		index = sortingUsingPivot(arr, left, right);
		if (left < index - 1) {
			quickSort(arr, left, index - 1);
		}
		if (index < right) {
			quickSort(arr, index, right);
		}
	}
} 

function sortingUsingPivot(arr, left, right) {
	let pivot = arr[Math.floor((right + left) / 2)];
	let l = left; 
	let r = right; 
	while (l <= r) {
		while (arr[l] < pivot) {
			l++;
		}
		while (arr[r] > pivot) {
			r--;
		} 
		if (l <= r) {
			swap(arr, l, r);
			l++;
			r--;
		}
	}
	return l;
}

function swap(arr, leftIndex, rightIndex) {
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
}

var sorted = quickSort([75, 53, 82, 46, 11, 93, 5, 25, 34, 75, 74, 71, 51, 74, 69, 7, 50, 39, 24, 24, 14, 0, 91, 1, 12, 34, 90, 98, 68, 37, 34, 40, 56, 6, 46, 52, 36, 86, 0, 32, 91, 85, 36, 58, 16, 39, 70, 15, 65, 23, 89, 86, 32, 47, 26, 84, 32, 40, 92, 33, 15, 15, 35, 3, 26, 42, 0, 63, 27, 0, 35, 92, 62, 56, 48, 0, 57, 58, 47, 34, 25, 87, 89, 19, 64, 93, 96, 62, 9, 10, 70, 91, 42, 76, 30, 0, 16, 31, 21, 6], 0, 99)
console.log(sorted)