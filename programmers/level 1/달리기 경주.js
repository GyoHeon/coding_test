function solution(players, callings) {
  const [objName, objIdx] = players.reduce(
    (acc, player, idx) => {
      acc[0][player] = idx;
      acc[1][idx] = player;
      return acc;
    },
    [{}, {}]
  );

  callings.forEach((call) => {
    const before = objName[call];
    const change = objIdx[before - 1];
    objIdx[before] = change;
    objIdx[before - 1] = call;
    objName[change]++;
    objName[call]--;
  });

  const answer = [];
  for (let [name, idx] of Object.entries(objName)) {
    answer[idx] = name;
  }

  return answer;
}
