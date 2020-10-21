using System;

namespace Math
{
    public class Calculate
    {
        public void Sum()
        {
            int x,y;
            Console.WriteLine("\nAdding Two Numbers");
            Console.Write("Enter Number 1 : ");
            x=Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Number 2 :");
            y=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Sum is : {0}",x+y);        
        }
        public void Sub()
        {   
            int x0,y0;
            Console.WriteLine("\nSubtracting Two Numbers");
            Console.Write("Enter Number 1 : ");
            x0=Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Number 2 : ");
            y0=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Sub is : {x0-y0}");           
        }

        public void Mul()
        {   
            int x1,y1;
            Console.WriteLine("\nMultiplying Two Numbers");
            Console.Write("Enter Number 1 : ");
            x1=Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Number 2 : ");
            y1=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Multiplication is : {x1*y1}");
        }

         public void Div()
        {   
            float x2,y2;
            Console.WriteLine("\nDividing Two Numbers");
            Console.Write("Enter Number 1 : ");
            x2=Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Number 2 : ");
            y2=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Division is : {x2/y2}");
        }
    }
    
}