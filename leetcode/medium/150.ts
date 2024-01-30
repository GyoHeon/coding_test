function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  for (let i of tokens) {
      if (Number(i) === +i) {
          stack.push(+i);
      } else {
          const f = stack.pop();
          const s = stack.pop();
          const newNum = Math.trunc(eval(s +` ${i} `+ f))
          stack.push(newNum)
      }
  }

  return stack[0]
};