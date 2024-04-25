class Button {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  } 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(224, 111, 221);
    } else {
      fill(50);
    }
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

let sentence, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence10, sentence11, sentence12, sentence13, sentence14, sentence15, sentence16, sentence17, sentence18, sentence19, sentence20, sentence21, sentence22, sentence23, sentence24, sentence25, sentence26, sentence27, sentence28;

let button, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19, button20, button21, button22, button23, button24, button25, button26, button27, button28;

const audioArray = ["1.wav", "2.wav", "3.wav", "4.wav", "5.wav", "6.wav", "7.wav", "8.wav", "9.wav", "10.wav", "11.wav", "12.wav", "13.wav", "14.wav", "15.wav", "16.wav", "17.wav", "18.wav", "19.wav", "20.wav", "21.wav", "22.wav", "23.wav", "24.wav", "25.wav", "26.wav", "27.wav", "28.wav"];

function setup() {

  createCanvas(windowWidth, windowHeight);
  sentence = loadSound('1.wav');
  sentence2 = loadSound('2.wav');
  sentence3 = loadSound('3.wav');
  sentence4 = loadSound('4.wav');
  sentence5 = loadSound('5.wav');
  sentence6 = loadSound('6.wav');
  sentence7 = loadSound('7.wav');
  sentence8 = loadSound('8.wav');
  sentence9 = loadSound('9.wav');
  sentence10 = loadSound('10.wav');
  sentence11 = loadSound('11.wav');
  sentence12 = loadSound('12.wav');
  sentence13 = loadSound('13.wav');
  sentence14 = loadSound('14.wav');
  sentence15 = loadSound('15.wav');
  sentence16 = loadSound('16.wav');
  sentence17 = loadSound('17.wav');
  sentence18 = loadSound('18.wav');
  sentence19 = loadSound('19.wav');
  sentence20 = loadSound('20.wav');
  sentence21 = loadSound('21.wav');
  sentence22 = loadSound('22.wav');
  sentence23 = loadSound('23.wav');
  sentence24 = loadSound('24.wav');
  sentence25 = loadSound('25.wav');
  sentence26 = loadSound('26.wav');
  sentence27 = loadSound('27.wav');
  sentence28 = loadSound('28.wav');
  
 
  button = new Button(350, 350, 300);

}
 
function draw() { 
  background(0);
  button.display(mouseX, mouseY);
  
  textSize(30);
  fill('white');
  noStroke();
  text('Tell me a story', 250, 350);
  textSize(20);
  text('          click here', 250, 380);
  

}

function mousePressed() {

  if (button.contains(mouseX, mouseY)) {
    const audioIndex = Math.floor(Math.random() * audioArray.length);
  const audio = new Audio(audioArray[audioIndex]);
  audio.play();
  }

} 
