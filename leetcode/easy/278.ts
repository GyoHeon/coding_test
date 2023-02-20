var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    while (left <= right) {
      const medium = Math.floor((left + right) / 2);
      const version = isBadVersion(medium);
      if (version) right = medium - 1;
      else left = medium + 1;
    }
    return right + 1;
  };
};
