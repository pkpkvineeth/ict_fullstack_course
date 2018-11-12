def large(x,y,z):
   if(a>b) :
    g=a
   else:
    g=b
   if(c>g):
    g=c
   return g 
a=int(input("Enter a number1:"))
b=int(input("Enter a number2:"))
c=int(input("Enter a number3:"))
print(str(large(a,b,c)) +"is the greatest number")
