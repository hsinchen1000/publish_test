//FIND
let canvasX ;
let canvasY ;
let pageState= 0; //0-動畫開頭,1-選擇首頁,3-拼圖創造區
let lastState=0;
let lastbrickState=0;
let p1brickSelect;
let enlargeVal=1.2
//
let mus_1,mus_2, mus_3;
let canvasScale=16/8;
//
//page01
let main ;
let mainCenter;
let pageMainY;
let page01edgeX,page01edgeY;
let button,button2;
let page01btnColor,page02btnColor,page03btnColor;
let page01btnX=100;
let page01btnY=25;
let logoimg;
let p1brickImg=[];
let p1brickArrL;
let btnTextSize='15px';

//p1 img location [img,x1,x2,y1,y2,p2img]
let p1brickLocate0=[];let p1brickLocate1=[];let p1brickLocate2=[]; let p1brickLocate3=[];
let p1brickLocate4=[];let p1brickLocate5=[];let p1brickLocate6=[]; let p1brickLocate7=[];
let p1brickLocate8=[];let p1brickLocate9=[];let p1brickLocate10=[];let p1brickLocate11=[];

let title1,title2;

//page02
let p2_img;
let p2_0_img,p2_1_img,p2_2_img,p2_3_img,p2_4_img,p2_5_img,p2_6_img,p2_7_img,p2_8_img,p2_9_img,p2_10_img,p2_11_img;
let p2_planBtn;

//page03
let startBrick=[];
let start2Brick=[];
let start3Brick=[];

let planA111_img,planA112_img,planA113_img;
let planA121_img,planA122_img,planA123_img;
let planA211_img,planA212_img,planA213_img;
let planA2111_img,planA2121_img,planA2131_img;
let planA221_img,planA222_img,planA223_img;
let planA311_img,planA312_img,planA313_img;
let planA321_img,planA322_img,planA323_img;

let toolBrick1=[];
let toolBrick2=[];
let toolBrick3=[];

let planA131_img,planA132_img,planA133_img;
let planA134_img,planA135_img,planA136_img;
let planA137_img,planA138_img,planA139_img;
let planA1310_img,plan1311_img,plan1312_img;

let planA231_img,planA232_img,planA233_img;
let planA234_img,planA235_img,planA236_img;
let planA237_img,planA238_img,planA239_img;
let planA2310_img,plan2311_img,plan2312_img;

let planA241_img,planA242_img,planA243_img;
let planA244_img,planA245_img,planA246_img;
let planA247_img,planA248_img,planA249_img;
let planA2410_img,plan2411_img,plan2412_img;

let ex1_img,ex2_img,ex3_img,ex4_img;
let p2_yellow,p2_blue,p2_01;

let moreIcon;
let exPageState=0;
let exPuzzle,exPuzzle2;
let tvid;
let x_img;
let showExample_img;
let p2ExBrick_img,p2ExBrick2_img;

function preload() {
  
  x_img = loadImage('example/x.png');
  showExample_img= loadImage('example/showExample.png'); //一鍵教案
  p2ExBrick_img= loadImage('example/p2StartBrick.png');
  p2ExBrick2_img= loadImage('example/p2StartBrick2.png');
  
  title1 = loadImage('Page01/title/1-11.png');
  title2 = loadImage('Page01/title/1-12.png');
  //P1
  logoimg = loadImage('Page01/logo-07.png');
  moreIcon= loadImage('example/more.png');

  //P2
  p2_yellow=loadImage('Page02/p2-y6.png');
  p2_blue=loadImage('Page02/p2-b.jpg');
  p2_01=loadImage('Page02/p2-4.jpg');//3D列印說明
  p2_02=loadImage('Page02/p2-2.jpg');//視覺辨識說明
  
  exPuzzle=loadImage('example/exPuzzle.png');//3D列印
  exPuzzle2=loadImage('example/exPuzzle2.png');//視覺辨識
  //P3
  
  //brick_1-1 箭頭_觀察主題
  planA111_img = loadImage('Page03/A-1-1-1.png'); 
  planA112_img = loadImage('Page03/A-1-1-2.png');
  planA113_img = loadImage('Page03/A-1-1-3.png');
  
  //brick_1-2 雲朵_觀察內容
  planA121_img = loadImage('Page03/A-1-2-1.png');
  planA122_img = loadImage('Page03/A-1-2-2.png');
  planA123_img = loadImage('Page03/A-1-2-3.png');
  
  //brick_2-1 L型_實作主題
  planA211_img = loadImage('Page03/A-2-1-1.png'); 
  planA212_img = loadImage('Page03/A-2-1-2.png');
  planA213_img = loadImage('Page03/A-2-1-3.png');
  //
  planA2111_img = loadImage('Page03/A-2-1-1-1.png');
  planA2121_img = loadImage('Page03/A-2-1-2-1.png');
  planA2131_img = loadImage('Page03/A-2-1-3-1.png');
  
  //brick_2-2 長方_實作內容
  planA221_img = loadImage('Page03/A-2-2-1.png');
  planA222_img = loadImage('Page03/A-2-2-2.png');
  planA223_img = loadImage('Page03/A-2-2-3.png');
  
  //brick_3-1 橢圓_發表內容
  planA311_img = loadImage('Page03/A-3-1-1.png');
  planA312_img = loadImage('Page03/A-3-1-2.png');
  planA313_img = loadImage('Page03/A-3-1-3.png');
  
  //brick_3-2 尾巴_發表內容
  planA321_img = loadImage('Page03/A-3-2-1.png');
  planA322_img = loadImage('Page03/A-3-2-2.png');
  planA323_img = loadImage('Page03/A-3-2-3.png');
  
  //小拼圖
  //brick_1-3 花瓣
  planA131_img = loadImage('Page03/A-1-3-1.png');
  planA132_img = loadImage('Page03/A-1-3-2.png');
  planA133_img = loadImage('Page03/A-1-3-3.png');
  
  planA134_img = loadImage('Page03/A-1-3-4.png');
  planA135_img = loadImage('Page03/A-1-3-5.png');
  planA136_img = loadImage('Page03/A-1-3-6.png');
  planA137_img = loadImage('Page03/A-1-3-7.png');
  planA138_img = loadImage('Page03/A-1-3-8.png');
  planA139_img = loadImage('Page03/A-1-3-9.png');
  
  planA1310_img = loadImage('Page03/A-1-3-Y.png');
  planA1311_img = loadImage('Page03/A-1-3-B.png');
  planA1312_img = loadImage('Page03/A-1-3-G.png');
  
  //brick_2-3 對話框
  planA231_img = loadImage('Page03/A-2-3-1.png');
  planA232_img = loadImage('Page03/A-2-3-2.png');
  planA233_img = loadImage('Page03/A-2-3-3.png');
  planA234_img = loadImage('Page03/A-2-3-4.png');
  
  planA235_img = loadImage('Page03/A-2-3-5.png');
  planA236_img = loadImage('Page03/A-2-3-6.png');
  planA237_img = loadImage('Page03/A-2-3-7.png');
  planA238_img = loadImage('Page03/A-2-3-8.png');
  //
  planA239_img = loadImage('Page03/A-2-3-1.png');
  planA2310_img = loadImage('Page03/A-2-3-2.png');
  planA2311_img = loadImage('Page03/A-2-3-3.png');
  planA2312_img = loadImage('Page03/A-2-3-4.png');

  //brick_2-4 小小工具
  planA241_img = loadImage('Page03/A-2-4-1.png');
  planA242_img = loadImage('Page03/A-2-4-2.png');
  planA243_img = loadImage('Page03/A-2-4-3.png');
  planA244_img = loadImage('Page03/A-2-4-4.png');
  
  planA245_img = loadImage('Page03/A-2-4-5.png');
  planA246_img = loadImage('Page03/A-2-4-6.png');
  planA247_img = loadImage('Page03/A-2-4-7.png');
  planA248_img = loadImage('Page03/A-2-4-8.png'); 
  //
  planA249_img = loadImage('Page03/A-2-4-1.png');
  planA2410_img = loadImage('Page03/A-2-4-2.png');
  planA2411_img = loadImage('Page03/A-2-4-3.png');
  planA2412_img = loadImage('Page03/A-2-4-4.png');
  
  //範例拼圖
  ex1_img = loadImage('example/ex1.png');
  ex2_img = loadImage('example/ex2.png');
  ex3_img = loadImage('example/ex2.png');
  ex4_img = loadImage('example/share.png');
  
  mus_1= loadSound('MUSIC/M0002.mp3');//1
  mus_2= loadSound('MUSIC/M0001.mp3');//2
  mus_3= loadSound('MUSIC/M0003.m4a');
    
}

function setup() {
  
  canvasY = windowHeight;
  canvasX= canvasY*canvasScale;
  //page01mainSteup();
  //page01brickSetup();
  logoVidX = canvasX;
  logoVidY = canvasX*0.4 ;

  //
  startBrick[0] = planA111_img;
  startBrick[1] = planA112_img;
  startBrick[2] = planA113_img;
  startBrick[3] = planA121_img;
  startBrick[4] = planA122_img;
  startBrick[5] = planA123_img;
  //
  start2Brick[0] = planA211_img;
  start2Brick[1] = planA212_img;
  start2Brick[2] = planA213_img;
  start2Brick[3] = planA221_img;
  start2Brick[4] = planA222_img;
  start2Brick[5] = planA223_img;
  //
  start3Brick[0] = planA311_img;
  start3Brick[1] = planA312_img;
  start3Brick[2] = planA313_img;
  start3Brick[3] = planA321_img;
  start3Brick[4] = planA322_img;
  start3Brick[5] = planA323_img;
  //
  toolBrick1[0] = planA131_img;toolBrick1[1] = planA132_img;
  toolBrick1[2] = planA133_img;toolBrick1[3] = planA134_img;
  toolBrick1[4] = planA135_img;toolBrick1[5] = planA136_img;
  toolBrick1[6] = planA137_img;toolBrick1[7] = planA138_img;
  toolBrick1[8] = planA139_img;toolBrick1[9] = planA1310_img;
  toolBrick1[10] = planA1311_img;toolBrick1[11] = planA1312_img;
  //
  toolBrick2[0] = planA231_img;toolBrick2[1] = planA232_img;
  toolBrick2[2] = planA233_img;toolBrick2[3] = planA234_img;
  toolBrick2[4] = planA235_img;toolBrick2[5] = planA236_img;
  toolBrick2[6] = planA237_img;toolBrick2[7] = planA238_img;
  toolBrick2[8] = planA239_img;toolBrick2[9] = planA2310_img;
  toolBrick2[10] = planA2311_img;toolBrick2[11] = planA2312_img;
  //
  toolBrick3[0] = planA241_img;toolBrick3[1] = planA242_img;
  toolBrick3[2] = planA243_img;toolBrick3[3] = planA244_img;
  toolBrick3[4] = planA245_img;toolBrick3[5] = planA246_img;
  toolBrick3[6] = planA247_img;toolBrick3[7] = planA248_img;
  toolBrick3[8] = planA249_img;toolBrick3[9] = planA2410_img;
  toolBrick3[10] = planA2411_img;toolBrick3[11] = planA2412_img;
  
   
  createCanvas(canvasX, canvasY);
  background(255);
  //vid.volume(1);
  vid = createVideo("mp4/logo2.mp4");
  vid.position(0,canvasY*0.15);
  vid.size(logoVidX,logoVidY);
  vid.size(logoVidX,logoVidY);
  vid.volume(0);
  vid.play();

}

let vid;
let vid_count=0;
let vid_state=0;
let logoVidX;
let logoVidY;
let titleArea1=[];//[x1,x2,y1,y2]
let titleArea2=[];//[x1,x2,y1,y2]
let soundcount=0;

function replayLogo(){
  //vid.volume(0);
  removeElements();
  noStroke();
  fill(255);
  rect(0,0,canvasX,canvasY);
  if(pageState==3){
    
    vid = createVideo("mp4/teach.mp4");//介面說明
    vid.position(0,0);
    vid.size(canvasX,canvasY);
    //vid.volume(0);
    vid.loop();
    pageState=3.5;

  }else{
    vid = createVideo("mp4/logo2.mp4");//開頭動畫
    pageState=0;
    vid_count=0;
    vid.position(0,canvasY*0.15);
    vid.size(logoVidX,logoVidY);
    //vid.volume(0);
    vid.play();
  }
  
  
}

