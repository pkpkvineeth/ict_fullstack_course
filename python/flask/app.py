from flask import Flask, render_template, request

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html') 

@app.route("/about/")
def about():
    return render_template('about.html')

@app.route("/contact/")
def contact():
    return render_template('contact.html') 
@app.route("/send",methods=['GET','POST'])
def send():
    if(request.method=='POST'):
        getName = request.form['name']
        getEmail = request.form['email']   
        getMobile = request.form['mobile']
        getSubject = request.form['subject']
        getMessage = request.form['message']
        return render_template('result.html',newName=getName,newEmail=getEmail,newMobile=getMobile,newSubject=getSubject,newMessage=getMessage)
if(__name__=='__main__'):
    app.run(debug=True)