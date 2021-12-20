function solution(a, b) {
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let cal = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b;
  for (let i = 0; i < a - 1; i++) {
    day += cal[i];
  }
  return days[day % 7];
}
