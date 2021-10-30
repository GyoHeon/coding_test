n = 49
start=2
end=n**(1/2)
while n != 1:
  if not n % start:
    n //= start
    print(start)
  else:
    start += 1