function draw() {
  
  if(pageState == 0.5){
    
    soundcount++;
      if(soundcount>15){
         vid.volume(1);
          if( !mus_1.isPlaying() && !mus_2.isPlaying() ){     
            mus_3.play();
            pageState=1;
            
          }
      }else if(soundcount<15){
          removeElements();
       }
      if(soundcount>40){

        //vid.volume(0);
        pageState=1;
        soundcount=0;
      }       
  }
  
 
  if(vid_count>=305 && pageState==0){
    pageState=0.5;
    vid_count=0;
    removeElements();
    
  }else if (vid_count<305 && pageState==0){
    vid_count++;
  }

  
     
  
  switch (pageState) {
    
     
    case 1:
          
      removeElements();
      page01mainSteup();
      page01();
      //page01brick()
      //page01brikeClick();
      titleSetup();
      titleClick();
      break;
     
    case 2: 
      removeElements();
      background(100);
      page02();
      
      break;

      
    case 3: 
      
      removeElements();
      background(240);
      vid.volume(1);
      page03mainBlock();
      page03step1Block();
      //p3textArea();
      
      page03();
      p3DrawPuzzle();
      p3textArea_2();
      
      //teachVidPlay();
      break;
      
    case 3.5: 
      
      //removeElements();
      //background(240);
      //vid.volume(0);
      image(x_img,canvasX*0.95,canvasY*0.02,canvasY*0.05,canvasY*0.05);
      if(mouseX>=canvasX*0.95 && mouseX<=x_img,canvasX*0.95+canvasY*0.05 && mouseY>=canvasY*0.02 && mouseY<=canvasY*0.02+canvasY*0.05){
        if(mouseIsPressed==true){
           print("3.5");
           removeElements();
           pageState=3;
           
           }
         
      }
      break;     
      
  }     
  
           
  
}
/*
let tvidX,tvidY;
function teachVidPlay(){
  tvidX =canvasX*0.8;
  tvidY =canvasY*0.8;
  //removeElements();
  tvid = createVideo("mp4/teach.mp4");
  tvid.position((canvasX-tvidX)/2,(canvasY-tvidY)/2);
  tvid.size(tvidX,tvidY);
  tvid.volume(0);
  tvid.loop();
  
}
*/
let titleSelectB=1;
let titleSelectY=1;
let titleX;
let titleY;

function titleSetup(){
  
  imageMode(CENTER);
  titleX=canvasX*0.45;
  titleY=canvasX*0.45*0.7135;
  image(title2,canvasX/2+titleX*0.192,canvasY*0.55,titleX*titleSelectY,titleY*titleSelectY);
  image(title1,canvasX/2-titleX*0.192,canvasY*0.55,titleX*titleSelectB,titleY*titleSelectB);
  
  titleArea1[0]=(canvasX/2)-titleX*0.5;
  titleArea1[1]=(canvasX/2);
  titleArea1[2]=canvasY*0.55-titleY*0.4;
  titleArea1[3]=canvasY*0.55+titleY*0.4;
  
  titleArea2[0]=(canvasX/2);
  titleArea2[1]=(canvasX/2)+titleX*0.45;
  titleArea2[2]=canvasY*0.55-titleY*0.4;
  titleArea2[3]=canvasY*0.55+titleY*0.4;
  
  imageMode(CORNER);
}

let p2_all;

function titleClick(){
  
  // for(let i =0;i<4;i++){
  //   print(titleArea1[i]);
  // }
  // for(let i =0;i<4;i++){
  //   print(titleArea2[i]);
  // }
  
  if(mouseX >= titleArea1[0] && mouseX <= titleArea1[1] && mouseY >= titleArea1[2] && mouseY <= titleArea1[3]){
    titleSelectB=1.05;
    
    if(mouseIsPressed==true){
       if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
       p2_all=p2_blue;
       pageState=2;
       exPageState=0;
    }
     //print("L");
     
  }else{
    titleSelectB=1;
  }
  if(mouseX >= titleArea2[0] && mouseX <= titleArea2[1] && mouseY >= titleArea2[2] && mouseY <= titleArea2[3]){
     //print("R");
     
     titleSelectY=1.05;
     if(mouseIsPressed==true){
       if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
       p2_all=p2_yellow;
       pageState=2;
       exPageState=0;
    }
  }else{
    titleSelectY=1;
  }
  
  
}

//粉色區塊背景+按鈕
function page01mainSteup(){
  
  background(255);
  //page01 color + logo + button
  //main = color('#F8E1D7');
  main = color('#E1DBD7');
  
  mainCenter = color('#FFFFFF');
  pageMainY=canvasY*0.2; //紅框Y
  page01edgeX=canvasX*0.05; //拼圖X
  page01edgeY=canvasY*0.05;  //拼圖Y
  
  setGradient(0, 0, canvasX*0.5, pageMainY, main, mainCenter,X_AXIS);
  setGradient(canvasX*0.5, 0, canvasX*0.5, pageMainY, mainCenter, main,X_AXIS);
  
  button = createButton('開始拼拼圖');
  button.size(page01btnX, page01btnY);
  button.position(canvasX*0.98-page01btnX, canvasY*0.14);
  page01btnColor=color('#FFFFFF');
  button.style('background-color', page01btnColor);
  button.style("color", "#3E0015");
  button.style('font-size', btnTextSize);
  button.mousePressed(p1changeTo3);
  
  p2_planBtn= createButton('開頭動畫');
  p2_planBtn.size(page01btnX, page01btnY);
  p2_planBtn.position(canvasX*0.98-page01btnX, canvasY*0.085);
  page03btnColor=color('#EBEBEB');
  p2_planBtn.style('background-color', page03btnColor);
  p2_planBtn.style("color", "#3E0015");
  p2_planBtn.style('font-size', btnTextSize);
  p2_planBtn.mousePressed(replayLogo);
  
  
}

//顏色說明文字+logo
function page01(){
   
  let circleSpace=63;
  let circleR = 18;
  let circleStroke=2;
  let circleTextSize=15;
  textSize(circleTextSize);

  textAlign(LEFT,CENTER); 
  strokeWeight(circleStroke);
  fill('#FF9800');
  stroke('#FF5722');
  //ellipse(pageMainY-pageMainY*0.80, pageMainY*0.85,circleR);
  noStroke();
  fill(0);
  //text('身體', pageMainY-pageMainY*0.80+14,pageMainY*0.85);
  
  strokeWeight(circleStroke);
  fill('#6CC6E7');
  stroke('#2196F3');
  //ellipse(pageMainY-pageMainY*0.80+circleSpace, pageMainY*0.85,circleR);
  noStroke();
  fill(0);
  //text('數位', pageMainY-pageMainY*0.80+circleSpace+14,pageMainY*0.85);
  
  strokeWeight(circleStroke);
  fill('#8BC34A');
  stroke('#038559');
  //ellipse(pageMainY-pageMainY*0.80+circleSpace*2, pageMainY*0.85,circleR);
  noStroke();
  fill(0);
  //text('混和', pageMainY-pageMainY*0.80+circleSpace*2+14,pageMainY*0.85);
  
  let logoX=pageMainY*1.3;
  let logoY=logoX*0.7;  
  image(logoimg, (canvasX-logoX)/2,(pageMainY-logoY)/2 ,logoX,logoY);
  
  textSize(15);
  textAlign(CENTER,BOTTOM); 
  text("揪好學 - 線上數位教學整合型平台",canvasX*0.5,canvasY*0.99);
  textAlign(LEFT,TOP);
  
}
////

let p1_brickArea=[]; //X1,X2,Y1,Y2
let p1_brickSizeX,p1_brickSizeY;
let p1_brickAreaL,p1_brickAreaW;
let p1_brickCountX,p1_brickCountY;
let p1_brickCountSpaceX,p1_brickCountSpaceY;

//拼圖點擊
let p1ckickNum = 100;

//換頁
function p1changeTo3() {
  pageState= 3;
  removeElements(); 
  
}
function p2changeTo1() {
  pageState= 1;
  exPageState=0;
  removeElements();  
}
function p2changeTo3() {
  removeElements();
  pageState= 3;
  exPageState=0;

}
function p3changeTo1() {
  pageState= 1;
  p3toolbtnSte=1;
  brickDrawNow=[];
  brickDraw=[];
  brickDrawRrecord=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  drawPuzzle=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  printText=[];
  printText_Left=[];
  A13_count=0; A22_count=0; A23_count=0; 
  A24_count=0; A31_count=0; A32_count=0;
  A13_state = 1;
  A22_state = 1;   A22_laststate = 0;
  A23_state = 1;   A23_laststate = 0;
  A24_state = 1;   A24_laststate = 0;
  A31_state = 1;   A31_laststate = 0;
  A32_state = 1;   A32_laststate = 0;
  removeElements();
  exmode=0;
  showExState=0;
}
//

function page02(){
  background(255);
  //image(p2_img, 0,0 ,canvasX,canvasY);
  image(p2_all, 0,0 ,canvasX*0.85,canvasY);
  page02btn();
  
  // noStroke();
  // fill(0,50);
  // rect(canvasX*0.372,canvasY*0.256,canvasX*0.079,canvasX*0.055);
  // rect(canvasX*0.372,canvasY*0.645,canvasX*0.079,canvasX*0.055);
  
  if(mouseX >= canvasX*0.372 && mouseX <= canvasX*0.372+canvasX*0.079 && mouseY >= canvasY*0.256 && mouseY <= canvasY*0.256+canvasX*0.055 && exPageState==0 && p2_all==p2_blue){
    
     //exPageState==1
     imageMode(CENTER) ;
     image(exPuzzle,canvasX*0.372+(canvasX*0.079)/2,canvasY*0.256+(canvasX*0.055)/2 ,canvasX*0.079*1.1,canvasX*0.055*1.1);
     imageMode(CORNER) ;
     if(mouseIsPressed==true){
        if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
       exPageState=1;
     }
     
      
  }
  
  if(mouseX >= canvasX*0.372 && mouseX <= canvasX*0.372+canvasX*0.079 && mouseY >= canvasY*0.645 && mouseY <= canvasY*0.645+canvasX*0.055 && exPageState==0 && p2_all==p2_blue){
    
     //exPageState==2
     imageMode(CENTER) ;
     image(exPuzzle2,canvasX*0.372+(canvasX*0.079)/2,canvasY*0.645+(canvasX*0.055)/2 ,canvasX*0.079*1.1,canvasX*0.055*1.1);
     imageMode(CORNER);
     if(mouseIsPressed==true){
        if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
       exPageState=2;
     }
     
      
  }
  if(exPageState==1){
     image(p2_01, 0,0 ,canvasX*0.85,canvasY);
      // noStroke();
      // fill(0,50);
      // rect(canvasX*0.766,canvasY*0.056,canvasX*0.033,canvasX*0.033);
     // noStroke();
     // fill(0,50);
     // rect(canvasX*0.43,canvasY*0.53,canvasX*0.165,canvasX*0.165);//黃色區
     if(mouseX >= canvasX*0.43 && mouseX <= canvasX*0.43+canvasX*0.165 && mouseY >= canvasY*0.53 && mouseY <= canvasY*0.53+canvasX*0.165){
       
       fill('#F7F7F7');
       rect(canvasX*0.44,canvasY*0.53,canvasX*0.18,canvasX*0.165);
       imageMode(CENTER);
       
       image(p2ExBrick_img, canvasX*0.43+canvasX*0.18/2,canvasY*0.53+canvasX*0.168/2 ,canvasX*0.18*1.1,canvasX*0.165*1.1);
       imageMode(CORNER);
       
        if(mouseIsPressed == true){
          if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
          p2exampleSelect=1;
          p2changeTo3();
          
        }
      }
  }
  if(exPageState==2){
     image(p2_02, 0,0 ,canvasX*0.85,canvasY);
      
    if(mouseX >= canvasX*0.43 && mouseX <= canvasX*0.43+canvasX*0.165 && mouseY >= canvasY*0.53 && mouseY <= canvasY*0.53+canvasX*0.165){
       
       fill('#F7F7F7');
       rect(canvasX*0.43,canvasY*0.53,canvasX*0.18,canvasX*0.165);
       imageMode(CENTER);
       
       image(p2ExBrick2_img, canvasX*0.43+canvasX*0.18/2,canvasY*0.53+canvasX*0.168/2 ,canvasX*0.18*1.1,canvasX*0.165*1.1);
       imageMode(CORNER);
       
        if(mouseIsPressed == true){
          if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_1.play();               
            } 
          p2exampleSelect=2;
          p2changeTo3();
          
        }
      }
    
    
  }
  //打叉
  if(mouseX >= canvasX*0.766 && mouseX <= canvasX*0.766+canvasX*0.033 && mouseY >= canvasY*0.056 && mouseY <= canvasY*0.056+canvasX*0.033){
    
        if(mouseIsPressed == true){
          exPageState=0;
          
        }
        
  }
  
  
}
function page02btn(){
  button = createButton('開始拼拼圖'); //使用此拼圖
  button.size(page01btnX, page01btnY);
  //button.position(canvasX*0.98-page01btnX, canvasY*0.08);
  button.position(canvasX*0.98-page01btnX, canvasY*0.14);
  page02btnColor=color('#FFFFFF');
  button.style('background-color', page02btnColor);
  button.style("color", "#3E0015");
  button.style('font-size', btnTextSize);
  button.mousePressed(p2changeTo3);
  
  button2 = createButton('回到首頁');
  button2.size(page01btnX, page01btnY);
  button2.position(canvasX*0.98-page01btnX, canvasY*0.03);
  page03btnColor=color('#DDDDDD');
  button2.style('background-color', page03btnColor);
  button2.style("color", "#3E0015");
  button2.style('font-size', btnTextSize);
  button2.mousePressed(p2changeTo1);
  
  p2_planBtn= createButton('延伸資源');
  p2_planBtn.size(page01btnX, page01btnY);
  p2_planBtn.position(canvasX*0.98-page01btnX, canvasY*0.085);
  page03btnColor=color('#EBEBEB');
  p2_planBtn.style('background-color', page03btnColor);
  p2_planBtn.style("color", "#3E0015");
  p2_planBtn.style('font-size', btnTextSize);
  p2_planBtn.mousePressed(p2_plan);
  
}
let p2_planState=0;
let p2_planCount=0;

