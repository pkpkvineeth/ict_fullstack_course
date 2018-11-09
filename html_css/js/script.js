function Read()
{
    var name=document.getElementById("name").value;
    var rollno=document.getElementById("roll_no").value;
    var admno=document.getElementById("adm_no").value;
    var age=document.getElementById("age").value;
    var op=document.getElementById("district");
    console.log(op);
    var dist=op.options[op.selectedIndex].value;
    console.log(dist);
    if(age>=18)
    {
        alert("YOU ARE QUALIFIED");
    }
    else
    {
        alert("YOU ARE NOT QUALIFIED");
    }
}
function calc()
{
    num1=document.getElementById("op1").value;
    num2=document.getElementById("op2").value;
    num3=document.getElementById("op");
    op=num3.options[num3.selectedIndex].value;
    if(Number(op)==1)
    {
        result= Number(num1) + Number(num2);
    }
    else if(Number(op)==2)
    {
        result= Number(num1) - Number(num2);
    }
    else if(Number(op)==3)
    {
        result= Number(num1) * Number(num2);
    }
    else
    {
        result= Number(num1) / Number(num2);
    }
   // console.log(result);
   document.getElementById("result").innerHTML=result;
}
function Largest()
{
    num1=document.getElementById("one").value;
    num2=document.getElementById("two").value;
    num3=document.getElementById("three").value;
    x=parseInt(num1);
    y=parseInt(num2);
    z=parseInt(num3);
    large=x;
    if(large<y)
    {
        large=y;
    }
    if(large<z)
    {
        large=z;
    }
    //console.log("Greatest Number:"+large);
    document.getElementById("result").innerHTML="<div class='card bg-danger text-white'>"+large+"</div>";
}
function Smallest()
{
    num1=document.getElementById("one").value;
    num2=document.getElementById("two").value;
    num3=document.getElementById("three").value;
    x=parseInt(num1);
    y=parseInt(num2);
    z=parseInt(num3);
    small=x;
    if(small>y)
    {
        small=y;
    }
    if(small>z)
    {
        small=z;
    }
    //console.log("Smallest Number:"+small);
    document.getElementById("result").innerHTML="<div class='card bg-success text-white'>"+small+"</div>";
}
