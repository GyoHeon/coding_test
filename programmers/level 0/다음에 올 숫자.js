function solution(common) {
  const diff = common[1] - common[0];
  const multi = common[1] / common[0];
  if (diff === common[2] - common[1]) return common[common.length - 1] + diff;
  if (multi === common[2] / common[1]) return common[common.length - 1] * multi;
}
