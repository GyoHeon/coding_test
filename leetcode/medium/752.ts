function openLock(deadends: string[], target: string): number {
  const deadendsObj = deadends.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});

  const start = "0000";
  let answer = 0;
  let queue: string[] = [start];
  const visited = { [start]: true };

  while (queue.length) {
    if (queue.includes(target)) {
      return answer;
    }

    const temp: string[] = [...queue];
    queue = [];
    for (let lock of temp) {
      if (deadendsObj[lock]) {
        continue;
      }
      for (let i = 0; i < 4; i++) {
        const plus = plusOne(lock, i);
        if (!deadendsObj[plus] && !visited[plus]) {
          visited[plus] = true;
          queue.push(plus);
        }

        const minus = minusOne(lock, i);
        if (!deadendsObj[minus] && !visited[minus]) {
          visited[minus] = true;
          queue.push(minus);
        }
      }
    }
    answer++;
  }

  return -1;
}

function plusOne(lock: string, i: number): string {
  const lockArr = lock.split("");
  lockArr[i] = ((Number(lockArr[i]) + 1) % 10).toString();

  return lockArr.join("");
}
function minusOne(lock: string, i: number): string {
  const lockArr = lock.split("");
  lockArr[i] = ((Number(lockArr[i]) + 9) % 10).toString();

  return lockArr.join("");
}
