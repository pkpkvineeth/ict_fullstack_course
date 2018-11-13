class employee:
    def __init__(self,code,age,name,salary):
        self.code=code
        self.age=age
        self.name=name
        self.salary=salary
    def printdata(self):
        print("Name:"+self.name)
        print("ID:"+str(self.code))
        print("Age:"+str(self.age))
        print("Salary:"+str(self.salary))
        print("\n")
s1=employee(1,23,"xx",8000)
s2=employee(2,46,"yy",18000)
s3=employee(3,18,"zz",5000)
s4=employee(4,35,"aa",15000)
s5=employee(5,55,"bb",28000) 
mylist=(s1,s2,s3,s4,s5)
for x in mylist:
    x.printdata() 