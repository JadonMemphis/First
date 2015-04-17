
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager, preload) {
		
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);		
		
		var introBack = new zim.Rectangle(stageW, stageH, "white");
		p.main.addChild(introBack);

		
		var button = p.main.button = new zim.Button(120,60,"Enter");
		zim.centerReg(button);
		button.x = stageW/2;
		button.y = stageH/2;
		//button.on("click", function() {

		//});
		p.main.addChild(button);
		
		/*gridManager.add( new zim.Grid(content) );
		guideManager.add( new zim.Guide(content) );
		
		
		
		var mainParts =[ {object:logo, marginTop:0, maxWidth:100, height:10, align:"left", valign:"top"},
							{object:content, marginTop:0, maxWidth:100, backgroundColor:"yellow"}, 
							{object:related, marginTop:10, maxWidth:100, height:10, backgroundColor:"red"} ];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, null, true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		*/
		
		
		
		p.info = new createjs.Container();		
		p.info.name = "info";
		p.info.setBounds(0,0,stageW,stageH);

		var back = new createjs.Bitmap(preload.getResult("back"));
		//zog(back.getBounds());
		back.x = 0;
		back.y = 0;
		p.info.addChild(back);
		zim.scaleTo(back, stage, 100, 100, "both");

		var counter = new createjs.Text("0", "16px Arial", "black");
		counter.x = stageW / 2;
		counter.y = 50;
		p.info.addChild(counter);
			
		var moonies = p.info.moonies = new createjs.Container();
		p.info.addChild(moonies);

		var moony;
		var destroyed = 0;
		var total = 10;
		var finished = false;
		for(var i = 0; i<total; i++ ){
			moony = new jadon.Moon(45);
			moony.on("click", function(){
				var blowUp = new jadon.Blow(moonies, this, preload.getResult("explode"));
				destroyed++;
		
				if (destroyed >= total) {
					gameOver("success");
				}
			});
			moonies.addChild(moony);
		} 

		var t = 0;
		createjs.Ticker.addEventListener("tick",updateGame);
		createjs.Ticker.setFPS(30);

		function updateGame(){
			if (!finished) {
				if (counter.text >= 60) {
					gameOver("fail");
				}
				t++;
				counter.text = Math.floor(t/30);
			}
			
			
			stage.update();
		}
		
		// keep at end of main function
		// for the fit scale mode you will probably need to code below
		// to scale things as the screen size varies	
			
		function gameOver(status){
			finished = true;
			//createjs.Ticker.removeEventListener("tick",updateGame);
			if(status == "fail"){
				console.log("you failed, you missed " + (total - destroyed + " moons"));
			} else if( status == "success"){
				console.log("Congrats you finished in " + counter.text + "s.");
			}
		}



		return p;
		
	}
	
	
	return app;
	
}(app || {});