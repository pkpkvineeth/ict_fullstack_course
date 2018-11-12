def reverse(a):
    rev=0
    sum=0
    while(a>0):
        r=a%10
        sum=(sum*10)+r
        a=a//10
    return sum
a=int(input("Enter the no:"))
print(reverse(a))        