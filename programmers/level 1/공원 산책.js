function solution(park, routes) {
  const obj = { E: [0, 1], W: [0, -1], N: [-1, 0], S: [1, 0] };
  const xLim = park.length;
  const yLim = park[0].length;

  let position = [0, 0];

  for (let i = 0; i < park.length; i++) {
    const idx = park[i].indexOf("S");
    if (idx > -1) position = [i, idx];
  }

  routes.forEach((route) => {
    const temp = obj[route[0]];
    const num = Number(route[2]);
    let tempPosition = [...position];

    for (let i = 0; i < num; i++) {
      for (let j in temp) {
        tempPosition[j] += temp[j];
      }
      const x = tempPosition[0];
      const y = tempPosition[1];
      if (x >= xLim || x < 0) return;
      if (y >= yLim || y < 0) return;

      const land = park[x][y];

      if (land === "X") return;
    }
    position = [...tempPosition];
  });

  return position;
}
