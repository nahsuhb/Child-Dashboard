var electron=require('electron')
var child=require('./DATABASES/child_db')
var nurse=require('./DATABASES/nurse_db')
var{app,BrowserWindow}=electron;
var ipc=require('electron').ipcMain;
app.on('ready',function(){
	const mainWindow=new BrowserWindow({
	webPreferences:
	{
		nodeIntegration:true
	}
});
	mainWindow.loadURL(`file://${__dirname}/HTML/finalmini.html`);
	ipc.on("nurse_data",(event,args)=>{
		console.log(args);
		const set_nurse_details =new nurse({
            employee_id:args.uname,
			password:args.pass
		})
		callother(mainWindow)
	
	})
	function callother(mainWindow)
	{

		mainWindow.loadURL(`file://${__dirname}/HTML/finalregst.html`);
		if (child_details)
		{
	    	var set_child_details=new child
			({
					mcts_id_child:args.mcts_id,
					child_name:args.child_name,
					mothers_name:args.mothers_name,
					mcts_id_mother:args.mcts_mother,
					address:args.address,
					date_of_birth:args.place_of_birth,
					place_of_birth:args.place_of_birth,
					religion:args.religion

			})
		}

		
	}

 });