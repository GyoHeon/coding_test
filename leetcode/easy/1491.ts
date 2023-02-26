function average(salary: number[]): number {
  const diff = Math.min(...salary) + Math.max(...salary);
  const sum = salary.reduce((acc: number, cur: number) => acc + cur, -diff);

  return sum / (salary.length - 2);
}
