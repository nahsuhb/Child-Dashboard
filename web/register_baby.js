
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
            alert('ok')
            window.location.replace("view_child.html")
        }
    })
}



function plot_chart()
{
    let myChart = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor
    Chart.defaults.scale.ticks.beginAtZero=true;
    var a,b=undefined;
    /*eel.sex_ratio()(function(ret){
        a=ret[0];
        b=ret[1];
    })*/
    let piechart=new Chart(CHART,{
        type:'doughnut',
        data:{
            labels:['MALE','FEMALE'],
            datasets:[
                {
                    label:'SEX_RATIO',
                    backgroundColor:['#f1c40f','#e67e22'],
                    data:[1,2]
                }
            ]
    }})
}


