// Number is Prime or Not
function PrimeOrNot()
{
    var num=document.getElementById("value1").value;
    num=Number(num);

    if(num>1)
    {
        for(var i=2;i<num/2;i++)
        {
            if(num%i==0)
            {
                document.getElementById("res").value="Number is not prime";
                break;
            }
            else
            {
                document.getElementById("res").value="Number is prime";
            }   
        }

    }
    else if(num==1)
    {
        document.getElementById("res").value="Number is Prime";
    }
    else
    {
        document.getElementById("res").value="Error!!";
    }
   
}
// List Of Odd and Even Numbers
function OddEven()
{
    var from=Number(document.getElementById("OE").value);
    var to=Number(document.getElementById("OE1").value);
    var y="";
    var x=document.getElementById("options").value;

if(from>=0)
    {

        for(var i=from;i<=to;i++)
        {   
            if(i%2!==0)
            { 
                if(x=="Odd")
                {  
                    y=y+i+'<br>'
                    document.getElementById("OddEvenresult").innerHTML=("Odd Numbers"+'<br>'+y);
                }
                else if(x=="Select")
                {
                    document.getElementById("OddEvenresult").innerHTML="Please Select Option!!";
                }

            }
        }

        for(var i=from;i<=to;i++)
        {
            if(i%2===0)
            {
                if(x=="Even")
                {     
                    y=y+i+'<br>'
                    document.getElementById("OddEvenresult").innerHTML=("Even Numbers"+'<br>'+y);
                }
                else if(x=="Select")
                {
                    document.getElementById("OddEvenresult").innerHTML="Please Select Option!!";
                }
            }
        }
    }

else
{
    document.getElementById("OddEvenresult").innerHTML="** Number Should be greater than 0 ";

}   
}

// Sum Of Natural Numbers
function NaturalNm()
{
    var x,y=0,i;
    x=Number(document.getElementById("NN").value);
if(x>0)
{
    for(i=1;i<=x;i++)
    {
        y=y+i;
    }
    document.getElementById("SumNN").innerHTML="Sum of Numbers from 1 to "+x+":"+'<br>'+y;
}
else if(x=="")
{
document.getElementById("SumNN").innerHTML="** Please Enter a Valid Number";
}

else
{
document.getElementById("SumNN").innerHTML="** Number Should be Greater than 0";
}
}

//Reverse Of a Number
function reverseNo()
{
    var n,x,rev=0,num;
    num=Number(document.getElementById("RN").value);
    n=parseInt(num);
if(n>0)
{
    while(num>0)
        {
        
        x=parseInt(num%10);
        rev=parseInt(rev*10+x);
        num=parseInt(num/10); 
        }
       
    document.getElementById("RevNo").innerHTML="Reverse of "+n+" is: "+'<br>'+rev;
}
else if(n=="")
{
document.getElementById("RevNo").innerHTML="** Please Enter a Valid Number";
}

else
{
document.getElementById("RevNo").innerHTML="** Number Should be Greater than 0";
}
}

// Palindrome or Not

function PoN()
{
    var n,x,rev=0,num;
    num=Number(document.getElementById("PalindromeNo").value);
    n=parseInt(num);
if(n>0)
{
    while(num>0)
        {    
            x=parseInt(num%10);
            rev=parseInt(rev*10+x);
            num=parseInt(num/10); 
            }
    
            if(n==rev)
            {
            document.getElementById("PalindromeCheck").innerHTML="The number "+n+" is Palindrome";
            }

            if(n!=rev)
            {
            document.getElementById("PalindromeCheck").innerHTML="The number "+n+" is Not Palindrome";  
        }
    
}
else if(n=="")
{
document.getElementById("PalindromeCheck").innerHTML="** Please Enter a Valid Number";
}

else
{
document.getElementById("PalindromeCheck").innerHTML="** Number Should be Greater than 0";
}
}
// Sum Of Digits in a Number
function SumOfDigit()
{
    var n,x,rev=0,num;
    num=Number(document.getElementById("SumNumber").value);
    n=parseInt(num);

if(n>0)
    {
        while(num>0)
            {
            
            x=parseInt(num%10);
            rev=parseInt(rev+x);
            num=parseInt(num/10); 
            }
        
        document.getElementById("SumNumberResult").innerHTML="Sum of Digits is: "+rev;
    }
else if(n=="")
{
document.getElementById("SumNumberResult").innerHTML="** Please Enter a Valid Number";
}

else
{
document.getElementById("SumNumberResult").innerHTML="** Number Should be Greater than 0";
}
}


// Fibonacci Series
function FibSeries()
{
    var i,f=0,s=1,next;
    num=Number(document.getElementById("FS").value);

if(num>0)
{
    for(i=0;i<num;i++)
    {
        if(i<=1)
        {
        next=i;
        }
        else
        {
            next=f+s;
            f=s;
            s=next;  
        }    
    }
    document.getElementById("FSresult").innerHTML = num +"th term is : "+ next ;
}
else if(num=="")
{
document.getElementById("FSresult").innerHTML="** Please Enter Valid Number of Terms";
}

else
{
document.getElementById("FSresult").innerHTML="** Number Should be Greater than 0";
}
}

//Outer-Inner Loop

function OuterInner()
{
 var num=parseInt(document.getElementById("numberx").value);

 var a='<table style="width:50%"> <tr> <td> Outer Loop </td> </tr>';

 for(var outer=1;outer<=num;outer++)
 {
     a=a+'<tr> <td>'+outer+'</td><td>'
     {
         for(var inner=outer;inner<=num;inner++)
         {
             a=a+inner+'';   
         }
     }
     a=a+'</td> </tr>';
 }
 a=a+'</table>';

document.getElementById("rslt").innerHTML=a;

}

