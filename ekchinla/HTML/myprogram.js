
function f1()
{
  import {ipcRenderer} from "electron";
  var ipc=ipcRenderer;
  if (document.getElementById('name').value==='nurse' && document.getElementById("password").value==='nurse@123')
  {
    alert("Login Successful")
    data={
        
        "name":document.getElementById('name').value,
        "password":document.getElementById('password').value
      }
    ipc.send("nurse_data",data)
  } 

  else if(document.getElementById('name').value==='' && document.getElementById("password").value==='')
  {
    alert("Enter the name and password")
  }
  else if(document.getElementById('name').value===''|| document.getElementById("password").value==='')
  {
    if (document.getElementById('name').value==='')
    {
      alert("Enter the name")
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
