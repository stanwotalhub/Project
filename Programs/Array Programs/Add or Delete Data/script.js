var StudentName=[];
var name='';

function AddData()
{
    name=(document.getElementById("name").value);
    name=name.toUpperCase();
   
    if(name=="")
    {
        document.getElementById("nameError").innerHTML="**Please Enter a valid input"
    }
    else
    {
    StudentName.push(name)
    ShowData();
    document.getElementById("name").value='';
    document.getElementById("nameError").innerHTML="";
    }

}

function ClrError()
{
    document.getElementById("nameError").innerHTML=""
}
function UpdateData()
{
    var name=document.getElementById("name").value;
    var hiddInp=document.getElementById("hiddenInput").value;
    StudentName[hiddInp]=name;    
    document.getElementById('name').value='';
    document.getElementById('hiddenInput').value='';
    ShowData();
    document.getElementById("updtBtn").style.display="none";
    document.getElementById("sbmtBtn").style.display="block";
}

function GetValue(index)
{

    document.getElementById("name").value=StudentName[index];
    document.getElementById("hiddenInput").value=index;

    document.getElementById("updtBtn").style.display="block";
    document.getElementById("sbmtBtn").style.display="none";
    
    ShowData();
}
function Delete(index)
{
    StudentName.splice(index,1)
    ShowData();
}

function ShowData()
{
    
    var data="<table  style='border:2px solid black;border-collapse:collapse;width:500px;text-align:center;font-size:25px;font-family:Bell MT;'><tr style='border:2px solid black; border-collapse:collapse;'><td style='border:2px solid black;'>Sr. No</td><td style='border:2px solid black;'>Name</td><td colspan='2' style='border:2px solid black;'>Action</td></tr>";
    for(var index=0;index<StudentName.length;index++)
    {
    data=data+"<tr style='border:2px solid black;'> <td style='border:2px solid black;'>"+(index+1)+"</td><td>"+StudentName[index]+"</td> ";
    data=data+"<td style='border:2px solid black;'><button style='outline: none;width: 100px;height: 40px;margin:10px;font-family: Bell MT;font-size: 30px;border: 0.5px solid black;border-radius: 25px;background-image:linear-gradient(180deg,#98DBC6,#5BC8AC);' onclick='GetValue("+index+")'>Edit</button>";
    data=data+"&nbsp<button style='outline: none;width: 100px;height: 40px;margin:10px;font-family: Bell MT;font-size: 30px;border: 0.5px solid black;border-radius: 25px;background-image:linear-gradient(180deg,#98DBC6,#5BC8AC);' onclick='Delete("+index+")'>Delete</button></td>"
    data=data+"</tr>"
    }
    if(index=="")
    {
        document.getElementById("nameError").innerHTML="";
        data="";
    }
    data=data+"</table>";

    document.getElementById("showData").innerHTML=data;
    
}