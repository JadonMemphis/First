

// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		var backp = p.main.backp = new createjs.Bitmap("back.png");
		p.main.addChild(backp);

		
		var logo = new zim.Rectangle(320, 100, "orange");	
		logo.setBounds(100,100,100,100);
		p.main.addChild(logo);
		
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);
		//var thing = p.mainThing = new jadon.Blow(content, this);
		var thing = new createjs.Bitmap("chewing.png")
		thing.x = 100;
		thing.y = 100;		
		content.addChild(thing);

	

		p.main.addChild(content);


		
		var related = new zim.Rectangle(500, 200, "pink");	
		related.setBounds(0,0,500,200);
		p.main.addChild(related);
		
		
		gridManager.add( new zim.Grid(content) );
		guideManager.add( new zim.Guide(content) );
		
		zog(layoutManager);
		
		var mainParts =[ {object:logo, marginTop:10, maxWidth:80, minHeight:20, align:"left", valign:"top"},
							{object:content, marginTop:5, maxWidth:90, backgroundColor:"yellow"}, 
							{object:related, marginTop:5, maxWidth:80, height:20, backgroundColor:"red"} ];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		
		
		
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "yellow");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
				
		return p;
		
	}
	
	
	return app;
	
}(app || {});
