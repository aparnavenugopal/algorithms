1.Explain different sorting techniques used?
A.Sorting techniques:
  These algorithms compare elements of the array to determine their relative order and rearrange them accordingly. Some popular comparison-based sorting algorithms include:
      1.Bubble Sort: Compares adjacent elements and swaps them if       are in the wrong order.
      2.Selection Sort: Finds the minimum (or maximum) element from the unsorted portion and places it at the beginning (or end) of the sorted portion.
      3.Insertion Sort: Builds the sorted array one element at a time by inserting each element into its correct position.
      4.Merge Sort: Divides the array into smaller sub-arrays, sorts them, and then merges them back together.
      5.Quick Sort: Selects a pivot element, partitions the array into two sub-arrays based on the pivot, and recursively sorts each sub-array.
    
    Non-comparison-based Sorting Algorithms:
       These algorithms do not rely solely on comparing elements to sort the array. They often exploit specific properties of the data to achieve sorting.
          1.Counting Sort: Suitable for sorting integers with a limited range of values. It counts the occurrences of each element and uses that information to place elements in sorted order.
          2.Radix Sort: Sorts integers by grouping digits by significant positions and sorting them digit by digit.
    
    1.Selection Sort:
         Overview:
           Selection sort is a simple comparison-based sorting algorithm. It divides the array into two portions: sorted and unsorted. It repeatedly finds the minimum (or maximum) element from the unsorted portion and swaps it with the first unsorted element. This process continues until the entire array is sorted.

         Algorithm Steps:

           1.Start with an unsorted array.
           2.Iterate through the array from the first element to the second-to-last element.
           3.For each iteration, assume the current element is the minimum.
           4.Compare the current element with the elements following it to find the actual minimum.
           5.Swap the minimum element with the current element if necessary.
           6.Move to the next unsorted element.
           7.Repeat steps 3-6 until the entire array is sorted.
            
         Time Complexity:

           1.Selection sort has a time complexity of O(n^2), where n is the number of elements in the array.
           2.It has nested loops: one loop iterates over each element of the array, and the inner loop searches for the minimum element in the unsorted portion.
           3.Even though it has a quadratic time complexity, it can be efficient for small datasets or nearly sorted arrays due to its simplicity and low overhead.

         Space Complexity:

           Selection sort has a space complexity of O(1) because it only requires a constant amount of extra space for storing temporary variables during the swapping process.

         Pros and Cons:

           1.Pros: Simple implementation, minimal memory usage, performs well on small datasets or nearly sorted arrays.
           2.Cons: Inefficient for large datasets due to its quadratic time complexity, not suitable for use on large arrays or real-time systems where efficiency is critical.

        