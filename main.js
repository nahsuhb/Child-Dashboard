
function f1()
{
    if (document.getElementById('uname').value==='nurse' && document.getElementById("password").value==='nurse@123')
  {
    alert("Login Successful")
    eel.validate_nurse("ok")

  } 

  else if(document.getElementById('uname').value==='' && document.getElementById("password").value==='')
  {
    alert("Enter the uname and password")
  }
  else if(document.getElementById('uname').value===''|| document.getElementById("password").value==='')
  {
    if (document.getElementById('uname').value==='')
    {
      alert("Enter the uname")
    }
    else
    {
      alert("Enter the password")
    }
  }

  else
  {
      alert("INVALID USERNAME AND PASSWORD");
  
  }
}
