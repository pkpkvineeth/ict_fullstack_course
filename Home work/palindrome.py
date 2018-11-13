a=int(input("Enter the number to reverse:"))
n=a
rev=0
while(a>0):
    r=a%10
    rev*=10
    rev+=r  
    a//=10
if(rev==n):
    print("Number is palindrome")
else:
    print("Number is not palindrome")
