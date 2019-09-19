function Figure (){
    
}
Figure.prototype.draw= function (){};

function Line(x1,y1,x2,y2,color){
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
    this.color=color;
}
Line.prototype = Object.create(Figure.prototype); 
Line.prototype.constructor = Line;
Line.prototype.draw=function(context){
        context.beginPath();
        context.moveTo(this.x1,this.y1);
        context.lineTo(this.x2,this.y2);
        context.strokeStyle = this.color;
        context.stroke();
    }


function Rect (x, y, w, h, color,fill,transp){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;
    this.fill=fill;
    this.transp=transp;
}
Rect.prototype = Object.create(Figure.prototype); 
Rect.prototype.constructor = Rect;
Rect.prototype.draw=function(context){
        context.beginPath();
        if (this.transp)
        context.globalAlpha = this.transp;
        if (this.fill){
            context.fillStyle = this.color;
            context.fillRect(this.x,this.y,this.w,this.h);
        }  
        else{
            context.strokeStyle = this.color;
            context.strokeRect(this.x,this.y,this.w,this.h);
            }
    }

function Circle (x,y,r,color,trans) {
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;
    this.trans=trans;
}
    Circle.prototype = Object.create(Figure.prototype); 
    Circle.prototype.constructor = Circle;
    Circle.prototype.draw=function(context){
        context.beginPath();
        if(this.trans){
            context.globalAlpha = this.trans;
        }
        context.fillStyle = this.color;
        context.strokeStyle=this.color;
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        context.fill();
        context.stroke();
    }

function Canvas (id){
    var canvas= document.getElementById(id), 
    context = canvas.getContext("2d");

    this.add=function(... elements){
        for (let i=0; i<elements.length;i++)
        elements[i].draw(context);
    }
}

var line = new Line(58, 255, 208, 205, '#dcdcdc'); 
var line2 = new Line(68, 264, 218, 214, '#dcdcdc'); 
let bigRect=new Rect (5,5,500,305,'f8f8f8',false,0);
let marineRect = new Rect (268,136,60,120,'#cfffe2',true,0);
let yellowRect=new Rect(368,155,60,40,'#fbf7bd',true,0);
let roseRect=new Rect (288,126,100,50, '#EBCDE8',true, 0.5);
let smallCircle=new Circle(106,80,35,'#CFEAFF',0.5);
let bigCircle=new Circle(127,127,50,'#CFEAFF',0.5);

var drawArea = new Canvas('myCanvas');
drawArea.add(line,line2);
drawArea.add(smallCircle, bigCircle);
drawArea.add(bigRect,marineRect,yellowRect,roseRect);

let poly;
for (let i=5; i<505; i+=20){
    poly=new Line (i, 5, i+10, 15, "red");
    drawArea.add(poly);
    poly=new Line (i+10, 15, i+20, 5, "red");
    drawArea.add(poly);
}

// by Classes

class FigureClass 
{
    constructor(){}
    draw(){};
}

class LineClass extends FigureClass {
    constructor (x1,y1,x2,y2,color){
        super();
        this.x1=x1;
        this.x2=x2;
        this.y1=y1;
        this.y2=y2;
        this.color=color;
    }
    draw(context){
        context.beginPath();
        context.moveTo(this.x1,this.y1);
        context.lineTo(this.x2,this.y2);
        context.strokeStyle = this.color;
        context.stroke();
    }
}

class RectClass extends Figure{
    constructor (x, y, w, h, color,fill,transp){
        super();
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.color=color;
        this.fill=fill;
        this.transp=transp;
    }
    draw(context){
        context.beginPath();
        if (this.transp)
        context.globalAlpha = this.transp;
        if (this.fill){
            context.fillStyle = this.color;
            context.fillRect(this.x,this.y,this.w,this.h);
        }  
        else{
            context.strokeStyle = this.color;
            context.strokeRect(this.x,this.y,this.w,this.h);
            }
    }
}

class CircleClass extends Figure{
    constructor(x,y,r,color,trans) {
        super();
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.trans=trans;
    } 
    draw(context){
        context.beginPath();
        if(this.trans){
            context.globalAlpha = this.trans;
        }
        context.fillStyle = this.color;
        context.strokeStyle=this.color;
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        context.fill();
        context.stroke();
    }
}

class CanvasClass{
    constructor(id){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
    }
    add(... elements){
        for (let i=0; i<elements.length;i++)
        elements[i].draw(this.ctx);
    }
}

var lineCl = new LineClass(58, 255, 208, 205, '#dcdcdc'); 
var lineCl2 = new LineClass(68, 264, 218, 214, '#dcdcdc'); 
let bigRectCl=new RectClass (5,5,500,305,'f8f8f8',false,0);
let marineRectCl = new RectClass (268,136,60,120,'#cfffe2',true,0);
let yellowRectCl=new RectClass(368,155,60,40,'#fbf7bd',true,0);
let roseRectCl=new RectClass (288,126,100,50, '#EBCDE8',true, 0.5);
let smallCircleCl=new CircleClass(106,80,35,'#CFEAFF',0.5);
let bigCircleCl=new CircleClass(127,127,50,'#CFEAFF',0.5);

var drawArea1 = new CanvasClass('mySecondCanvas');
drawArea1.add(lineCl,lineCl2);
drawArea1.add(smallCircleCl, bigCircleCl);
drawArea1.add(bigRectCl,marineRectCl,yellowRectCl,roseRectCl);


for (let i=5; i<505; i+=20){
    poly=new Line (i, 5, i+10, 15, "red");
    drawArea1.add(poly);
    poly=new Line (i+10, 15, i+20, 5, "red");
    drawArea1.add(poly);
}