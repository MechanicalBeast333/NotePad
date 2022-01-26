let checkedt=document.getElementById('feature-flag');
   let text=document.getElementById('textarea');
   if(localStorage.getItem('autosave-data')){
     text.value=localStorage.getItem('autosave-data');
   }
   function update(){
     setInterval(()=>{
       let textvalue=text.value;
       if(checkedt.checked){
         localStorage.setItem('autosave-data',textvalue);
       }
     },1000)
   }
   update();