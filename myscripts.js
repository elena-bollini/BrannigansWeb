//login validation
funcion validateForm(){
  let x=document.forms["login-form"]["username"].value;
  if (x==null || x==""){
    alert("Username must be filled out");
  } if (password ==null || password.length != 9){
    alert("Password must be 9 character")
  }
}


// select Burgers
function showBurgers() {
  var x = document.getElementById("myDropdownItems").value;
  document.getElementById("item").innerHTML = "You selected: " + x;
}

//alert health warning
function msgHealth() {
  alert("Mind your health!");
}

funcion totalPrice(burgerSize, quantity){
  burgerSize * quantity

}
