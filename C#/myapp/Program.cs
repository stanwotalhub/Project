using System;
using Math;

namespace myapp
{
    class Program
    {
        static void Main(string[] args)
        {   
            string z;
            Console.WriteLine("Enter 'sum' for Add ");
            Console.WriteLine("Enter 'sub' for Subtract ");
            Console.WriteLine("Enter 'mul' for Multiply ");
            Console.WriteLine("Enter 'div' for Divide ");
            Console.Write("Enter : ");
            z=Convert.ToString(Console.ReadLine());

            if(z=="sum")
            {
            Calculate doSum=new Calculate();
            doSum.Sum();
            }


            if(z=="sub")
            {
            Calculate doSub=new Calculate();
            doSub.Sub();
            }

            if(z=="mul")
            {
            Calculate doMul=new Calculate();
            doMul.Mul();
            }

            if(z=="div")
            {
            Calculate doDiv=new Calculate();
            doDiv.Div();
            }
        }
    }
    
}
