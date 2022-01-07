document.querySelector('#diet').addEventListener('change', function(){
    if (this.checked){
        document.querySelector('.desDiet').style.display = 'block';
    }else {
        document.querySelector('.desDiet').style.display = 'none';
        document.querySelector('.desDiet').value = '';
    }
});
document.querySelector('input[type="radio"]').addEventListener('change', function(){
    if (document.querySelector('#title_4').checked){
        document.querySelector('.desTerrirotial').style.display = 'block';
    }else {
        document.querySelector('.desTerrirotial').style.display = 'none';
        document.querySelector('.desTerrirotial').value = '';
    }
});
document.querySelector('#name').addEventListener('blur',function(){
    if(this.value !== ""){
      nameError.textContent = "";
    }
  });
  document.querySelector('#emergencyName').addEventListener('blur',function(){
    if(this.value !== ""){
        emergencyNameError.textContent = "";
    }
  });
  document.querySelector('#owerName').addEventListener('blur',function(){
    if(this.value !== ""){
        owerNameError.textContent = "";
    }
  });
  document.querySelector('#contactPhone').addEventListener('blur',function(){
    if(this.value !== ""){
        contactPhoneError.textContent = "";
    }
  });
  document.querySelector('#cellPhone').addEventListener('blur',function(){
    if(this.value !== ""){
        cellPhoneError.textContent = "";
    }
  });
  document.querySelector('#daytimePhone').addEventListener('blur',function(){
    if(this.value !== ""){
        cellPhoneError.textContent = "";
    }
  });
  document.registration.addEventListener("submit",function(event){
       
   if(validate()){
    registration.submit();
   }else{
    event.preventDefault();
   }
  } );
  

function timeConvert(time){
    if ((time.substr((time.length-2)) == 'AM')||(time.substr(0,1) == '12')){
        return time.substr(0,(time.length-2));
    }else {
        return str(int(time.substr(0,1))+12)+time.substr(2,(time.length-2));
    }
}
function phoneNumberTest(phoneNo)
{
  var phone = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if(phoneNo.match(phone)){
      return true;
    } else{
        return false;
        }
}
function validate(){
    var validate = true;
    if ((document.querySelector('#timeArrive').value != '')&&(document.querySelector('#timeLeave').value != '')){
        if (new Date ('1/1/1999 '+timeConvert(document.querySelector('#timeArrive').value))>=new Date ('1/1/1999 '+timeConvert(document.querySelector('#timeLeave').value))){
            document.querySelector("#timeError").textContent='leave time must be later than arrive time!'
            validate = false;
        }
    }
    
    if (document.querySelector('#daytimePhone').value == ''&& document.querySelector('#cellPhone').value == '' ){
        document.querySelector("#cellPhoneError").textContent='day time phone and cell phone can be empty at the same time';
        validate = false;
    }

    if (!phoneNumberTest(document.querySelector('#daytimePhone').value)&& document.querySelector('#daytimePhone').value!='') {
        document.querySelector("#daytimePhoneError").textContent='phone number must be 10 digits';
        validate = false;
    }

    if (!phoneNumberTest(document.querySelector('#cellPhone').value)&& document.querySelector('#cellPhone').value!='') {
        document.querySelector("#cellPhoneError").textContent='phone number must be 10 digits';
        validate = false;
    }

    if (!phoneNumberTest(document.querySelector('#contactPhone').value)&&document.querySelector('#contactPhone').value!='') {
        document.querySelector("#contactPhoneError").textContent='phone number must be 10 digits';
        validate = false;
    }

    if (registration.name.value===""){
        document.querySelector("#nameError").textContent="Please enter a name";
        valid = false;
    }
    if (registration.emergencyName.value===""){
        document.querySelector("#emergencyNameError").textContent="Please enter a Emergency name";
        valid = false;
    }
    if (registration.owerName.value===""){
        document.querySelector("#owerNameError").textContent="Please enter a owner name";
        valid = false;
    }
    if (registration.contactPhone.value===""){
        document.querySelector("#contactPhoneError").textContent="Please enter a contact phone number";
        valid = false;
    }
    return validate;
} 