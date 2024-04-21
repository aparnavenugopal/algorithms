//ascending order
const bruteSort = (arr, n) => {
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[i]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;

}

const t = bruteSort([3,9,20,100,44,-2,0],7);
console.log(t);

//descending order

const descBruteSort = (arr1,n) => {
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr1[j]>arr1[i]){
                let temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    return arr1;
}

const r = descBruteSort([-1,7,3,0,22,22,83],7);
console.log(r);