function p2_plan(){
  
  if(exPageState == 0){     //數位製造
     //print("p2-"+p1ckickNum);
     if(p2_all==p2_blue){
        window.open("https://www.junyiacademy.org/computing");
      }else if(p2_all==p2_yellow){
        window.open("https://www.junyiacademy.org/junyi-competency");
      }
     
     
  }else if(exPageState == 1){     //3D列印
     //print("p2-"+p1ckickNum);
     //window.open("https://realfun-3d.com/category/teaching/3dprinting-teaching/");
     //https://www.youtube.com/watch?v=r9yt0w0Po7s
     window.open("https://www.youtube.com/watch?v=r9yt0w0Po7s");
     
  }else if(exPageState == 2){     //
     //print("p2-"+p1ckickNum);
     //window.open("https://realfun-3d.com/category/teaching/3dprinting-teaching/");
     //https://www.youtube.com/watch?v=r9yt0w0Po7s
     window.open("https://youtu.be/94Of7J7V5jc");
     
  }
}
//
let p2exampleSelect=0;

function page03(){
  page03btn();
  p3BrickPage()
  page03toolbtnClick();
  if(mouseIsPressed==false){
     lastbrickState=false;
     brickIsSelect = false;
  }
  if(p2exampleSelect==1){
    if(exmode <= 30){
        p2exampleStart();
    }     
  } else if(p2exampleSelect==2){
    if(exmode <= 30){
        p2exampleStart2();
    }     
  }
  
  
  p3brickPuzzleRecord();
  
  // if(showExState==1){
  //    let ex_scale=0.532;
  //    image(showExample_img,canvasX*0.38,canvasY*0.2505,canvasX*ex_scale,canvasX*ex_scale*0.4013);
  //    //print("show ex");
  // }
  
     
}

function page03btn(){
  button = createButton('回到首頁');
  button.size(page01btnX, page01btnY);
  button.position(canvasX*0.98-page01btnX, canvasY*0.03);
  page03btnColor=color('#DDDDDD');
  button.style('background-color', page03btnColor);
  button.style("color", "#3E0015");
  button.style('font-size', btnTextSize);
  button.mousePressed(p3changeTo1);
  
  button = createButton('清除');
  button.size(page01btnX, page01btnY);
  button.position(canvasX*0.98-page01btnX, canvasY*0.085);
  page02btnColor=color('#EBEBEB');
  button.style('background-color', page02btnColor);
  button.style("color", "#3E0015");
  button.style('font-size', btnTextSize);
  button.mousePressed(puzzleClear);
  
    p2_planBtn= createButton('介面說明');
  p2_planBtn.size(page01btnX, page01btnY);
  p2_planBtn.position(canvasX*0.98-page01btnX, canvasY*0.14);
  page03btnColor=color('#FFFFFF');
  p2_planBtn.style('background-color', page03btnColor);
  p2_planBtn.style("color", "#3E0015");
  p2_planBtn.style('font-size', btnTextSize);
  p2_planBtn.mousePressed(replayLogo);
  
}
function puzzleClear(){
  brickDrawNow=[];
  brickDraw=[];
  brickDrawRrecord=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  drawPuzzle=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  printText=[];
  printText_Left=[];
  A13_count=0; A22_count=0; A23_count=0; 
  A24_count=0; A31_count=0; A32_count=0;
  A13_state = 1;
  A22_state = 1;   A22_laststate = 0;
  A23_state = 1;   A23_laststate = 0;
  A24_state = 1;   A24_laststate = 0;
  A31_state = 1;   A31_laststate = 0;
  A32_state = 1;   A32_laststate = 0;
  showExState=0;
}

let p3mainX,p3mainY;
let p3toolBtn1=[]; //[x1,x2,y1,y2,name]
let p3toolBtn2=[]; //[x1,x2,y1,y2,name]
let p3toolBtn3=[]; //[x1,x2,y1,y2,name]
let p3toolX,p3toolY,p3toolCount;
let p3toolbtnSte=1;
let p3toolBtn1C,p3toolBtn2C,p3toolBtn3C;
let p3toolbtnTextSize=13.5;
let p3mainTextSize=20;

function page03mainBlock(){
  p3mainX=canvasX*0.32;
  p3mainY=canvasY*0.10;
  p3toolBtn1[4]="學習重點 & 教學目標";
  p3toolBtn2[4]="主題 & 教學活動";
  p3toolBtn3[4]="核心素養";
  p3toolCount=3;
  p3toolX=p3mainX/p3toolCount;
  p3toolY=p3mainY*0.45;
  
  strokeWeight(1.5);
  stroke('#9E9E9E');
  fill('#FFFFF');
  rect(0, 0, p3mainX, p3mainY);
  //
  
  textSize(p3mainTextSize);
  strokeWeight(0.5);
  stroke("#DC7E7E");
  fill("#DC7E7E");
  textAlign(CENTER,CENTER); 
  text("拼圖區",p3mainX/2 ,p3mainY/2*0.6);
  

  switch (p3toolbtnSte) {
    case 1:
      p3toolBtn1C='#FFFFFF';
      p3toolBtn2C='#E2E2E2';
      p3toolBtn3C='#E2E2E2';
      break;
      
    case 2:
      p3toolBtn1C='#E2E2E2';
      p3toolBtn2C='#FFFFFF';
      p3toolBtn3C='#E2E2E2';
      break;
      
    case 3:
      p3toolBtn1C='#E2E2E2';
      p3toolBtn2C='#E2E2E2';
      p3toolBtn3C='#FFFFFF';
      break;
  }
  
  p3toolBtn1[0]=0; p3toolBtn1[1]=p3toolBtn1[0]+p3toolX;
  p3toolBtn1[2]=p3mainY-p3toolY; p3toolBtn1[3]=p3toolBtn1[2]+p3toolY;
  p3toolBtn2[0]=p3toolBtn1[1]; p3toolBtn2[1]=p3toolBtn2[0]+p3toolX;
  p3toolBtn2[2]=p3mainY-p3toolY; p3toolBtn2[3]=p3toolBtn2[2]+p3toolY;
  p3toolBtn3[0]=p3toolBtn2[1]; p3toolBtn3[1]=p3toolBtn3[0]+p3toolX;
  p3toolBtn3[2]=p3mainY-p3toolY; p3toolBtn3[3]=p3toolBtn3[2]+p3toolY;
  
  strokeWeight(1.5);
  stroke('#9E9E9E');
  fill(color(p3toolBtn1C));
  rect(p3toolBtn1[0], p3mainY-p3toolY, p3toolX, p3toolY,5);
  fill(color(p3toolBtn2C));
  rect(p3toolBtn2[0], p3mainY-p3toolY, p3toolX, p3toolY,5);
  fill(color(p3toolBtn3C));
  rect(p3toolBtn3[0], p3mainY-p3toolY, p3toolX, p3toolY,5);
  
  
  textSize(p3toolbtnTextSize);
  strokeWeight(0.4);
  stroke(0);
  fill(0);
  textAlign(CENTER,CENTER); 
  text(p3toolBtn1[4],(p3toolBtn1[0]+p3toolBtn1[1])/2 ,(p3toolBtn1[2]+p3toolBtn1[3])/2);
  text(p3toolBtn2[4],(p3toolBtn2[0]+p3toolBtn2[1])/2 ,(p3toolBtn2[2]+p3toolBtn2[3])/2);
  text(p3toolBtn3[4],(p3toolBtn3[0]+p3toolBtn3[1])/2 ,(p3toolBtn3[2]+p3toolBtn3[3])/2);
  
}

let page03step1Block1=[];//[x1,x2,y1,y2,W,L,]
let page03step1Block2=[];//[x1,x2,y1,y2,W,L,]

function page03step1Block(){
  strokeWeight(1);
  stroke('#9E9E9E');
  fill('#FFFFF');
  //////
  page03step1Block1[4]=p3mainX*0.55;
  page03step1Block1[5]=canvasY-p3mainY;
  
  page03step1Block1[0]=0;
  page03step1Block1[1]=page03step1Block1[0]+page03step1Block1[4];
  page03step1Block1[2]=p3mainY;
  page03step1Block1[3]=page03step1Block1[2]+page03step1Block1[5];
  //////
  page03step1Block2[4]=p3mainX-page03step1Block1[4];
  page03step1Block2[5]=canvasY-p3mainY;
  
  page03step1Block2[0]=page03step1Block1[1];
  page03step1Block2[1]=page03step1Block2[0]+page03step1Block2[4];
  page03step1Block2[2]=p3mainY;
  page03step1Block2[3]=page03step1Block2[2]+page03step1Block2[5];
  //////
   
  rect(page03step1Block1[0], page03step1Block1[2], page03step1Block1[4], page03step1Block1[5]); //左框
  rect(page03step1Block2[0], page03step1Block2[2], page03step1Block2[4], page03step1Block2[5]); //右框
  
  strokeWeight(1.5);
  stroke('#9E9E9E77');
  noFill();
  rect(page03step1Block1[0], page03step1Block1[2], page03step1Block1[4]+page03step1Block2[4], page03step1Block2[5]+page03step1Block2[5]); //拼圖區_積木總框
  
  
  
  
}
function page03toolbtnClick() {
  if(mouseX>=p3toolBtn1[0] && mouseX<=p3toolBtn1[1] && mouseY>=p3toolBtn1[2] && mouseY<=p3toolBtn1[3]){
    if(mouseIsPressed==true && lastbrickState!=true){
       p3toolbtnSte=1;
       lastbrickState=true;
       print("toolbtn 1");
      }
     
  }
  else if(mouseX>=p3toolBtn2[0] && mouseX<=p3toolBtn2[1] && mouseY>=p3toolBtn2[2] && mouseY<=p3toolBtn2[3] ){
    if(mouseIsPressed==true && lastbrickState!=true){
       p3toolbtnSte=2;
       lastbrickState=true;
       print("toolbtn 2");
      }
  }
  else if(mouseX>=p3toolBtn3[0] && mouseX<=p3toolBtn3[1] && mouseY>=p3toolBtn3[2] && mouseY<=p3toolBtn3[3]  ){
     if(mouseIsPressed==true && lastbrickState!=true){
       p3toolbtnSte=3;
       lastbrickState=true;
       print("toolbtn 3");
      }
  }
}

let startBrickCount = 6;
let startBrickedge;
let startBcenterY=[];

let startBrickSize=[];//[x,y]
let startBrickLocate1=[[],[],[],[],[],[]];
let startBrickLocate2=[[],[],[],[],[],[]];
let startBrickLocate3=[[],[],[],[],[],[]];
//[name1,x1,x2,y1,y2][name2,x1,x2,y1,y2][name3,x1,x2,y1,y2]

