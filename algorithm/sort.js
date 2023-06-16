/************버블 정렬************/
// 숫자 하나를 정렬하기 위해 한 방향에서 반대 방향까지 인접한 두 수를 비교하는 것을 반복하는 정렬
// 이를 모든 수에 반복하면 정렬이 완료된다.
const arrBubble = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arrBubble.length; i++) {
  for (let j = arrBubble.length - 1; j > i; j--) {
    if (arrBubble[j - 1] > arrBubble[j]) {
      [arrBubble[j - 1], arrBubble[j]] = [arrBubble[j], arrBubble[j - 1]];
    }
  }
}

console.log("Bubble sort is :", arrBubble);

/************선택 정렬************/
// 가장 작은 수부터 정렬하는 선택 정렬
const arrSelect = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arrSelect.length; i++) {
  let minIndex = i; // 가장 작은 원소의 인덱스
  for (let j = i + 1; j < arrSelect.length; j++) {
    if (arrSelect[minIndex] > arrSelect[j]) {
      minIndex = j;
    }
  }

  // 스와프(swap)
  let temp = arrSelect[i]; // 7
  arrSelect[i] = arrSelect[minIndex]; // 5
  arrSelect[minIndex] = temp; // 7
}

console.log("Select sort is :", arrSelect);

/************삽입 정렬************/
// 0번 인덱스부터 원래 자리로 돌려놓는 삽입 정렬
const arrInsert = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arrInsert.length; i++) {
  for (let j = i; j > 0; j--) {
    // 인덱스 j부터 1까지 1씩 감소하며 반복
    if (arrInsert[j] < arrInsert[j - 1]) {
      // 한 칸씩 왼쪽으로 이동
      // 스와프(swap)
      let temp = arrInsert[j];
      arrInsert[j] = arrInsert[j - 1];
      arrInsert[j - 1] = temp;
    } else {
      break;
      // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
    }
  }
}

console.log("Insert sort is :", arrInsert);

/************퀵 정렬************/
// 퀵정렬
// 피벗 값을 기준으로 큰 값과 작은 값의 위치를 서로 바꾸면서 정렬
const arrQuick = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(arr, start, end) {
  if (start >= end) return; // 원소가 1개인 경우 종료
  let pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;
  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) left++;
    // 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) right--; // 엇갈렸다면 작은 데이터와 피벗을 교체
    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    }
    // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}

quickSort(arrQuick, 0, arrQuick.length - 1);

console.log("Quick sort is :", arrQuick);