// All Patterns

function patterns()
{
    var pattern=document.getElementById("SelectPattern").value;
    var number= parseInt(document.getElementById('numbery').value);
    var a='';

if(pattern=="Select" || number=="") 
document.getElementById("patt").innerHTML="** Please Select Option"+'<br>'+"** Please Enter Number";

if(pattern=="Select") 
document.getElementById("patt").innerHTML="** Please Select Option";

//Pattern patt
if(pattern=="Star-Pattern")    
{
if(number>0)
{
    for( var row=1; row<=number; row++)
    {
        for(var col=1; col<=row;col++)
            {
            a=a+"*";
            }
        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML= a;
}
else
{
    document.getElementById("patt").innerHTML="** Please Enter a Valid Number";
}    
}

// Row Pattern
if(pattern=="Row-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number; row++)
    {
        for(var col=1; col<=row;col++)
            {
            a=a+row;
            }
        a=a+' '+'<br>'
    }
    document.getElementById('patt').innerHTML= a;
}
else
{
    document.getElementById("patt").innerHTML="** Please Enter a Valid Number";
}    
}


// Column Pattern
if(pattern=="Col-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number; row++)
    {
        for(var col=1; col<=row;col++)
            {
            a=a+col;
            }
        a=a+' '+'<br>'
    }
    document.getElementById('patt').innerHTML= a;
}
else
{
    document.getElementById("patt").innerHTML="** Please Enter a Valid Number";
}    
}

// Reverse Pattern
if(pattern=="Rev-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number;row++)
    {
        for(var col=row; col>=1;col--)
            {
            a=a+col;
            }
        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;   
}

else
{
    document.getElementById("patt").innerHTML="Please Enter a Valid Number";
}    
}

// Square Pattern
if(pattern=="Square-Pattern")
{
if(number>0)
{
    for( var row=number; row>=1;row--)
    {
        for(var col=number; col>=1;col--)
            {
            a=a+col;
            }
        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;   
}

else
{
    document.getElementById("patt").innerHTML="Please Enter a Valid Number";
}    
}

// Inverted Pattern
if(pattern=="Inv-Pattern")
{
if(number>0)
{
    for( var row=number; row>=1;row--)
    {
        for(var col=1; col<=row;col++)
            {
            a=a+row;
            }
        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;   
}

else
{
    document.getElementById("patt").innerHTML="Please Enter a Valid Number";
}    
}

// Mirror Pattern
if(pattern=="Mirror-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number;row++)
    {
        for(var space=1; space<=number-row;space++)
            {
            a=a+" "+" ";
            }

        for(var col=1; col<=row;col++)
            {
            a=a+"*";
            }
        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;   
}

else
{
    document.getElementById("patt").innerHTML="Please Enter a Valid Number";
}    
}

// Mirror Pattern
if(pattern=="Half-Diamond-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number;row++)
    { 
        for(var space=1; space<=number-row;space++)
        {
            a=a+" "+" ";
        }
        for(var star1=1; star1<=row;star1++)
        {
        a=a+"*";
        }
        for(var star2=1; star2<=row-1;star2++)
        {
        a=a+"*";
        }

        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;   
}

else
{
    document.getElementById("patt").innerHTML="Please Enter a Valid Number";
}    
}

if(pattern=="Full-Diamond-Pattern")
{
if(number>0)
{
    for( var row=1; row<=number;row++)
    { 
        for(var space=1; space<=number-row;space++)
        {
            a=a+" "+" ";
        }
        for(var star1=1; star1<=row;star1++)
        {
        a=a+"*";
        }
        for(var star2=1; star2<=row-1;star2++)
        {
        a=a+"*";
        }

        a=a+'<br>'
    }
    for( var row=number-1; row>=1;row--)
    {
        for(var space=1; space<=number-row;space++)
        {
            a=a+" "+" ";
        }
        for(var star1=1; star1<=row;star1++)
        {
        a=a+"*";
        }
        for(var star2=1; star2<=row-1;star2++)
        {
        a=a+"*";
        }

        a=a+'<br>'
    }
    document.getElementById('patt').innerHTML=a;  

}

else
{
    document.getElementById("patt").innerHTML="Something went wrong😕";
}   

}

}

// Number Converter
function Convert()
{
    var y=" ";
    const name=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    var number=document.getElementById("Conv-Num").value;   
    var splt=number.split("");
    if(number.length>0)
    {
    for(var i=0;i<number.length;i++)
    {
        y=y+splt[i]+" ";
        var res=y.replace(splt[i],name[splt[i]]);
        y=res;
    }
    document.getElementById("NumConv").innerHTML=res;
    document.getElementById("NumConv1").innerHTML="Length Of Number : "+number.length;
    }
    else
    {
    document.getElementById("NumConv").innerHTML="";
    document.getElementById("NumConv1").innerHTML="";

    }
    if(number<0)
    {
    document.getElementById("NumConv").innerHTML="";
    document.getElementById("NumConv1").innerHTML="* Please Enter a Valid Number";
    }
   
}

// this Learning
function learn()
{ 
    var fruit={
        Zero:"0",
        color:"Red",
    showNumber: function(){
        document.getElementById("learn1").innerHTML=
        this.Zero;
    }
    };
    fruit.showNumber();

}