function draw_p3BrickSetup1(){
  //拼圖搭配
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("1 . 學習表現",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.04);
  text("2 . 學習內容",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.48);
  
  startBrickedge=page03step1Block1[4]*0.1;
  let startBcenterX = (page03step1Block1[0]+page03step1Block1[1])/2;
 
  for (let i = 0; i < startBrickCount+1; i++) {
   startBcenterY[i] = page03step1Block1[2]+ page03step1Block1[5]/(startBrickCount+1)*i;    
    //print(startBcenterY[i]);
  }
  startBrickSize[0]= (page03step1Block1[4]-startBrickedge*2)*0.83;
  startBrickSize[1]= (page03step1Block1[5]/(startBrickCount+1))*0.9;
  startBrickSize[2]= (page03step1Block1[4]-startBrickedge*2)*0.80;
  startBrickSize[3]= (page03step1Block1[5]/(startBrickCount+1))*0.8;

  //[img1,x1,x2,y1,y2,name][img2,x1,x2,y1,y2,name][img3,x1,x2,y1,y2,name]...
  for (let i = 0; i < startBrickCount; i++) {
     startBrickLocate1[i][0]=startBrick[i];
    
  }
  
  
  imageMode(CENTER);
  
  for (let i = 0; i < startBrickCount/2; i++) {
    image(startBrick[i], startBcenterX, startBcenterY[i+1],startBrickSize[0],startBrickSize[1]);
    startBrickLocate1[i][1]=startBcenterX-startBrickSize[0]/2;
    startBrickLocate1[i][2]=startBcenterX+startBrickSize[0]/2;
    startBrickLocate1[i][3]=startBcenterY[i+1]-startBrickSize[1]/2;
    startBrickLocate1[i][4]=startBcenterY[i+1]+startBrickSize[1]/2;
    startBrickLocate1[i][5]= "學習重點-"+(i+1);
    startBrickLocate1[i][6]= "A-1-1";
  }
  
  for (let i = startBrickCount/2; i < startBrickCount; i++) {
    image(startBrick[i], startBcenterX, startBcenterY[i+1]+startBcenterY[0]/2,startBrickSize[2],startBrickSize[3]);
    startBrickLocate1[i][1]=startBcenterX-startBrickSize[2]/2;
    startBrickLocate1[i][2]=startBcenterX+startBrickSize[2]/2;
    startBrickLocate1[i][3]=(startBcenterY[i+1]+startBcenterY[0]/2)-startBrickSize[3]/2;
    startBrickLocate1[i][4]=(startBcenterY[i+1]+startBcenterY[0]/2)+startBrickSize[3]/2;
    startBrickLocate1[i][5]= "學習重點-"+(i+1);
    startBrickLocate1[i][6]= "A-1-2";
    //print(startBrickLocate1[i][4]);
  }
  
  imageMode(CORNER);
  
  image(moreIcon, canvasX*0.155, canvasY*0.515,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.155, canvasY*0.94,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.297, canvasY*0.48,canvasY*0.035,canvasY*0.035);
  
  
}

let startBrickSize2=[];//[x,y]
function draw_p3BrickSetup2(){
  
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("1 . 延伸搭配課程主題",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.04);
  text("2 . 教學階段",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.48);
  
  startBrickedge=page03step1Block1[4]*0.1;
  let startBcenterX = (page03step1Block1[0]+page03step1Block1[1])/2;
 
  for (let i = 0; i < startBrickCount+1; i++) {
   startBcenterY[i] = page03step1Block1[2]+ page03step1Block1[5]/(startBrickCount+1)*i;    
    //print(startBcenterY[i]);
  }
  startBrickSize2[0]= (page03step1Block1[4]-startBrickedge*2)*0.74;
  startBrickSize2[1]= (page03step1Block1[5]/(startBrickCount+1))*0.9;
  startBrickSize2[2]= (page03step1Block1[4]-startBrickedge*2)*0.76;
  startBrickSize2[3]= (page03step1Block1[5]/(startBrickCount+1))*0.6;

  for (let i = 0; i < startBrickCount; i++) {
     startBrickLocate2[i][0]=start2Brick[i];
    
  }
  
  imageMode(CENTER);
    for (let i = 0; i < startBrickCount/2; i++) {
      image(start2Brick[i], startBcenterX, startBcenterY[i+1],startBrickSize2[0],startBrickSize2[1]);
      startBrickLocate2[i][1]=startBcenterX-startBrickSize2[0]/2;
      startBrickLocate2[i][2]=startBcenterX+startBrickSize2[0]/2;
      startBrickLocate2[i][3]=startBcenterY[i+1]-startBrickSize2[1]/2;
      startBrickLocate2[i][4]=startBcenterY[i+1]+startBrickSize2[1]/2;
      startBrickLocate2[i][5]= "教學活動-"+(i+1);
      startBrickLocate2[i][6]= "A-2-1";
  }
  for (let i = startBrickCount/2; i < startBrickCount; i++) {
    image(start2Brick[i], startBcenterX, startBcenterY[i+1]+startBcenterY[0]/2,startBrickSize2[2],startBrickSize2[3]);
    startBrickLocate2[i][1]=startBcenterX-startBrickSize2[2]/2;
    startBrickLocate2[i][2]=startBcenterX+startBrickSize2[2]/2;
    startBrickLocate2[i][3]=(startBcenterY[i+1]+startBcenterY[0]/2)-startBrickSize2[3]/2;
    startBrickLocate2[i][4]=(startBcenterY[i+1]+startBcenterY[0]/2)+startBrickSize2[3]/2;
    startBrickLocate2[i][5]= "教學活動-"+(i+1);
    startBrickLocate2[i][6]= "A-2-2";
  }
  imageMode(CORNER);
  
  image(moreIcon, canvasX*0.155, canvasY*0.515,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.155, canvasY*0.94,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.297, canvasY*0.52,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.297, canvasY*0.94,canvasY*0.035,canvasY*0.035);
  
}

let startBrickSize3=[];//[x,y]
function draw_p3BrickSetup3(){
  
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("1 . 面向",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.04);
  text("2 . 項目",page03step1Block1[1]*0.1,page03step1Block1[2]+page03step1Block1[3]*0.48);
  
  startBrickedge=page03step1Block1[4]*0.1;
  let startBcenterX = (page03step1Block1[0]+page03step1Block1[1])/2;
 
  for (let i = 0; i < startBrickCount+1; i++) {
   startBcenterY[i] = page03step1Block1[2]+ page03step1Block1[5]/(startBrickCount+1)*i;    
    //print(startBcenterY[i]);
  }
  startBrickSize3[0]= (page03step1Block1[4]-startBrickedge*2)*0.8;
  startBrickSize3[1]= (page03step1Block1[5]/(startBrickCount+1))*0.85;
  startBrickSize3[2]= (page03step1Block1[4]-startBrickedge*2)*0.95;
  startBrickSize3[3]= (page03step1Block1[5]/(startBrickCount+1))*0.55;

  for (let i = 0; i < startBrickCount; i++) {
     startBrickLocate3[i][0]=start3Brick[i];
    
  }
  
  imageMode(CENTER);
    for (let i = 0; i < startBrickCount/2; i++) {
      image(start3Brick[i], startBcenterX, startBcenterY[i+1],startBrickSize3[0],startBrickSize3[1]);
      startBrickLocate3[i][1]=startBcenterX-startBrickSize3[0]/2;
      startBrickLocate3[i][2]=startBcenterX+startBrickSize3[0]/2;
      startBrickLocate3[i][3]=startBcenterY[i+1]-startBrickSize3[1]/2;
      startBrickLocate3[i][4]=startBcenterY[i+1]+startBrickSize3[1]/2;
      startBrickLocate3[i][5]= "核心素養-"+(i+1);
      startBrickLocate3[i][6]= "A-3-1";
  }
  for (let i = startBrickCount/2; i < startBrickCount; i++) {
   image(start3Brick[i], startBcenterX, startBcenterY[i+1]+startBcenterY[0]/2,startBrickSize3[2],startBrickSize3[3]);
    startBrickLocate3[i][1]=startBcenterX-startBrickSize3[2]/2;
    startBrickLocate3[i][2]=startBcenterX+startBrickSize3[2]/2;
    startBrickLocate3[i][3]=(startBcenterY[i+1]+startBcenterY[0]/2)-startBrickSize3[3]/2;
    startBrickLocate3[i][4]=(startBcenterY[i+1]+startBcenterY[0]/2)+startBrickSize3[3]/2;
    startBrickLocate3[i][5]= "核心素養-"+(i+1);
    startBrickLocate3[i][6]= "A-3-2";
  }
  imageMode(CORNER);
  
  image(moreIcon, canvasX*0.155, canvasY*0.515,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.155, canvasY*0.94,canvasY*0.035,canvasY*0.035);
  image(moreIcon, canvasX*0.297, canvasY*0.62,canvasY*0.035,canvasY*0.035);
  
} 

let toolBrickSize1=[];//[x,y]//page03step1Block2[0]
let toolBrickSize2=[];//[x,y]//page03step1Block2[0]
let toolBrickSize3=[];//[x,y]//page03step1Block2[0]
let toolBrickCount=[3,10,12];
let toolBrickedge;
let toolCenterX = [];//圖形定位中心點
let toolCenterY = [];//圖形定位中心點
let toolBrickLocate1=[[],[],[],[],[],[],[],[],[],[],[],[]];//toolBrickLocate1[0_img,1_x1,2_x2,3_y1,4_y2,5_name]
let toolBrickLocate2=[[],[],[],[],[],[],[],[],[],[],[],[]];
let toolBrickLocate3=[[],[],[],[],[],[],[],[],[],[],[],[]];

function draw_p3BrickTool1(){
  
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("3 . 實作類別",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.04);
  text("自建拼圖",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.62);
  
  
  toolBrickedge = page03step1Block2[4]*0.1;
  //圖形定位中心點
  toolCenterX[0] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]+1))*0.8;
  toolCenterX[1] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]+1))*2;
  toolCenterX[2] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]+1))*3*1.08;
  //print(startTcenterX[0]);print(startTcenterX[1]);
  
  toolCenterY = [];//圖形定位中心點
  
  for (let i = 0; i < toolBrickCount[1]+1; i++) {
   toolCenterY[i] = page03step1Block2[2]*0.3 + page03step1Block2[5]/(toolBrickCount[2])*i*1.3;      //print(toolCenterY[i]);
  }
  
  toolBrickSize1[0] = (page03step1Block2[4]/4)*1;
  toolBrickSize1[1] = (page03step1Block2[5]/(toolBrickCount[2]-1))*0.9;
  toolBrickSize1[2] = (page03step1Block2[4]/4)*1;
  toolBrickSize1[3] = (page03step1Block2[5]/(toolBrickCount[2]-1))*0.9;

  for (let i = 0; i < toolBrickCount[3]; i++) {
     toolBrickLocate1[i][0]=toolBrick1[i]; //存取img
    
  }
  
  imageMode(CENTER);
  for (let i = 0; i < 12; i++) {
     toolBrickLocate1[i][0]=toolBrick1[i];
    
  }
  for (let i = 0; i < 3; i++) {
      image(toolBrick1[i], toolCenterX[0], toolCenterY[i+2],toolBrickSize1[0],toolBrickSize1[1]);
      toolBrickLocate1[i][1]=toolCenterX[0]-toolBrickSize1[0]/2;
      toolBrickLocate1[i][2]=toolCenterX[0]+toolBrickSize1[0]/2;
      toolBrickLocate1[i][3]=toolCenterY[i+2]-toolBrickSize1[1]/2;
      toolBrickLocate1[i][4]=toolCenterY[i+2]+toolBrickSize1[1]/2;
      toolBrickLocate1[i][5]= "小工具-"+(i+1);
  }
  for (let i = 3; i < 6; i++) {
      image(toolBrick1[i], toolCenterX[1], toolCenterY[i+2-3],toolBrickSize1[0],toolBrickSize1[1]);
      toolBrickLocate1[i][1]=toolCenterX[1]-toolBrickSize1[0]/2;
      toolBrickLocate1[i][2]=toolCenterX[1]+toolBrickSize1[0]/2;
      toolBrickLocate1[i][3]=toolCenterY[i+2-3]-toolBrickSize1[1]/2;
      toolBrickLocate1[i][4]=toolCenterY[i+2-3]+toolBrickSize1[1]/2;
      toolBrickLocate1[i][5]= "小工具-"+(i+1);
  }
  for (let i = 6; i < 9; i++) {
      image(toolBrick1[i], toolCenterX[2], toolCenterY[i+2-6],toolBrickSize1[0],toolBrickSize1[1]);
      toolBrickLocate1[i][1]=toolCenterX[2]-toolBrickSize1[0]/2;
      toolBrickLocate1[i][2]=toolCenterX[2]+toolBrickSize1[0]/2;
      toolBrickLocate1[i][3]=toolCenterY[i+2-6]-toolBrickSize1[1]/2;
      toolBrickLocate1[i][4]=toolCenterY[i+2-6]+toolBrickSize1[1]/2;
      toolBrickLocate1[i][5]= "小工具-"+(i+1);
  }
  for (let i = 0; i < 3; i++) { //自建
      image(toolBrick1[i+9], toolCenterX[i], toolCenterY[8],toolBrickSize1[0],toolBrickSize1[1]);
      toolBrickLocate1[i+9][1]=toolCenterX[i]-toolBrickSize1[0]/2;
      toolBrickLocate1[i+9][2]=toolCenterX[i]+toolBrickSize1[0]/2;
      toolBrickLocate1[i+9][3]=toolCenterY[8]-toolBrickSize1[1]/2;
      toolBrickLocate1[i+9][4]=toolCenterY[8]+toolBrickSize1[1]/2;
      toolBrickLocate1[i+9][5]= "小工具-"+(i+10);
  }
  
  for(let i = 0; i < 12; i++){
    
    toolBrickLocate1[i][6] = "A-1-3";
  }
  imageMode(CORNER);
  
}/////
function draw_p3BrickTool2(){
  
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("3 . 身體 vs 數位方法",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.04);
  text("4 . 身體 vs 數位工具",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.48);

  
  toolBrickedge = page03step1Block2[4]*0.1;
  
  toolCenterX[0] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]))*0.9;
  toolCenterX[1] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]))*2.11;
  toolCenterX[2] = page03step1Block2[0]+(page03step1Block2[4]/(toolBrickCount[0]))*3*1.08;
  //print(startTcenterX[0]);print(startTcenterX[1]);
  
  toolCenterY = [];//圖形定位中心點
  
  for (let i = 0; i < toolBrickCount[1]+1; i++) {
   toolCenterY[i] = page03step1Block2[2]*0.2 + page03step1Block2[5]/(toolBrickCount[2]-1)*i*1.1;      //print(toolCenterY[i]);
  }
  
  toolBrickSize2[0] = (page03step1Block2[4]/4)*1.5;
  toolBrickSize2[1] = (page03step1Block2[5]/(toolBrickCount[2]+1))*1.1;
  toolBrickSize2[2] = (page03step1Block2[4]/4)*1.4;
  toolBrickSize2[3] = (page03step1Block2[5]/(toolBrickCount[2]+1))*0.5;

