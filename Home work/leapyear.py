a=int(input("Enter the year:"))
if(a%4==0):
    if(a%100==0):
        if(a%400==0):
            print("Leap year")
        else:
            print("Not a leap year")
    else:
        print("Leap year")
else:
    print("Not a leap year")