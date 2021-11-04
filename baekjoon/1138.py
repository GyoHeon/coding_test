n = int(input())
array = [i+1 for i in range(n)]
li = list(map(int,input().split()))

dic = dict()

for i in range(n):
    dic[i+1] = li[i]

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

# value 로 정렬
dic = dict(sorted(dic.items(), key= lambda item: item[1]))

print(*list(dic.keys()))