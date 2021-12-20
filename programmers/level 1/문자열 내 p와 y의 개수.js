function solution(s) {
  s = s.replace(/[^p,y]/gi, "");
  s = s.replace(/p/gi, "+1");
  s = s.replace(/y/gi, "-1");

  return eval(s) ? false : true;
}