//   for (let i = 0; i < toolBrickCount[3]; i++) {
//      toolBrickLocate2[i][0]=toolBrick2[i]; //存取img
    
//   }
  
  imageMode(CENTER);
  
  for (let i = 0; i < 8; i++) {
     toolBrickLocate2[i][0]=toolBrick2[i];
    
  }for (let i = 0; i < 8; i++) {
     toolBrickLocate3[i][0]=toolBrick3[i];
    
  }
  for (let i = 0; i < 4; i++) {
      image(toolBrick2[i], toolCenterX[0], toolCenterY[i+2],toolBrickSize2[0],toolBrickSize2[1]);
      toolBrickLocate2[i][1]=toolCenterX[0]-toolBrickSize2[0]/2;
      toolBrickLocate2[i][2]=toolCenterX[0]+toolBrickSize2[0]/2;
      toolBrickLocate2[i][3]=toolCenterY[i+2]-toolBrickSize2[1]/2;
      toolBrickLocate2[i][4]=toolCenterY[i+2]+toolBrickSize2[1]/2;
      toolBrickLocate2[i][5]= "小工具-"+(i+1);
  }
  for (let i = 4; i < 8; i++) {
      image(toolBrick2[i], toolCenterX[1], toolCenterY[i+2-4],toolBrickSize2[0],toolBrickSize2[1]);
      toolBrickLocate2[i][1]=toolCenterX[1]-toolBrickSize2[0]/2;
      toolBrickLocate2[i][2]=toolCenterX[1]+toolBrickSize2[0]/2;
      toolBrickLocate2[i][3]=toolCenterY[i+2-4]-toolBrickSize2[1]/2;
      toolBrickLocate2[i][4]=toolCenterY[i+2-4]+toolBrickSize2[1]/2;
      toolBrickLocate2[i][5]= "小工具-"+(i+1);
  }
  ///
  for (let i = 0; i < 4; i++) {
      image(toolBrick3[i], toolCenterX[0], toolCenterY[i+7],toolBrickSize2[2],toolBrickSize2[3]);
      toolBrickLocate3[i][1]=toolCenterX[0]-toolBrickSize2[2]/2;
      toolBrickLocate3[i][2]=toolCenterX[0]+toolBrickSize2[2]/2;
      toolBrickLocate3[i][3]=toolCenterY[i+7]-toolBrickSize2[3]/2;
      toolBrickLocate3[i][4]=toolCenterY[i+7]+toolBrickSize2[3]/2;
      toolBrickLocate3[i][5]= "小小工具-"+(i+1);
  }
  for (let i = 4; i < 8; i++) {
      image(toolBrick3[i], toolCenterX[1], toolCenterY[i+7-4],toolBrickSize2[2],toolBrickSize2[3]);
      toolBrickLocate3[i][1]=toolCenterX[1]-toolBrickSize2[2]/2;
      toolBrickLocate3[i][2]=toolCenterX[1]+toolBrickSize2[2]/2;
      toolBrickLocate3[i][3]=toolCenterY[i+7-4]-toolBrickSize2[3]/2;
      toolBrickLocate3[i][4]=toolCenterY[i+7-4]+toolBrickSize2[3]/2;
      toolBrickLocate3[i][5]= "小小工具-"+(i+1);
  }
  for(let i = 0; i < 8; i++){
    
    toolBrickLocate2[i][6] = "A-2-3";
  }
   for(let i = 0; i < 8; i++){
    
    toolBrickLocate3[i][6] = "A-2-4";
  }
  
  imageMode(CORNER);

  
  
  
}
function draw_p3BrickTool3(){
  
  textSize(13);
  strokeWeight(0.5);
  stroke("#363636");
  fill("#363636");
  textAlign(LEFT); 
  text("範例拼圖",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.04);
  
  //ex1_img
  //text("自建拼圖",page03step1Block2[0]*1.07,page03step1Block2[2]+page03step1Block2[3]*0.5);
  image(ex1_img, canvasX*0.19, canvasY*0.18,canvasX*0.12,canvasY*0.22);
  image(ex2_img, canvasX*0.19, canvasY*0.45,canvasX*0.12,canvasY*0.15);
  //image(ex3_img, canvasX*0.19, canvasY*0.55,canvasX*0.12,canvasY*0.12);
  if(shareState==1){
     image(ex4_img, canvasX*0.19, canvasY*0.71,canvasX*0.12,canvasY*0.12);
  
  }
  
}
let p3Load=0;

function p3BrickPage(){
  
  switch (p3toolbtnSte) {
    case 1:
      
      draw_p3BrickSetup1();
      draw_p3BrickTool1();
      p3BrickSelect1();
      
      break;
      
    case 2:
      draw_p3BrickSetup2();
      draw_p3BrickTool2();
      p3BrickSelect2();
      break;
      
    case 3:
      draw_p3BrickSetup3();
      draw_p3BrickTool3();
      p3BrickSelect3();
      break;
  }
  
} //畫出現在選擇的分頁

let brickSelect=[];//[img,name]

let brickIsSelect = false;
let selsctNow = false;
let brickDraw = [];

function p3BrickSelect1(){
  //toolBrickLocate1[0_img,1_x1,2_x2,3_y1,4_y2,5_name]
  //page1 brick
  for (let i = 0; i < startBrickCount; i++) {
    if(mouseX >= startBrickLocate1[i][1] && mouseX <= startBrickLocate1[i][2] && mouseY >= startBrickLocate1[i][3] && mouseY <= startBrickLocate1[i][4]){
      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=startBrickLocate1[i][0];
         brickSelect[1]=startBrickLocate1[i][5];
         brickSelect[2]=startBrickLocate1[i][2]-startBrickLocate1[i][1];//X
         brickSelect[3]=startBrickLocate1[i][4]-startBrickLocate1[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }
         
    }
  }
  for(let i = 0; i < 12; i++){
    if(mouseX >= toolBrickLocate1[i][1] && mouseX <= toolBrickLocate1[i][2] && mouseY >= toolBrickLocate1[i][3] && mouseY <= toolBrickLocate1[i][4]){
      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=toolBrickLocate1[i][0];
         brickSelect[1]=toolBrickLocate1[i][5];
         brickSelect[2]=toolBrickLocate1[i][2]-toolBrickLocate1[i][1];//X
         brickSelect[3]=toolBrickLocate1[i][4]-toolBrickLocate1[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate1[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }
         
    
    } 
    
    
    
    
  }
  
  if(selsctNow == true){
     if(mouseIsPressed == true){
         selsctNow = true;
      }
     if(mouseIsPressed == false){
         selsctNow = false;
      }
  }
  
  if(mouseX >= page03step1Block2[1] && mouseX <= canvasX && mouseY >= 0 && mouseY <= canvasY){
     if(selsctNow == true){
        for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];
          
            if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_2.play();               
            }          
          
        }
        
        selsctNow = false;
     }
    
  }
      
  if(brickIsSelect == true){
     p3brickPuzzle();     
  }
  
  
} //選擇第一頁分頁的拼圖+拖拉
function p3BrickSelect2(){
  //toolBrickLocate2[0_img,1_x1,2_x2,3_y1,4_y2,5_name]
  //page1 brick
  for (let i = 0; i < startBrickCount; i++) {
    if(mouseX >= startBrickLocate2[i][1] && mouseX <= startBrickLocate2[i][2] && mouseY >= startBrickLocate2[i][3] && mouseY <= startBrickLocate2[i][4]){

      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=startBrickLocate2[i][0];
         brickSelect[1]=startBrickLocate2[i][5];
         brickSelect[2]=startBrickLocate2[i][2]-startBrickLocate2[i][1];//X
         brickSelect[3]=startBrickLocate2[i][4]-startBrickLocate2[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         //brickIsSelect = true;
        
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate2[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }
    }
  
  }
  for (let i = 0; i < 8; i++) {
    if(mouseX >= toolBrickLocate2[i][1] && mouseX <= toolBrickLocate2[i][2] && mouseY >= toolBrickLocate2[i][3] && mouseY <= toolBrickLocate2[i][4]){

      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=toolBrickLocate2[i][0];
         //print(brickSelect[0]);
         brickSelect[1]=toolBrickLocate2[i][5];
         brickSelect[2]=toolBrickLocate2[i][2]-toolBrickLocate2[i][1];//X
         brickSelect[3]=toolBrickLocate2[i][4]-toolBrickLocate2[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
        
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate2[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }
    }
  
  }
  for (let i = 0; i < 8; i++) {
    if(mouseX >= toolBrickLocate3[i][1] && mouseX <= toolBrickLocate3[i][2] && mouseY >= toolBrickLocate3[i][3] && mouseY <= toolBrickLocate3[i][4]){

      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=toolBrickLocate3[i][0];
         brickSelect[1]=toolBrickLocate3[i][5];
         brickSelect[2]=toolBrickLocate3[i][2]-toolBrickLocate3[i][1];//X
         brickSelect[3]=toolBrickLocate3[i][4]-toolBrickLocate3[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
        
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate3[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }
    }
  
  }
  if(selsctNow == true){
     if(mouseIsPressed == true){
         selsctNow = true;
      }
     if(mouseIsPressed == false){
         selsctNow = false;
      }
  }
  
  if(mouseX >= page03step1Block2[1] && mouseX <= canvasX && mouseY >= 0 && mouseY <= canvasY){
     if(selsctNow == true){
        for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];
          
            if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_2.play();               
            }           
          
        }
        
        selsctNow = false;
     }
    
  }
      
  if(brickIsSelect == true){
     p3brickPuzzle();     
   }
  
} //選擇第二頁分頁的拼圖+拖拉
function p3BrickSelect3(){
  //page1 brick
  for (let i = 0; i < startBrickCount; i++) {
    if(mouseX >= startBrickLocate3[i][1] && mouseX <= startBrickLocate3[i][2] && mouseY >= startBrickLocate3[i][3] && mouseY <= startBrickLocate3[i][4]){

      if(mouseIsPressed==true && lastbrickState!=true){
         
         brickSelect[0]=startBrickLocate3[i][0];
         brickSelect[1]=startBrickLocate3[i][5];
         brickSelect[2]=startBrickLocate3[i][2]-startBrickLocate3[i][1];//X
         brickSelect[3]=startBrickLocate3[i][4]-startBrickLocate3[i][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         //brickIsSelect = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate3[i][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
         brickIsSelect = true;
         selsctNow=true;
      }

    }
  
  }
  
  
  if(selsctNow == true){
     if(mouseIsPressed == true){
         selsctNow = true;
      }
     if(mouseIsPressed == false){
         selsctNow = false;
      }
  }
  
  if(mouseX >= page03step1Block2[1] && mouseX <= canvasX && mouseY >= 0 && mouseY <= canvasY){
     if(selsctNow == true){
        for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i]; 
          
            if( !mus_1.isPlaying() && !mus_2.isPlaying() ){
               mus_2.play();               
            }           
          
        }
        selsctNow = false;
        
     }
    
  }
      
  if(brickIsSelect == true){
     p3brickPuzzle();     
     }
  
} //選擇第三頁分頁的拼圖+拖拉

let exmode=0;
let e;

