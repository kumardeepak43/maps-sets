// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps) 
  
 // Input: 
 // abcadeecfb 
  
 // Output: 
 // a=2 
 // b=2 
 // c=2 
 // d=1 
 // e=2 
 // f=1 
  
  
 var Count_Occ = (s) =>  
 { 
     let Arr = s.split("").sort(); 
     var a; 
     let map = new Map(); 
     for(let i =0; i<Arr.length;i++) 
     { 
       a=0; 
       Arr.reduce((acc,val)=> 
       { 
         if(val == Arr[i]) 
         { 
           a=acc+1; 
         } 
         return a; 
       }, 0); 
       map.set(`${Arr[i]}` , a); 
     } 
     let b = []; 
     map.forEach((value,key)=> 
     { 
     if(value>=1) 
     { 
       b.push(key + "" + value); 
     } 
      
     }); 
     return (b.join("")); 
 }; 
  console.log(Count_Occ("abcadeecfb"));