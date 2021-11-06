t = int(input())
for _ in range(t):
    m, n, k = map(int, input().split())
    graph = []
    for _ in range(k):
        x, y = map(int,input().split())