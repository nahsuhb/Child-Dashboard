
function register_child()
{
    var data=
			{
                "mcts_id_child":document.getElementById("mcts").value,
                "child_name":document.getElementById("name").value,
                "sex":document.getElementById("sex").value,
                "mothers_name":document.getElementById("mother-name").value,
                "mcts_mother":document.getElementById("mcts_mother").value,
                "date_of_birth":document.getElementById("dob").value,
                "place_of_birth":document.getElementById("pob").value,
                "religion":document.getElementById("Religion").value

            }
    
    eel.validate_child(data)
}
function login(ret)
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
        alert('ok')
        window.location.replace("visuals.html")
    }
})
}