function p2exampleStart(){
  
  if(exmode<=30){
     exmode++;
    print(exmode);

  }
  
  if(exmode>=15 && exmode<(15+1)){
         e = 0;
         brickSelect[0]=startBrickLocate1[e][0];
         brickSelect[1]=startBrickLocate1[e][5];
         brickSelect[2]=startBrickLocate1[e][2]-startBrickLocate1[e][1];//X
         brickSelect[3]=startBrickLocate1[e][4]-startBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
      p3brickPuzzleRecord();
      p3DrawPuzzle();

     
  } else if(exmode>=18 && exmode<(18+1)){
         e = 5;
         brickSelect[0]=startBrickLocate1[e][0];
         brickSelect[1]=startBrickLocate1[e][5];
         brickSelect[2]=startBrickLocate1[e][2]-startBrickLocate1[e][1];//X
         brickSelect[3]=startBrickLocate1[e][4]-startBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();
     
     
  }else if(exmode>=21 && exmode<(21+1)){

         e = 0;
         brickSelect[0]=toolBrickLocate1[e][0];
         brickSelect[1]=toolBrickLocate1[e][5];
         brickSelect[2]=toolBrickLocate1[e][2]-toolBrickLocate1[e][1];//X
         brickSelect[3]=toolBrickLocate1[e][4]-toolBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len  
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();
     
  }
  if(exmode>=24 && exmode<(24+1)){
         e = 4;
         brickSelect[0]=toolBrickLocate1[e][0];
         brickSelect[1]=toolBrickLocate1[e][5];
         brickSelect[2]=toolBrickLocate1[e][2]-toolBrickLocate1[e][1];//X
         brickSelect[3]=toolBrickLocate1[e][4]-toolBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
    
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();

  }
  if(exmode==30){
    p2exampleSelect=0;
  }
  
  for(let i =0;i< brickLength;i++){
        if(typeof brickDrawRrecord[i][0] != "undefined" && brickSelect.length > 0){
           image(brickDrawRrecord[i][0], brickDrawRrecord[i][3],brickDrawRrecord[i][4],brickDrawRrecord[i][5],brickDrawRrecord[i][6]);
            
            for(let a =0;a< brickLength;a++){
               drawPuzzle[i][a] = brickDrawRrecord[i][a];
            }

         }
        
      }
 
}
function p2exampleStart2(){
  
  if(exmode<=30){
     exmode++;
    print(exmode);

  }
  
  if(exmode>=15 && exmode<(15+1)){
         e = 1;
         brickSelect[0]=startBrickLocate1[e][0];
         brickSelect[1]=startBrickLocate1[e][5];
         brickSelect[2]=startBrickLocate1[e][2]-startBrickLocate1[e][1];//X
         brickSelect[3]=startBrickLocate1[e][4]-startBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
      p3brickPuzzleRecord();
      p3DrawPuzzle();

     
  } else if(exmode>=18 && exmode<(18+1)){
         e = 4;
         brickSelect[0]=startBrickLocate1[e][0];
         brickSelect[1]=startBrickLocate1[e][5];
         brickSelect[2]=startBrickLocate1[e][2]-startBrickLocate1[e][1];//X
         brickSelect[3]=startBrickLocate1[e][4]-startBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();
     
     
  }else if(exmode>=21 && exmode<(21+1)){

         e = 1;
         brickSelect[0]=toolBrickLocate1[e][0];
         brickSelect[1]=toolBrickLocate1[e][5];
         brickSelect[2]=toolBrickLocate1[e][2]-toolBrickLocate1[e][1];//X
         brickSelect[3]=toolBrickLocate1[e][4]-toolBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len  
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();
     
  }
  if(exmode>=24 && exmode<(24+1)){
         e = 5;
         brickSelect[0]=toolBrickLocate1[e][0];
         brickSelect[1]=toolBrickLocate1[e][5];
         brickSelect[2]=toolBrickLocate1[e][2]-toolBrickLocate1[e][1];//X
         brickSelect[3]=toolBrickLocate1[e][4]-toolBrickLocate1[e][3];//Y
         print(brickSelect[1]);
         lastbrickState = true;
         
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=toolBrickLocate1[e][6];////now brick id
         brickDrawNow[3]=canvasX;//x1
         brickDrawNow[4]=canvasY;//y1
        
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
    
      for (let i = 0; i < 7; i++) {       
          brickDraw[i]=brickDrawNow[i];          
      }
        p3brickPuzzleRecord();
        p3DrawPuzzle();

  }
  if(exmode==30){
    p2exampleSelect=0;
  }
  
  for(let i =0;i< brickLength;i++){
        if(typeof brickDrawRrecord[i][0] != "undefined" && brickSelect.length > 0){
           image(brickDrawRrecord[i][0], brickDrawRrecord[i][3],brickDrawRrecord[i][4],brickDrawRrecord[i][5],brickDrawRrecord[i][6]);
            
            for(let a =0;a< brickLength;a++){
               drawPuzzle[i][a] = brickDrawRrecord[i][a];
            }

         }
        
      }
 
}

function p3brickPuzzle(){
  if (typeof brickSelect[0] != "undefined" && brickSelect.length > 0) {
    if(mouseIsPressed == true){
       image(brickSelect[0], mouseX,mouseY ,brickSelect[2],brickSelect[3]);
    }
    
  }
  
} //拼圖拖拉

let brickDrawRrecord=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//0[A-1-1],1[A-1-2],2[A-1-3-1],3[A-1-3-2],4[A-1-3-3],
//5[A-2-1],6[A-2-2-1],7[A-2-2-2]  //8[A-2-3-1],9[A-2-3-2],10[A-2-3-3],11[A-2-3-4] //12[A-2-4-1],13[A-2-4-2],14[A-2-4-3],15[A-2-4-4]
//16[A-3-1-1],17[A-3-1-2],18[A-2-4-1],19[A-2-4-2],20[A-2-4-3]
//紀錄畫布上有的拼圖
let brickDrawNow = []; 
//選擇的拼圖 [0_img,1_name,2_id,3_x1,4_y1,5_wid,6_len]

let drawPuzzle=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

function p3DrawPuzzle(){
  //rect(page03step1Block2[0], page03step1Block2[2], page03step1Block2[4], page03step1Block2[5]); //右框//17
  let puzzpleSuccess = false;
  
  if(mouseX >= page03step1Block2[1] && mouseX <= canvasX && mouseY >= 0 && mouseY <= canvasY){
    //print("area");
    if(mouseIsPressed == true){
       
      for(let i =0;i< brickLength;i++){
        if(typeof brickDrawRrecord[i][0] != "undefined" && brickSelect.length > 0){
           image(brickDrawRrecord[i][0], brickDrawRrecord[i][3],brickDrawRrecord[i][4],brickDrawRrecord[i][5],brickDrawRrecord[i][6]);
            
            for(let a =0;a< brickLength;a++){
               drawPuzzle[i][a] = brickDrawRrecord[i][a];
            }
             
            
           puzzpleSuccess = true;
         }
        
      }
  
       
    }   
  }else{ puzzpleSuccess = false; }
  
  
  
  if(puzzpleSuccess == false || mouseIsPressed == false){
      for(let i =0;i< brickLength;i++){
         if(typeof drawPuzzle[i][0] != "undefined" && drawPuzzle.length > 0){
             
           image(drawPuzzle[i][0], drawPuzzle[i][3],drawPuzzle[i][4],drawPuzzle[i][5],drawPuzzle[i][6]);
           
          }
         
       }     
  }
  
}

let A13_count,A22_count,A23_count,A24_count,A31_count,A32_count;
let A13_state = 1;
let A22_state = 1;  let A22_laststate = 0;
let A23_state = 1;  let A23_laststate = 0;
let A24_state = 1;  let A24_laststate = 0;
let A31_state = 1;  let A31_laststate = 0;
let A32_state = 1;  let A32_laststate = 0;

let lastBrickDraw;
let brickLength=21;

