
// If the number is divisible by 3, print a "multiple of 3".
let number = 5;
if(number % 3 == 0)
{
  console.log("Multiple of 3")
}
else{
  console.log("not a multiple of 3")
}


// If a person is allowed to drive in India print "Apply for a license" or "NA".
let age = 25;
if(age>=18){
  console.log("Apply for a license")
}
else{
  console.log("NA")
}

// Given 2 numbers a and b print which is greater or "both equal".
let a = 4;
let b = 6;
if(a>b){
  console.log("a is greater than b")
}
else if(b>a){
  console.log("b is greater than b")
}
else{
  console.log("both are equal")
}

// Given stored username and password and input username and password, Print if the user can log in or not.
let credential_username = "Prachi"
let credential_password = "Mishra23"

let username = "Prachi"
let password = "mishra23"
if(credential_username == username)
{
  if(credential_password == password)
  {
    console.log("you can login")
  }
  else{
    console.log("Your password is not matching")
  }  
}
