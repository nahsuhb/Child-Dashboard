function login()
{
    var data=document.getElementById("mcts-id").value;
    eel.validate_login(data)(function(ret)
    {
        if (ret==='NULL')
        {
            alert("REGISTER CHILD FIRST")
        }
        else
        {
            alert("ok")
            window.location.replace("view_child.html")
        }
    })
}