function p3brickPuzzleRecord(){
        
       /*
         brickDrawNow[0]=brickSelect[0];//now image
         brickDrawNow[1]=brickSelect[1];//now brick name
         brickDrawNow[2]=startBrickLocate1[i][6];////now brick id
         brickDrawNow[3]=brickSelect[0];//x1
         brickDrawNow[4]=brickSelect[1];//y1
         brickDrawNow[5]=brickSelect[2];//x Wid
         brickDrawNow[6]=brickSelect[3];//y Len
       */
  
    if(brickDrawNow[2]=="A-1-1"){
      for(let i =0;i< 7;i++){
        brickDrawRrecord[0][i]=brickDraw[i];
        brickDraw[5] = canvasX*0.15;
        brickDraw[6] = canvasY*0.15;


      }
        brickDraw[3]=canvasX*0.38;//x1
        brickDraw[4]=canvasY*0.25;//y1

      
      lastBrickDraw="A-1-1";
            
    }else if(brickDraw[2]=="A-1-2"){
      for(let i =0;i< 7;i++){
        brickDrawRrecord[1][i]=brickDraw[i];
        brickDraw[5] = canvasX*0.134;
        brickDraw[6] = canvasY*0.135;

      }
        brickDraw[3] =canvasX*0.409;//x1
        brickDraw[4] =canvasY*0.365;//y1
      
      lastBrickDraw="A-1-2";
             
    }else if(brickDraw[2]=="A-1-3" ){
      
        if( A13_count < 3 && A13_state==1 && brickDrawRrecord[3][1]!=brickDraw[1] && brickDrawRrecord[4][1]!=brickDraw[1]){
        
             for(let i =0;i< 7;i++){
               brickDrawRrecord[2][i]=brickDraw[i]; 
               brickDraw[5] = canvasX*0.042;
               brickDraw[6] = canvasY*0.07;
             } 

             brickDraw[3]=canvasX*0.407;//x1
             brickDraw[4]=canvasY*0.458;//y1

             lastBrickDraw="A-1-3"; 
             A13_count++;

            if(A13_count >=3){
               A13_state +=1;

            }

        }else if( A13_count < 3 && A13_state==2 && brickDrawRrecord[2][1]!=brickDraw[1] && brickDrawRrecord[4][1]!=brickDraw[1]){
          print("state2");
           for(let i =0;i< 7;i++){
             brickDrawRrecord[3][i]=brickDraw[i]; 
               brickDraw[5] = canvasX*0.042;
               brickDraw[6] = canvasY*0.07;
           } 
             brickDraw[3]=canvasX*0.447;//x1
             brickDraw[4]=canvasY*0.458;//y1

           lastBrickDraw="A-1-3";
           print(lastBrickDraw); 
           A13_count++;

          if(A13_count >=3){
             A13_state +=1;
             print(A13_state);
          } 

        }else if( A13_count < 3 && A13_state==3 && brickDrawRrecord[2][1]!=brickDraw[1] && brickDrawRrecord[3][1]!=brickDraw[1]){

           for(let i =0;i< 7;i++){
             brickDrawRrecord[4][i]=brickDraw[i];
               brickDraw[5] = canvasX*0.042;
               brickDraw[6] = canvasY*0.07;
           } 
             brickDraw[3]=canvasX*0.487;//x1
             brickDraw[4]=canvasY*0.458;//y1

           lastBrickDraw="A-1-3";
           print(lastBrickDraw); 
           A13_count++;

          if(A13_count >=3){
             A13_state = 1;
             print(A13_state);
          }

        }

        if(lastBrickDraw != "A-1-3"){
             A13_count=0;               
        }     
        if(A13_state == 1){     
          if(brickDrawRrecord[2][1] != brickDraw[1]){
             A13_count=0;
          }         
        } else if (A13_state == 2){

          if(brickDrawRrecord[3][1] != brickDraw[1]){
             A13_count=0;
          }       

        } else if (A13_state == 3){

          if(brickDrawRrecord[4][1] != brickDraw[1]){
             A13_count=0;
          }       

        }
              
    }else if(brickDraw[2]=="A-2-1"){
       
      
        for(let i =0;i< 7;i++){
            brickDrawRrecord[5][i]=brickDraw[i];
            if( brickDrawRrecord[5][0] == planA211_img){
                brickDrawRrecord[5][0] = planA2111_img;
               brickDraw[5] = canvasX*0.135;
               brickDraw[6] = canvasY*0.35;

            }
            else if( brickDrawRrecord[5][0] == planA212_img){
                brickDrawRrecord[5][0] = planA2121_img;
               brickDraw[5] = canvasX*0.135;
               brickDraw[6] = canvasY*0.35;
            }
            else if( brickDrawRrecord[5][0] == planA213_img){
                brickDrawRrecord[5][0] = planA2131_img;
               brickDraw[5] = canvasX*0.135;
               brickDraw[6] = canvasY*0.35;
             }
        }
        brickDraw[3]=canvasX*0.526;//x1
        brickDraw[4]=canvasY*0.2675;//y1
        lastBrickDraw="A-2-1";
                    
    }
    else if(brickDraw[2]=="A-2-2"){
       
      
      if( A22_count < 3 && A22_state==1 && brickDrawRrecord[7][1] != brickDraw[1]){

              for(let i =0;i< 7;i++){
                  brickDrawRrecord[6][i]=brickDraw[i];
                  brickDraw[5] = canvasX*0.118;
                  brickDraw[6] = canvasY*0.09;
              }
              brickDraw[3]=canvasX*0.5497;//x1
              brickDraw[4]=canvasY*0.368;//y1 

               lastBrickDraw="A-2-2";
               print(lastBrickDraw); 
               A22_count++;

              if(A22_count >=3){
                 A22_state += 1;
                 A22_laststate += 1;
                 print(A22_state);
              } 

      }else if( A22_count < 3 && A22_state==2 && brickDrawRrecord[6][1]!=brickDraw[1]){

              for(let i =0;i< 7;i++){
                  brickDrawRrecord[7][i]=brickDraw[i];
                  brickDraw[5] = canvasX*0.118;
                  brickDraw[6] = canvasY*0.09;
              }
              brickDraw[3]=canvasX*0.5497;//x1
              brickDraw[4]=canvasY*0.526;//y1 

               lastBrickDraw="A-2-2";
               print(lastBrickDraw); 
               A22_count++;

              if(A22_count >=3){
                 A22_state = 1;
                 A22_laststate += 1;
                 print(A22_state);
              }

            }

       if(lastBrickDraw != "A-2-2"){
             A22_count=0;               
       } 
      
       if(A22_state == 1){     
            if(brickDrawRrecord[6][1] != brickDraw[1]){
              A22_count=0;
            }         
        } else if (A22_state == 2){

           if(brickDrawRrecord[7][1] != brickDraw[1]){
              A22_count=0;

           }
        }     
      
    }
    else if(brickDraw[2]=="A-2-3"){
            
      if( A23_count < 3 && A23_state==1 && brickDrawRrecord[9][1] != brickDraw[1] && brickDrawRrecord[10][1] != brickDraw[1] && brickDrawRrecord[11][1] != brickDraw[1]){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[8][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.0575;
                brickDraw[6] = canvasY*0.088;
              }
              brickDraw[3]=canvasX*0.549;//x1
              brickDraw[4]=canvasY*0.431;//y1   

               lastBrickDraw="A-2-3";
               print(lastBrickDraw); 
               A23_count++;

              if(A23_count >=3){
                 A23_state += 1;
                 A23_laststate += 1;
                 print(A23_state);
              } 

      }
      else if( A23_count < 3 && A23_state==2 && brickDrawRrecord[8][1] != brickDraw[1] && brickDrawRrecord[10][1] != brickDraw[1] && brickDrawRrecord[11][1] != brickDraw[1]){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[9][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.0575;
                brickDraw[6] = canvasY*0.088;
              }
              brickDraw[3]=canvasX*0.602;//x1
              brickDraw[4]=canvasY*0.431;//y1  

               lastBrickDraw="A-2-3";
               print(lastBrickDraw); 
               A23_count++;

              if(A23_count >=3){
                 A23_state += 1;
                 A23_laststate += 1;
                 print(A23_state);
                 if(A22_laststate <= 1){
                    A23_state = 1;
                 }
              }

       }
       else if( A23_count < 3 && A23_state==3 && brickDrawRrecord[9][1] != brickDraw[1] && brickDrawRrecord[11][1] != brickDraw[1] && brickDrawRrecord[8][1] != brickDraw[1] && A22_laststate >1){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[10][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.0575;
                brickDraw[6] = canvasY*0.088;
              }
              brickDraw[3]=canvasX*0.549;//x1
              brickDraw[4]=canvasY*0.588;//y1     

               lastBrickDraw="A-2-3";
               print(lastBrickDraw); 
               A23_count++;

              if(A23_count >=3){
                 A23_state += 1;
                 A23_laststate += 1;
                 print(A23_state);
              } 

      }
      else if( A23_count < 3 && A23_state==4 && brickDrawRrecord[8][1] != brickDraw[1] && brickDrawRrecord[9][1] != brickDraw[1] && brickDrawRrecord[10][1] != brickDraw[1] && A22_laststate >1){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[11][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.0575;
                brickDraw[6] = canvasY*0.088;
              }
              brickDraw[3]=canvasX*0.602;//x1
              brickDraw[4]=canvasY*0.588;//y1  

               lastBrickDraw="A-2-3";
               print(lastBrickDraw); 
              
               A23_count++;

              if(A23_count >=3){
                 A23_state = 1;
                 A23_laststate += 1;
                 print(A23_state);
              }

       }

      
       if(lastBrickDraw != "A-2-3"){
             A23_count=0;               
       } 
      
       if(A23_state == 1){     
            if(brickDrawRrecord[8][1] != brickDraw[1]){
              A23_count=0;
            }         
        } else if (A23_state == 2){

           if(brickDrawRrecord[9][1] != brickDraw[1]){
              A23_count=0;
           }
        }else if (A23_state == 3){

           if(brickDrawRrecord[10][1] != brickDraw[1]){
              A23_count=0;
           }
        }else if (A23_state == 4){

           if(brickDrawRrecord[11][1] != brickDraw[1]){
              A23_count=0;
              
           }
           
        }
      
      
      
    }
    else if(brickDraw[2]=="A-2-4"){
      

      if( A24_count < 3 && A24_state==1 && brickDrawRrecord[13][1] != brickDraw[1] && brickDrawRrecord[14][1] != brickDraw[1] && brickDrawRrecord[15][1] != brickDraw[1]){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[12][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.053;
                brickDraw[6] = canvasY*0.033;
              }
              brickDraw[3]=canvasX*0.551;//x1
              brickDraw[4]=canvasY*0.487;//y1       

               lastBrickDraw="A-2-4";
               print(lastBrickDraw); 
               A24_count++;

              if(A24_count >=3){
                 A24_state += 1;
                 A24_laststate += 1;
                 print(A24_state);
              } 

      }else if( A24_count < 3 && A24_state==2 && brickDrawRrecord[12][1] != brickDraw[1] && brickDrawRrecord[14][1] != brickDraw[1] && brickDrawRrecord[15][1] != brickDraw[1]){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[13][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.053;
                brickDraw[6] = canvasY*0.033;
              }
              brickDraw[3]=canvasX*0.605;//x1
              brickDraw[4]=canvasY*0.487;//y1  

               lastBrickDraw="A-2-4";
               print(lastBrickDraw); 
               A24_count++;

              if(A24_count >=3){
                 A24_state += 1;
                 A24_laststate += 1;
                 print(A24_state);
                
                 if(A22_laststate <= 1){
                    A24_state = 1;
                 }
              }

       }if( A24_count < 3 && A24_state==3 && brickDrawRrecord[12][1] != brickDraw[1] && brickDrawRrecord[13][1] != brickDraw[1] && brickDrawRrecord[15][1] != brickDraw[1] && A22_laststate >1){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[14][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.053;
                brickDraw[6] = canvasY*0.033;
              }
              brickDraw[3]=canvasX*0.551;//x1
              brickDraw[4]=canvasY*0.645;//y1  

               lastBrickDraw="A-2-4";
               print(lastBrickDraw); 
               A24_count++;

              if(A24_count >=3){
                 A24_state += 1;
                 A24_laststate += 1;
                 print(A24_state);
              } 

      }else if( A24_count < 3 && A24_state==4 && brickDrawRrecord[12][1] != brickDraw[1] && brickDrawRrecord[13][1] != brickDraw[1] && brickDrawRrecord[14][1] != brickDraw[1] && A22_laststate >1){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[15][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.053;
                brickDraw[6] = canvasY*0.033;
              }
              brickDraw[3]=canvasX*0.605;//x1
              brickDraw[4]=canvasY*0.645;//y1  

               lastBrickDraw="A-2-4";
               print(lastBrickDraw); 
              
               A24_count++;

              if(A24_count >=3){
                 A24_state = 1;
                 A24_laststate += 1;
                 print(A24_state);
              }

       }

      
       if(lastBrickDraw != "A-2-4"){
             A24_count=0;               
       } 
      
       if(A24_state == 1){     
            if(brickDrawRrecord[12][1] != brickDraw[1]){
              A24_count=0;
            }         
        } else if (A24_state == 2){

           if(brickDrawRrecord[13][1] != brickDraw[1]){
              A24_count=0;
           }
        }else if (A24_state == 3){

           if(brickDrawRrecord[14][1] != brickDraw[1]){
              A24_count=0;
           }
        }else if (A24_state == 4){

           if(brickDrawRrecord[15][1] != brickDraw[1]){
              A24_count=0;
              
           }
           
        }
      
      
      
    }
    else if(brickDraw[2]=="A-3-1"){
       
      
      if( A31_count < 3 && A31_state==1 && brickDrawRrecord[17][1] != brickDraw[1] ){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[16][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.13;
                brickDraw[6] = canvasY*0.125;
              }
              brickDraw[3]=canvasX*0.658;//x1
              brickDraw[4]=canvasY*0.352;//y1   

               lastBrickDraw="A-3-1";
               print(lastBrickDraw); 
               A31_count++;

              if(A31_count >=3){
                 A31_state += 1;
                 A31_laststate += 1;
                 print(A31_state);
              } 

      }
      else if( A31_count < 3 && A31_state==2 && brickDrawRrecord[16][1] != brickDraw[1] && A22_laststate >1){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[17][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.13;
                brickDraw[6] = canvasY*0.125;
              }
              brickDraw[3]=canvasX*0.658;//x1
              brickDraw[4]=canvasY*0.51;//y1   

               lastBrickDraw="A-3-1";
               print(lastBrickDraw); 
              
               A31_count++;

              if(A31_count >=3){
                 A31_state = 1;
                 A31_laststate += 1;
                 print(A31_state);
              }

       }

      
       if(lastBrickDraw != "A-3-1"){
             A31_count=0;               
       } 
       if(A22_laststate <=1){
          A31_state = 1;
          
       }
      
       if(A31_state == 1){     
            if(brickDrawRrecord[16][1] != brickDraw[1]){
              A31_count=0;
            }         
        } else if (A31_state == 2){

           if(brickDrawRrecord[17][1] != brickDraw[1]){
              A31_count=0;
           }
        }
      
      
      
    } /////////////////////////////////////////////////////////////////////////////////////
    else if(brickDraw[2]=="A-3-2" ){
     
      if( A32_count < 3 && A32_state==1 && brickDrawRrecord[19][1]!=brickDraw[1] && brickDrawRrecord[20][1]!=brickDraw[1]){
                                   
              for(let i =0;i< 7;i++){
                brickDrawRrecord[18][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.14;
                brickDraw[6] = canvasY*0.073;
              }
              brickDraw[3]=canvasX*0.772;//x1
              brickDraw[4]=canvasY*0.333;//y1 
              

               lastBrickDraw="A-3-2";
               print(lastBrickDraw); 
               A32_count++;

              if(A32_count >=3 ){
                 A32_state += 1;
                 A32_laststate +=1;
                 print(A32_state);
                 
              } 

      }
      else if( A32_count < 3 && A32_state==2 && brickDrawRrecord[18][1]!=brickDraw[1] && brickDrawRrecord[20][1]!=brickDraw[1]){
                          
              for(let i =0;i< 7;i++){
                brickDrawRrecord[19][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.14;
                brickDraw[6] = canvasY*0.073;
              }
              brickDraw[3]=canvasX*0.772;//x1
              brickDraw[4]=canvasY*0.419;//y1 
          
        
               lastBrickDraw="A-3-2";
               print(lastBrickDraw); 
              
               A32_count++;

              if(A32_count >=3){
                
                 if(A22_laststate <= 1 ){
                    A32_state = 1;
          
                  } else if(A22_laststate >1){
                    A32_state += 1;       
                 }

                 A32_laststate +=1;
                 print(A32_state);
                 
              }

       } else if( A32_count < 3 && A32_state==3 && A22_laststate >1&& brickDrawRrecord[18][1]!=brickDraw[1] && brickDrawRrecord[19][1]!=brickDraw[1]){

              for(let i =0;i< 7;i++){
                brickDrawRrecord[20][i]=brickDraw[i];
                brickDraw[5] = canvasX*0.14;
                brickDraw[6] = canvasY*0.073;
              }
              brickDraw[3]=canvasX*0.772;//x1
              brickDraw[4]=canvasY*0.493;//y1  

               lastBrickDraw="A-3-2";
               print(lastBrickDraw); 
              
               A32_count++;

              if(A32_count >=3){
                 A32_state = 1;
                 A32_laststate +=1;
                 print(A32_state);
                 
              }

       }//brickLength


      
       if(lastBrickDraw != "A-3-2"){
             A32_count=0;               
       } 

      
       if(A32_state == 1){  
         
            if(brickDrawRrecord[18][1] != brickDraw[1]){
              A32_count=0;
            }   
         
        } else if (A32_state == 2){
          
           if(brickDrawRrecord[19][1] != brickDraw[1]){
              A32_count=0;
              
           }

          
        }else if (A32_state >= 3){

           if(brickDrawRrecord[20][1] != brickDraw[1]){
              A32_count=0;
           }
        }

    }
        
} //紀錄畫布上有的拼圖

let printShareBtn=[];
let printMoreBtn=[];
let showExBtn=[];

let p3_textArea=[];  //[x1,x2,y1,y2,W,L]

function p3textArea(){
  
  p3_textArea[0]=page03step1Block2[1];
  p3_textArea[1]=canvasX;
  p3_textArea[2]=canvasY*0.5;
  p3_textArea[3]=canvasY;
  p3_textArea[4]=p3_textArea[1]-p3_textArea[0];
  p3_textArea[5]=p3_textArea[3]-p3_textArea[2];
  /*
  let inp = createInput('');
  inp.position(p3_textArea[0], p3_textArea[2]);
  inp.size(p3_textArea[4],p3_textArea[5]);
  //inp.noStroke();
  inp.style('background-color', "#FFFFFF");
  inp.input(myInputEvent);
  */
  strokeWeight(1.5);
  stroke('#9E9E9E7C');
  fill(255);
  rect(p3_textArea[0], p3_textArea[2], p3_textArea[4], p3_textArea[5]);
  stroke('#FFC107');
  rect(p3_textArea[0]*1.97, p3_textArea[2]*1.04, p3_textArea[4]*0.53, p3_textArea[5]*0.27);
  rect(p3_textArea[0]*1.97, p3_textArea[2]*1.31, p3_textArea[4]*0.53, p3_textArea[5]*0.27);
  rect(p3_textArea[0]*1.97, p3_textArea[2]*1.58, p3_textArea[4]*0.53, p3_textArea[5]*0.28);
  
  noStroke();
  fill('#D9F4FF');
  rect(p3_textArea[0]*1.15, p3_textArea[2]*1.04, p3_textArea[4]*0.377, p3_textArea[5]*0.14,10);
  rect(p3_textArea[0]*1.15, p3_textArea[2]*1.192, p3_textArea[4]*0.377, p3_textArea[5]*0.28,10);
  rect(p3_textArea[0]*1.15, p3_textArea[2]*1.484, p3_textArea[4]*0.377, p3_textArea[5]*0.274,10);
  rect(p3_textArea[0]*1.15, p3_textArea[2]*1.77, p3_textArea[4]*0.377, p3_textArea[5]*0.2,10);
  

  //text("CONTENT",p3_textArea[0]*2.12, p3_textArea[2]*1.875);
  let areaText2 = ["教","學","計","劃","區"]
  for(let i = 0; i < areaText2.length; i++){
  let textsize_2 = 22;
  textSize(textsize_2);
  strokeWeight(0.5);
  stroke("#DC7E7E");
  fill("#DC7E7E");
  textAlign(LEFT); 
    text(areaText2[i],p3_textArea[0]*1.043, p3_textArea[2]*1.37+i*textsize_2*1.2);
  }
  
  let areaText1 = ["創","造","區"]
  for(let i = 0; i < areaText1.length; i++){
  let textsize_1 = 22;
  textSize(textsize_1);
  strokeWeight(0.5);
  stroke("#DC7E7E");
  fill("#DC7E7E");
  textAlign(LEFT); 
  text(areaText1[i],p3_textArea[0]*1.043, canvasY*0.2+i*textsize_1*1.2);
  }
  //text("教",p3_textArea[0]*2.12, p3_textArea[2]*1.875);
   
  fill('#9E9E9E77'); 
  noStroke();
  rect(p3_textArea[0]*2.12, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
  
  printPlanBtn[0]=p3_textArea[0]*2.45;
  printPlanBtn[1]=p3_textArea[0]*2.45+p3_textArea[4]*0.15;
  printPlanBtn[2]=p3_textArea[2]*1.875;
  printPlanBtn[3]=p3_textArea[2]*1.875+p3_textArea[5]*0.1;
  printPlanBtn_click();
  rect(p3_textArea[0]*2.45, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
   
  fill('#9E9E9E77'); 
  rect(p3_textArea[0]*2.78, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
  
   planText();
}
function p3textArea_2(){
  
  p3_textArea[0]=page03step1Block2[1];
  p3_textArea[1]=canvasX;
  p3_textArea[2]=canvasY*0.5;
  p3_textArea[3]=canvasY;
  p3_textArea[4]=p3_textArea[1]-p3_textArea[0];
  p3_textArea[5]=p3_textArea[3]-p3_textArea[2];
  
  let areaText1 = ["創","造","區"]
  for(let i = 0; i < areaText1.length; i++){
  let textsize_1 = 22;
  textSize(textsize_1);
  strokeWeight(0.5);
  stroke("#DC7E7E");
  fill("#DC7E7E");
  textAlign(LEFT); 
  //text(areaText1[i],p3_textArea[0]*1.043, canvasY*0.45+i*textsize_1*1.2);
  }
  
  text('創造區',canvasX*0.6, canvasY*0.035);
  
  
  //text("教",p3_textArea[0]*2.12, p3_textArea[2]*1.875);
   
  fill('#9E9E9E77'); 
  noStroke();
  
  showExBtn[0]=p3_textArea[0]*1.79;
  showExBtn[1]=p3_textArea[0]*1.79+p3_textArea[4]*0.15;
  showExBtn[2]=p3_textArea[2]*1.875;
  showExBtn[3]=p3_textArea[2]*1.875+p3_textArea[5]*0.1;
  showExBtn_click();
  rect(showExBtn[0], showExBtn[2], p3_textArea[4]*0.15,p3_textArea[5]*0.1,10);
  
  printMoreBtn[0]=p3_textArea[0]*2.12;
  printMoreBtn[1]=p3_textArea[0]*2.12+p3_textArea[4]*0.15;
  printMoreBtn[2]=p3_textArea[2]*1.875;
  printMoreBtn[3]=p3_textArea[2]*1.875+p3_textArea[5]*0.1;
  printMoreBtn_click();
  rect(p3_textArea[0]*2.12, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
  
  printPlanBtn[0]=p3_textArea[0]*2.45;
  printPlanBtn[1]=p3_textArea[0]*2.45+p3_textArea[4]*0.15;
  printPlanBtn[2]=p3_textArea[2]*1.875;
  printPlanBtn[3]=p3_textArea[2]*1.875+p3_textArea[5]*0.1;
  printPlanBtn_click();
  rect(p3_textArea[0]*2.45, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
   
  printShareBtn[0]=p3_textArea[0]*2.78;
  printShareBtn[1]=p3_textArea[0]*2.78+p3_textArea[4]*0.15;
  printShareBtn[2]=p3_textArea[2]*1.875;
  printShareBtn[3]=p3_textArea[2]*1.875+p3_textArea[5]*0.1;
  printShareBtn_click();
  rect(p3_textArea[0]*2.78, p3_textArea[2]*1.875, p3_textArea[4]*0.15, p3_textArea[5]*0.1,10);
  
  planText();
  
  if(showExState==1){
         let ex_scale=0.532;
         image(showExample_img,canvasX*0.38,canvasY*0.2505,canvasX*ex_scale,canvasX*ex_scale*0.4013);
         //print("show ex");
  }
}
let showExState=0;

function showExBtn_click(){
  if(mouseX>=showExBtn[0] && mouseX<=showExBtn[1] && mouseY>=showExBtn[2] && mouseY<=showExBtn[3]){
     if(mouseIsPressed == true){
        showExState=1;
        
      }
     fill('#EBBBB1');
    
  }else{
     fill('#9E9E9E77');      
  }
  
}
function printPlanBtn_click(){
  
  if(mouseX>=printPlanBtn[0] && mouseX<=printPlanBtn[1] && mouseY>=printPlanBtn[2] && mouseY<=printPlanBtn[3]){
     if(mouseIsPressed == true){
        openpdf();
        
      }
     fill('#EBBBB1');
    
  }else{
     fill('#9E9E9E77');      
  }
  
}
function printMoreBtn_click(){
  
  if(mouseX>=printMoreBtn[0] && mouseX<=printMoreBtn[1] && mouseY>=printMoreBtn[2] && mouseY<=printMoreBtn[3]){
     if(mouseIsPressed == true){
        morepdf();
        
      }
     fill('#EBBBB1');
    
  }else{
     fill('#9E9E9E77');      
  }
  
}
function printShareBtn_click(){
  
  if(mouseX>=printShareBtn[0] && mouseX<=printShareBtn[1] && mouseY>=printShareBtn[2] && mouseY<=printShareBtn[3]){
     if(mouseIsPressed == true){
        sharePuzzle();
        
      }
     fill('#EBBBB1');
    
  }else{
     fill('#9E9E9E77');      
  }
  
}

let shareState=0;

function openpdf(){
  window.open("https://drive.google.com/file/d/1VVAIIo2fOJ1T-yyR7CcdQsTkkAsi4qfb/view?usp=sharing");
}
function morepdf(){
  window.open("https://drive.google.com/file/d/1fe_4p2HlJvaexEAQoBJNvIqIxSGMsyHO/view?usp=share_link");
}
function sharePuzzle(){
  shareState=1; 
}

let printPlanBtn=[]; //[0_x1, 1_x2, 2_y1, 3_y2]

function planText(){
  
  let textsize_3 = 12;
  textSize(textsize_3);
  
  
  textSize(14);
  strokeWeight(0.5);
  stroke("#000000");
  fill("#000000");
  let plan_text3 = ["一鍵教程" ,"參考更多教程" , "列印教學計劃","分享全世界"];
  textAlign(CENTER);
  text(plan_text3[1],p3_textArea[0]*2.12+(p3_textArea[4]*0.15)/2, canvasY*0.964);
  text(plan_text3[2],p3_textArea[0]*2.45+(p3_textArea[4]*0.15)/2, canvasY*0.964);
  text(plan_text3[3],p3_textArea[0]*2.78+(p3_textArea[4]*0.15)/2, canvasY*0.964);
  text(plan_text3[0],p3_textArea[0]*1.79+(p3_textArea[4]*0.15)/2, canvasY*0.964);
  textAlign(LEFT);
  textSize(textsize_3);
  
}

let printText=[];
let printText_Left=[];

function printPlanText(){
  
  printText[0]="1.1 動手玩：透過手來觀察主題的變化";
  printText[1]="1.2 觀測APP：透過主題的變化並顯示位置";
  
  printText[2]="1.1 動手玩：透過手來觀察主題的變化";
  printText[3]="1.2 觀測APP：透過主題的變化並顯示位置";
  printText[4]="1.3 影音記錄：用紀錄來了解主題外型變化";
  
  printText[5]="2.1 製作模型：透過動手捏黏土來捏出月相變化形狀";
  printText[6]="2.2 繪製紀錄：使用電腦繪圖方式來畫出月亮紋理、形狀改變";
  printText[7]="2.3 度角測量：學習測量位置的方式，了解月亮與我們的關係" ;
  printText[8]="2.4 數位動畫：透過記錄越形變化並製作成動畫";
  
  printText[9]="3.1 3D列印：透過3D列印的方式來重現月亮的月球表面，並且";
  printText[10]="加入觀察列印月亮表面紋理在模型上";
  printText[11]="3.3 AR擴增實境：透過AR試圖模擬月亮上的樣子";
  printText[12]="3.1 數位投影：結合數位投影來模擬地球與月亮關係";
  ///////////////////////////

  printText_Left[0]="四年級";
  printText_Left[1]="自然課";
  
  printText_Left[2]="1. 認識月亮";
  printText_Left[3]="2. 了解月亮的變化與外觀";
  printText_Left[4]="3. 學習月亮的觀測與移動";
  
  printText_Left[5]="1. 透過觀察讓學生了解月亮的週期以及變化";
  printText_Left[6]="2. 藉由數位製造方式來重現月亮外貌表面";
  printText_Left[7]="3. 實際記錄月像變化來培養觀察紀錄的習慣";
  
  printText_Left[8]="可透過蒐集資訊來了解月亮相關故事傳說，";
  printText_Left[9]="並且學會歸納並表達";

}
function myInputEvent() {
  //console.log('you are typing: ', this.value());
}
//漸層FUNCTION
const Y_AXIS = 1;
const X_AXIS = 2;
function setGradient(x, y, w, h, c_1, c_2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // 从上到下的渐变
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c_1, c_2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // 从左到右的渐变
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c_1, c_2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
  
}
//
function removeAll() {   
  // remove all elements 
  removeElements(); 
}