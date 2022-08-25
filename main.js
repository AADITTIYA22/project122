x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";

draw_apple = "";
speak_data = "";
to_number = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
 
if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    document.getElementById("status").innerHTML = "Started Drawing Apple"; 
    draw_apple = "set";
 }
else{ 
    document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
}
}

function preload(){
    apple = loadImage("apple.png");
    
}

function setup() {
 
 canvas = createCanvas(800,500);

}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
        x = Math.floor(Math.random()*750);
        y = Math.floor(Math.random()*500-50);
        image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
    console.log("sss");

  }
}

function speak(){
  speak_data = to_number+"Apples drawn";
    var synth = window.speechSynthesis;
    speak_data = to_number+"Apples drawn";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}