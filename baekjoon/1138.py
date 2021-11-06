#input
n = int(input())
li = list(map(int,input().split()))

# array, dict
array = [i+1 for i in range(n)]
dic = dict()
for i in range(n):
    dic[i+1] = li[i]

# 0~자기 숫자까지, 만약 자기보다 작거나 같은 값이 나오면 자기를 +1 하고
# 그 숫자를 어레이에서 제외해야함.
for i in range(n):
    array1 = array[:i]
    num = dic[i+1]
    for _ in range(10):
        for j in array1:
            if dic[j] <= num:
                try:
                    array1.remove(j)
                    num += 1
                except:
                    pass
        dic[i+1] = num

# value 로 정렬, print
dic = dict(sorted(dic.items(), key= lambda item: item[1]))
print(*list(dic.keys()))