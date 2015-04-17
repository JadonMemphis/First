var app = new function(app){

	app.makeHotSpots = function(assets, pages, preload){
		zog("hotspots");
		var hs = new zim.HotSpots([
			{page:assets.main, rect:assets.main.button, call:function(){
				zog("we here");
				pages.go(assets.info, "right");

				createjs.Ticker.addEventListener("tick",updateGame);
				createjs.Ticker.setFPS(30);



			}},
			{page:assets.main, rect:[0,0,260,260], call:function(){pages.go(assets.info, "right");}}
		]);
		var finished = false;
		var destroyed = 0;
		var total = assets.info.moonies.numChildren;
		assets.info.moonies.on("click", function(e){
			var blowUp = new jadon.Blow(assets.info.moonies, e.target, preload.getResult("explode"));
			destroyed++;
	
			if (destroyed >= total) {
				gameOver("success");
			}
		});
		
		var t = 0;
		

		function updateGame(){
			if (!finished) {
				if (assets.info.counter .text >= 60) {
					gameOver("fail");
				}
				t++;
				assets.info.counter.text = Math.floor(t/30);
			}
			stage.update();
		}

		function gameOver(status){
			finished = true;
			//createjs.Ticker.removeEventListener("tick",updateGame);
			if(status == "fail"){
				console.log("you failed, you missed " + (total - destroyed + " moons"));
			} else if( status == "success"){
				console.log("Congrats you finished in " + assets.info.counter.text + "s.");
			}
		}

		
	}
	return app;
}(app||{});