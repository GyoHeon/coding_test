word = input()
count = 0
for i in range(len(word)-1):
    if word[i] != word[i+1]:
        count += 1
print((count+1)//2)