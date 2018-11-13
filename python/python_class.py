class Students:
    def __init__(self,name,rollno,age):
        self.name=name
        self.rollno=rollno
        self.age=age
    def getage(self):
        print("name",self.name)
        print("Rollno",self.rollno)
        print("age is",self.age)
s=Students("vineeth",47,23)
s.getage()
#x=int(input("Enter the age:"))
#s.getage(x)