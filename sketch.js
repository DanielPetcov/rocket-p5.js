let width = 1200;
let height = 700;
let download = 0;
// for background lines
function randomNum(){
    return (random(50, 180) | 0);
}

function backGroundWaves(user_color){
    //backround waves
    let p1 = randomNum();
    let p2 = randomNum();
    let p3 = randomNum();
    let p4 = randomNum();
    let p5 = randomNum();
    let p6 = randomNum();
    for(let i = 0; i < 200; i++){
        stroke(user_color);
        strokeWeight(20);

        noFill();
        beginShape();
        curveVertex(0, height-p1 + i);
        curveVertex(0, height-p1 + i);
        curveVertex(100, height-p2 + i);
        curveVertex(300, height-p3 + i);
        curveVertex(500, height-p4 + i);
        curveVertex(900, height-p5 + i);
        curveVertex(width, height-p6 + i);
        curveVertex(width, height-p6 + i);
        endShape();
    }
    noStroke();
}
function setup() {
    let cav = createCanvas(width, height);
    cav.parent("main");

    //background colors
    let color1 = color(59, 22, 96);
    let color2 = color(0);

    //background
    for(let i = 0; i < height; i++){
        let n = map(i, 0, height, 0, 1);
        let newcolor = lerpColor(color2, color1, n);
        stroke(newcolor);
        line(0, i, width, i);
    }

    //stars
    for(let i = 0; i < 100; i++){
        let x = random(width);
        let y = random(height);
        let diam = random(1, 10);
        let alphaNum = random(150, 240);
        noStroke();
        fill(255, 255, 255, alphaNum);
        circle(x, y, diam);
    }
    
    //background waves
    backGroundWaves(color(26, 82, 118));
    backGroundWaves(color( 40, 116, 166));
    download = 1;
}

function draw() {
    //mooon
    fill( 249, 231, 159 );
    circle(100, 100, 100);

    // uper cone
    fill(231, 76, 60);
    noStroke();
    beginShape();
    curveVertex(width/2 - 50, 180);
    curveVertex(width/2 - 50, 180);
    curveVertex(width/2 + 20, 60);
    curveVertex(width/2 + 90, 180);
    curveVertex(width/2 + 90, 180);
    endShape();
    noStroke();

    //wings
    fill(231, 76, 60);
    triangle(width/2 - 120, 350, width/2 + 20, 200, width/2 + 160, 350);
    
    //main body
    fill( 236, 240, 241 );
    rect(width/2 - 50, 180, 140, 200);
    noStroke();

    //**********flames*********//

    //flame 1
    strokeWeight(5);
    fill(247, 156, 47);
    beginShape();
    curveVertex(width/2 - 10, 390);
    curveVertex(width/2 - 10, 390);

    curveVertex(width/2 - 30, 450);
    curveVertex(width/2+20, 550);
    curveVertex(width/2 + 70, 450);

    curveVertex(width/2 + 50, 390);
    curveVertex(width/2 + 50, 390);
    endShape();
    noStroke();

    // flame 2
    strokeWeight(5);
    fill(250, 213, 95)
    beginShape();
    curveVertex(width/2, 390);
    curveVertex(width/2, 390);

    curveVertex(width/2 - 20, 450);
    curveVertex(width/2 + 20, 530);
    curveVertex(width/2 + 60, 450);

    curveVertex(width/2 + 40, 390);
    curveVertex(width/2 + 40, 390);
    endShape();
    noStroke();

    //flame 3
    strokeWeight(5);
    fill( 255, 244, 209 );
    beginShape();
    curveVertex(width/2 + 10, 390);
    curveVertex(width/2 + 10, 390);

    curveVertex(width/2 - 10, 450);
    curveVertex(width/2 + 20, 510);
    curveVertex(width/2 + 50, 450);

    curveVertex(width/2 + 30, 390);
    curveVertex(width/2 + 30, 390);

    endShape();
    //*********flames************/

    //bellow body
    fill( 123, 36, 28 );
    rect(width/2 - 50, 380, 140, 10, 0, 0, 10, 10);
    fill(231, 76, 60);
    rect(width/2 - 40, 390, 120, 5, 0, 0, 10, 10);    
    

    // window
    fill( 231, 76, 60);
    circle(width/2 + 20, 250, 100);
    
    fill(100, 149, 237);
    circle(width/2 + 20, 250, 80);
    
    stroke(255);
    strokeWeight(10);
    point(width/2-5, 240);
    strokeWeight(5);
    point(width/2+6, 230);
    point(width/2-10, 255);
    noStroke();

    // middle line
    fill(231, 76, 60);
    ellipse(width/2 + 20, 400, 20, 140);

    textSize(20);
    fill(255);
    text('Petcov Daniel, TI-233', width - 250, height - 20);
}   


//ellipse
//circle
//rect
//line
//point
//triangle