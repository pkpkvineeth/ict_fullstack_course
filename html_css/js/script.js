function Read()
{
    var name=document.getElementById("name").value;
    var rollno=document.getElementById("roll_no").value;
    var admno=document.getElementById("adm_no").value;
    var age=document.getElementById("age").value;
    if(age>=18)
    {
        alert("YOU ARE QUALIFIED");
    }
    else
    {
        alert("YOU ARE NOT QUALIFIED");
    }
}