//login validations
function validateForm(){
  let x=document.forms["login-form"]["username"].value;
  let y=document.forms["login-form"]["password"].value;
  if (x==null || x==""){
    alert("Username must be filled out");
  }else if (y ==null || y.length !== 9){
    alert("Password must be 9 character");
    return false;
  } else {alert("You logger in");}
}


//alert health warning
function getItem(item){
  let value = item.value;

  if(value == "supersize"){
    alert("Mind your health!");
  }
}

//addBurger
function addBurger(){
  let x=document.forms["menu-form"]["myDropdownItems"].value;
  let price=0;
  let y=document.forms["menu-form"]["quantity"].value;
  if(x=="large"){ price=4;}
  if(x=="extralarge"){price=6;}
  if(x=="supersize"){price=10;}
  let result = price*y;

  document.getElementById("totalPrice").innerHTML=result;
}

//insert discount
function getDiscount(){
  let x=document.forms["discount-form"]["discount"].value;
  let discountPrice=document.getElementById("totalPrice").innerHTML;
  //let totalPrice = document.forms["discount-form"]["totalPrice"].value;
    if (x=="shillelagh"){
    discountPrice = discountPrice*0.9;
    alert("You got 10% of discount! Total price: " + discountPrice + "euro");
  } else {alert("Your discount code is incorrect")}
}



//confetti explosion under thw white rabbit
  $('.whiteBunny').on('click', () => {
     $('.show-discount').show();
 });

 $('.whiteBunny').on('click', () => {
   $('.whiteBunny').confettiButton();
});
