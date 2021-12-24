function solution(w, h) {
  let max, min;
  w > h ? ((max = w), (min = h)) : ((max = h), (min = w));
  let i = min;
  for (; i > 1; i--) {
    if ((max % i) + (min % i) === 0) break;
  }
  return w * h - (w + h - i);
}
