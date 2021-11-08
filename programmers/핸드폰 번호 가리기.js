function solution(phone_number) {
  const last4 = phone_number.slice(-4);
  const mask = last4.padStart(phone_number.length, "*");
  return mask;
}
