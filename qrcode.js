const input_val = document.getElementById('input_box');
const button = document.getElementById('mybtn');
const image_box =  document.getElementById('image_box')
 const qr_code =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
 button.addEventListener('click',()=>{
      if(input_val!=''){
           image_box.src = qr_code + input_val.value
      }
      else{
          button.classList.add('error')
      }
 })

 

   
  

 