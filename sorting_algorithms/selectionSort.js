
//ascending order

const selSort = (arr) => {
  const n = arr.length;
  for(let i=0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }
    if(minIndex !== i){
        //swap arr[i] and arr[minIndex]
        let temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex] = temp;
    }
  }
  return arr;
}

const t = selSort([8,4,0,56,93,20]);
console.log(t); 

//descending order

const descSelect = (arr1) => {
  const n = arr1.length;
  for(let i=0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
        if(arr1[j]<arr1[minIndex]){
            minIndex=j;
        }
    }
    if(minIndex !== i){
        let temp = arr1[i];
        arr1[i]=arr1[minIndex];
        arr1[minIndex]=temp;
    }
  }
  return arr1;
}

const r = descSelect([3,9,120,44,38,99,55,69,49]);
console.log(r);