function login()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
}
function register()
{
    var name=document.getElementById("name").value;
    var address=document.getElementById("address").value;
    if(document.getElementById("r1").checked==true)
    {
        var gender=document.getElementById("r1").value;
    }
    else
    {
        var gender=document.getElementById("r2").value;
    }
    
    var age=document.getElementById("age").value;
    var dob=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var disttag=document.getElementById("district");
    var district=disttag.options[disttag.selectedIndex].text;
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
   /* console.log(name);
    console.log(address);
    console.log(gender);
    console.log(age);
    console.log(dob);
    console.log(email);
    console.log(district);
    console.log(user);
    console.log(pass);*/
}
