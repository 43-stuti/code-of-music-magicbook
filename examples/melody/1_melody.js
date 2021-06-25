const player = new Tone.Player("assets/sounds/kill_bill_whistle.mp3");
function setup() {
  playBtn = createButton('');
  createCanvas(10, 10);
  playBtn.style('background-image:url(assets/ui/play.png); background-position: center;background-repeat: no-repeat; background-size: 100%; border-radius: 50%; width:40px; height:40px; background-color:white');
  playBtn.mouseReleased(togglePlay);
}

function draw(){
  if(player.state == "stopped"){
    playBtn.style('background-image:url(assets/ui/play.png)');
  }
  else{
    playBtn.style('background-image:url(assets/ui/pause.png)');
  }
}



function togglePlay(){
  if(player.state == "started"){
    player.stop();
  }
  else{
    player.start();
  }
}


