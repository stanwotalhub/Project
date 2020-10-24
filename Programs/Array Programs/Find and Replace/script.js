var data="<div style='margin:25px;background-color:black;padding:10px;font-size:20px;font-family:Bell MT;text-align:justify;border:1px solid black;border-radius:10px;width:700px';height:auto;><center><h1 style='color:red'>Apply For Job</h1></center><p style='color:white;'> #name <br> #contactNo <br> #gmail <br><br> Date : #date <br><br> #managerName <br> #companyName Company <br><br> Dear #managerName ,<br><br>&nbsp&nbsp&nbsp&nbsp I was so excited when my former coworker, Jay Lopez, told me about your opening for an administrative assistant in your Portland offices. A long-time Veggies to Go customer and an experienced admin, I would love to help the company achieve its mission of making healthy produce as available as takeout. <br><br>&nbsp&nbsp&nbsp&nbsp I’ve worked for small companies for my entire career, and I relish the opportunity to wear many hats and work with the team to succeed. In my latest role as an administrative assistant at Beauty Corp, I saved my employer thousands of dollars in temp workers by implementing a self-scheduling system for the customer service reps that cut down on canceled shifts. I also learned web design, time sheet coding, and perfected my Excel skills. <br><br> I’ve attached my resume for your consideration and hope to speak with you soon about your needs for the role. <br><br> Best Regards, <br><br> #name  <p></div>";
document.getElementById("show").innerHTML=data;

function Change()
{
    var name=document.getElementById("name").value;
    var contactNo=document.getElementById("phnNo").value;
    var gmail=document.getElementById("gmail").value;
    var date=document.getElementById("date").value;
    var managerName=document.getElementById("managerName").value;
    var companyName=document.getElementById("companyName").value;
    var split=data.split(" ");
    var y="";
    for(var i=0;i<split.length;i++)
    {
        if(split[i]=="#name")
        {
            if(name=="")
            {
            name="<span style='color:red'>** Please Enter Your Name</span>"
            }
            split[i]=name;
        }
        if(split[i]=="#contactNo")
        {
            if(contactNo=="")
            {
                contactNo="<span style='color:red'>** Please enter your Contact Number</span>"
            }
            split[i]=contactNo;
        }
        if(split[i]=="#gmail")
        {
            if(gmail=="")
            {
                gmail="<span style='color:red'>** Please enter your Gmail</span>"
            }
            split[i]=gmail;
        }
        if(split[i]=="#date")
        {
            if(date=="")
            {
                date="<span style='color:red'>** Please enter date</span>"
            } 
        split[i]=date;
        }
        if(split[i]=="#managerName")
        {
            if(managerName=="")
            {
                managerName="<span style='color:red'>** Please enter Manager's Name</span>"
            } 
        split[i]=managerName;
        }
        if(split[i]=="#companyName")
        {
            if(companyName=="")
            {
                companyName="<span style='color:red'>** Please enter Company Name</span>"
            } 
        split[i]=companyName;
        }

        y=y+split[i]+" ";  
    }  
    document.getElementById("name").value="";
    document.getElementById("phnNo").value="";
    document.getElementById("gmail").value="";
    document.getElementById("date").value="";
    document.getElementById("managerName").value="";
    document.getElementById("companyName").value="";
    document.getElementById("show").innerHTML=y;
    // document.getElementById("show").innerHTML=split.length;
}
