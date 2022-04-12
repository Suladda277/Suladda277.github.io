function userName(){
    var inputName = document.getElementById("Username");
    var textName = document.getElementById("text");
    out = inputName.value
    textName.innerHTML = out
    return out
}
function passWord(){
    var pass = document.getElementById("Password");
    var textName = document.getElementById("text");
    out = pass.value
    textName.innerHTML = out
}

function addname(name,bmi)
{
  name = name + bmi
  return name
}