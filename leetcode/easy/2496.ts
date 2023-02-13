function maximumValue(strs: string[]): number {
  return Math.max(
    ...strs.map((str: string) => {
      const toNum = Number(str);
      if (isNaN(toNum)) return str.length;
      return toNum;
    })
  );
}
