
function f1()
{
    var data={
        "name":document.getElementById("uname").value,
        "password":document.getElementById("password").value
    }
    if(data["name"]=='nurse' && data["password"]=='nurse@123')
    {
        eel.validate_nurse(data)
        window.location.replace("finalregst.html")
    }
    else
    {
        alert("INVALID USERNAME OR PASSWORD")
        window.location.replace("finalmini.html")
    }
}


