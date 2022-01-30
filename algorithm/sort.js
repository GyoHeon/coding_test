/************선택 정렬************/
// 가장 작은 수부터 정렬하는 선택 정렬
// const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// for (let i = 0; i < arr.length; i++) {
//   let minIndex = i; // 가장 작은 원소의 인덱스
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[minIndex] > arr[j]) {
//       minIndex = j;
//     }
//   }

//   // 스와프(swap)
//   let temp = arr[i]; // 7
//   arr[i] = arr[minIndex]; // 5
//   arr[minIndex] = temp; // 7
//   console.log(arr);
// }

// console.log(arr);

/************삽입 정렬************/
// 0번 인덱스부터 원래 자리로 돌려놓는 삽입 정렬
arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    // 인덱스 j부터 1까지 1씩 감소하며 반복
    if (arr[j] < arr[j - 1]) {
      // 한 칸씩 왼쪽으로 이동
      // 스와프(swap)
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤 break;
    }
  }
  console.log(arr);
}
console.log(arr);

/************퀵 정렬************/
// 퀵정렬
// 피벗 값을 기준으로 큰 값과 작은 값의 위치를 서로 바꾸면서 정렬
// arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
// function quickSort(arr, start, end) {
//   if (start >= end) return; // 원소가 1개인 경우 종료
//   let pivot = start; // 피벗은 첫 번째 원소
//   let left = start + 1;
//   let right = end;
//   while (left <= right) {
//     // 피벗보다 큰 데이터를 찾을 때까지 반복
//     while (left <= end && arr[left] <= arr[pivot]) left++;
//     // 피벗보다 작은 데이터를 찾을 때까지 반복
//     while (right > start && arr[right] >= arr[pivot]) right--; // 엇갈렸다면 작은 데이터와 피벗을 교체
//     if (left > right) [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
//     // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
//     else [arr[left], arr[right]] = [arr[right], arr[left]];
//     console.log(arr);
//   }
//   // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
//   quickSort(arr, start, right - 1);
//   quickSort(arr, right + 1, end);
// }
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
