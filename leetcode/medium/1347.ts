function minSteps(s: string, t: string): number {
  let res = 0;
  const sObj = s.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  t.split("").forEach((str) => {
    if (sObj[str]) sObj[str] -= 1;
    else res++;
  });

  return res;
}
