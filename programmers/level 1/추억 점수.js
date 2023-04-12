function solution(name, yearning, photo) {
  const score = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, {});

  return photo.map((pic) =>
    pic.reduce((acc, cur) => acc + (score[cur] || 0), 0)
  );
}
