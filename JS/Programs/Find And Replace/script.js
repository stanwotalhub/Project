var data="My Name is #name . My Name is #fatherName .";
document.getElementById("show").innerHTML=data;

function Change()
{
    var name=document.getElementById("name").value;
    var ftname=document.getElementById("ftname").value;

    var split=data.split(" ");
    var userName=split.indexOf("#name");
    var fatherName=split.indexOf("#fatherName");

        split[userName]=name;
        split[fatherName]=ftname;
      
        var y="";
        for(var i=0;i<split.length;i++)
        {
            y=y+split[i]+" ";
        }
    document.getElementById("show").innerHTML=y;
}
