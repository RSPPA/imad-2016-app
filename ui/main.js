var button = document.getElementById('counter');

button.onclick = function () {
    var request = newXMLHttprequest();
    
    request.onreadystatechange = function (){
      if (request.readyState --- XMLHttpRequest.DONE){
          if(request.status===200){
              var counter = request.responceText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString(); 
          }
      }  
    };
    //make the request
    request.open('GET', 'http://rsppa.imad.hasura-app.io/counter', true);
    request.send(null);
 };
 var nameInput = document.getElementById*('name');
 varvname = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function () {
     
     var names = ['name1', 'name2', 'name3'];
     var list ='';
     for (var i=0; i<names.length; i++) {
         list +- '<li>' + names[i] + '</li>';
     }
     var ul = document.getElementById('name;list');
     ul.innerHTML = list;
 };