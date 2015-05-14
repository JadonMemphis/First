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
			zog(finished, t);
			if (!finished) {
				//if (assets.info.counter.text >= 10) {
					//gameOver("fail");

				//}
				t++;
				assets.info.counter.text = Math.floor(t/30);
				if(t>=300){
					gameOver("fail");

				}
			}
			stage.update();
		}

		function gameOver(status){


			finished = true;
			createjs.Ticker.removeEventListener("tick",updateGame); // I think you want to stop the ticker here
			
			var message;
			
			if(status == "fail"){
				console.log("you failed, you missed " + (total - destroyed + " moons"));
				message = "You failed";

				//var tell = document.getElementById("elapse");
				//tell.innerHTML("you failed, you missed " + (total - destroyed + " moons"));

			} else if( status == "success"){
				console.log("Congrats you finished in " + assets.info.counter.text + "s.");
				message = "You made it";
			}
			
			var pane = new zim.Pane(stage, 300, 200, message);
			pane.show();
			pane.on("hide", function(){
				
				// you need to remake your assets
				// so perhaps in your view.js you could have a function called remakeMoonies
				// app.remakeMoonies = function() {blah blah}
				// then you can call that function like so from here in controller.js:
				
				// app.remakeMoonies();
				
				// now you will have moonies and you need to reset things here:
				
				total = assets.info.moonies.numChildren;
				finished = false;
				destroyed = 0;
				t = 0;
				assets.info.counter.text = "0";
				// I think that is all to restart - but I may have missed something
				
				
				createjs.Ticker.addEventListener("tick",updateGame);
				
						   
			});	
		
		}

		
	}
	return app;
}(app||{});
