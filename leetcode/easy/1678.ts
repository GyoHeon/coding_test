function interpret(command: string): string {
  return command.replace(/\(\)/g, "o").replace(/\(/g, "").replace(/\)/g, "");
}
