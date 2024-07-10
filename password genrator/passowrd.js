let upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase="abcdefghijklmnopqrstuvwxyz";
let numeric="0123456789";
let specialchar="@#$%&";
let mixchar=upercase+lowercase+numeric+specialchar;

let result=" ";

function genr(){
 let inputlength=document.getElementById("num").value;
 // atleast one upercase
     let condition1=document.getElementById("uper");
     if(condition1.checked==true){
     result +=upercase.charAt(Math.floor(Math.random()*upercase.length));
     for(let i=0; i<(inputlength-1); i++)
     {
         result +=mixchar.charAt(Math.floor(Math.random()*mixchar.length));
 
     }
     document.getElementById("output").value=result;

     return;
     }

        // atleast one number
      let condition2=document.getElementById("numb");
        if(condition2.checked==true){
         result +=numeric.charAt(Math.floor(Math.random()*numeric.length));
     for(let i=0; i<(inputlength-1); i++)
     {
         result +=mixchar.charAt(Math.floor(Math.random()*mixchar.length));
 
     }
     document.getElementById("output").value=result;
       return  }
        
      // atleast one specialchar
      let condition3=document.getElementById("specch");
        if(condition3.checked==true){
         result +=specialchar.charAt(Math.floor(Math.random()*specialchar.length));
     for(let i=0; i<(inputlength-1); i++)
     {
         result +=mixchar.charAt(Math.floor(Math.random()*mixchar.length));
 
     }
     document.getElementById("output").value=result;
       return  }

      // at least one upercase one number & one specialchar
      let condition4=document.getElementById("allone");
         if(condition4.checked==true){
           result +=upercase.charAt(Math.floor(Math.random()*upercase.length));
           result +=numeric.charAt(Math.floor(Math.random()*numeric.length));
           result +=specialchar.charAt(Math.floor(Math.random()*specialchar.length));
           for(let i=0; i<(inputlength-3); i++)
     {
         result +=mixchar.charAt(Math.floor(Math.random()*mixchar.length));
 
     }
     document.getElementById("output").value=result;
       return   }
}
