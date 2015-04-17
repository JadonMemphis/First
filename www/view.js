
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

		var back = p.info.back = new createjs.Bitmap(preload.getResult("back"));
		//zog(back.getBounds());
		back.x = 0;
		back.y = 0;
		p.info.addChild(back);
		zim.scaleTo(back, stage, 100, 100, "both");

		var counter =p.info.counter = new createjs.Text();
		counter.x = stageW / 2;
		counter.y = 50;
		counter.id = counter;
		p.info.addChild(counter);
			
		var moonies = p.info.moonies = new createjs.Container();
		p.info.addChild(moonies);

		var moony;
		
		var total = 10;
		for(var i = 0; i<total; i++ ){
			moony = new jadon.Moon(45);
			moonies.addChild(moony);
		} 


		// keep at end of main function
		// for the fit scale mode you will probably need to code below
		// to scale things as the screen size varies	
			
		


		return p;
		
	}
	
	
	return app;
	
}(app || {});