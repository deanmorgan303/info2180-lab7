window.onload=function(){ 
 var lookup=document.getElementById("lookup"); 
 let result=document.getElementById("result"); 
 
 var httpRequest= new XMLHttpRequest();
 var url = "https://lab-o7-deanmorgan303.c9users.io/world.php?q=";
    /*function doSomething() { 
        if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
                var response = httpRequest.responseText; 
                    result.innerHTML=response; 
                } 
                else{ 
                    alert('There was a problem with the request.'); 
                } 
        }
        
    }
 */
 
 lookup.onclick=function(){ 
     let tick=document.getElementById("tick") ;
     let place= document.getElementById("country");
     var search_value= place.value ;
     
     httpRequest.onreadystatechange = function(){
         if(httpRequest.readyState === XMLHttpRequest.DONE) { 
            if(httpRequest.status === 200) { 
                var response = httpRequest.responseText; 
                    result.innerHTML=response; 
                } 
                else{ 
                    alert('There was a problem with the request.'); 
                } 
        }
     }; 
     console.log(tick.value);
     
     if (tick.value == true){
     var nurl=url + search_value;
     httpRequest.open("get",nurl);
     httpRequest.send(); 
     result.innerHTML=httpRequest.responseText;
     
    } 
    else{  
        var surl ="https://lab-o7-deanmorgan303.c9users.io/world.php?all=true";
        httpRequest.open('get',surl); 
        httpRequest.send(); 
        result.innerHTML=httpRequest.responseText;
        
        
    }

 }
    
}