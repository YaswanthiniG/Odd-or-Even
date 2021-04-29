function ischeck(){
	var num1=document.myform.OddEven.value;
	if (num1 != 0) {
		if((num1%2) === 0)
		{
		  if(num1 >0)
		  {
			 document.getElementById('Result').innerHTML="Yayy! Number"+ " "+ num1 +" "+" is Even Number and Positive Value.";
		  }
		  else{
		  document.getElementById('Result').innerHTML="Yayy! Number"+ " "+ num1 +" "+" is Even Number and Negative Value.";
		  }
		}
		else
		{
		  if(num1 > 0)
		  {
			document.getElementById('Result').innerHTML="Heyy! Number"+" " + num1+" " + "is Odd Number and Positive Value.";
		  }
		  else{
		  document.getElementById('Result').innerHTML="Heyy! Number"+" " + num1+" " + "is Odd Number and Negative Value.";
		  }
		}
	}
	else
	{
	   document.getElementById('Result').innerHTML="Oops! Number is neither Odd nor Even"
	}
}
	