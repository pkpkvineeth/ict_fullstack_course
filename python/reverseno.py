a=int(input("Enter the number to reverse:"))
n=a
rev=0
while(a>0):
    r=a%10
    rev*=10
    rev+=r
    print(rev)
    a//=10
print("Reverse of "+str(n)+" is "+str(rev))