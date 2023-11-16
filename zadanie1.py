wejscie = input() 
wejscie = list(map(int, wejscie.split()))
n = wejscie[0] ; m = wejscie[1]
Pas = [] ; MaxLenght = 0

for i in range(0 , n):
    Pas.append(input())

for x in range(0, n-1):
    if Pas[x][x+1] == "." :
        MaxLenght = MaxLenght + 1
    elif Pas[x] == ".":
        OneLenght = True

print(MaxLenght)