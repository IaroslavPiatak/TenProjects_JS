let screen = 0;
let result = 0;

document.getElementById('b0').onclick=()=>
{      
    document.getElementById('screen1').value += "0";

}

document.getElementById('b1').onclick=()=>
{      
    
    document.getElementById('screen1').value += "1";


}
document.getElementById('b2').onclick=()=>
{      
    
    document.getElementById('screen1').value += "2";


}
document.getElementById('b3').onclick=()=>
{      
    
    document.getElementById('screen1').value += "3";


}
document.getElementById('b4').onclick=()=>
{      
    
    document.getElementById('screen1').value += "4";


}
document.getElementById('b5').onclick=()=>
{      
    
    document.getElementById('screen1').value += "5";


}
document.getElementById('b6').onclick=()=>
{      
    
    document.getElementById('screen1').value += "6";


}
document.getElementById('b7').onclick=()=>
{      
    
    document.getElementById('screen1').value += "7";


}
document.getElementById('b8').onclick=()=>
{      
    
    document.getElementById('screen1').value += "8";


}
document.getElementById('b9').onclick=()=>
{      
    
    document.getElementById('screen1').value += "9";


}

document.getElementById('b+').onclick=()=>
{      
    
    document.getElementById('screen1').value += "+";


}
document.getElementById('b-').onclick=()=>
{      
    
    document.getElementById('screen1').value += "-";


}
document.getElementById('b*').onclick=()=>
{      
    
    document.getElementById('screen1').value += "*";


}
document.getElementById('b/').onclick=()=>
{      
    
    document.getElementById('screen1').value += "/";


}

document.getElementById('bc').onclick=()=>
{      
    
    document.getElementById('screen1').value = " ";


}

document.getElementById('b=').onclick=()=>
{ 
    result = (document.getElementById("screen1").value);
    document.getElementById('screen1').value = (eval(result));  
     
}









