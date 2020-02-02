let diam, diamextra=1;
let bolas = [];
let linhas = [];
let nLinhas = 7;
let selecionada = [];
let espacamento, firstpointx, firstpointy, targetx, targety, dx, dy, xline, yline, drawing = false, desenhar = false;
let img;

class Bola {
    constructor(xx, yy, diam) {
        this.x = xx;
        this.y = yy;
        this.d = diam;
    }
    desenha() {
        fill(0);
        noStroke();
        circle(this.x, this.y, this.d);
    }
}
class Linha {
    constructor(xx1, yy1, xx2, yy2, weight) {
        this.x1 = xx1;
        this.x2 = xx2;
        this.y1 = yy1;
        this.y2 = yy2;
        this.w = weight;
    }
    desenha() {
        stroke(0);
        strokeWeight(this.w);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    background(255);
    pixelDensity(displayDensity());
    canvas.parent('sketch-holder');
    diam=windowHeight/30;
    espacamento=diam*2.5;
    for (let ya = 0; ya < width / espacamento + 1; ya++) {
        bolas[ya] = [];
        selecionada[ya] = [];
        for (let yo = 0; yo < height / espacamento + 1; yo++) {
            bolas[ya][yo] = new Bola(ya * espacamento, yo * espacamento, diam);
            selecionada[ya][yo] = false;
        }
    }

}

function draw() {
    background(255);
    diamextra=1;
    if(mouseX> bolas[int(width / espacamento) - 3][1].x - diam/2&& mouseX<bolas[int(width / espacamento)-1][1].x +diam/2) {
        if (mouseY < bolas[1][int(height / espacamento) - 1].y + diam / 2&&mouseY>bolas[1][int(height / espacamento) - 3].y - diam / 2) {
            diamextra = 5;
        }
    }
    linhas[0] = new Linha(0, height, width, height, diam + 1);
    linhas[1] = new Linha(0, 0, 0, height, diam + 1);
    linhas[2] = new Linha(0, 0, width, 0, diam + 1);
    linhas[3] = new Linha(width, 0, width, height, diam + 1);
    linhas[4] = new Linha(bolas[int(width / espacamento) - 3][1].x,bolas[1][int(height / espacamento)-2].y,bolas[int(width / espacamento)-1][1].x,bolas[1][int(height / espacamento)-2].y, diam+diamextra);
    linhas[5] = new Linha(bolas[int(width / espacamento) - 2][1].x,bolas[1][int(height / espacamento)-3].y,bolas[int(width / espacamento)-1][1].x,bolas[1][int(height / espacamento)-2].y, diam+diamextra);
    linhas[6] = new Linha(bolas[int(width / espacamento) - 2][1].x,bolas[1][int(height / espacamento)-1].y,bolas[int(width / espacamento)-1][1].x,bolas[1][int(height / espacamento)-2].y, diam+diamextra);
   for (let ya = 0; ya < width / espacamento + 1; ya++) {
        for (let yo = 0; yo < height / espacamento + 1; yo++) {
            if (mouseX > bolas[ya][yo].x - diam / 2 && mouseX < bolas[ya][yo].x + diam / 2 && mouseY > bolas[ya][yo].y - diam / 2 && mouseY < bolas[ya][yo].y + diam / 2) {
                bolas[ya][yo].d=diam+10;
            } else {
                if(!selecionada[ya][yo]) {
                    bolas[ya][yo].d = diam + 1;
                }
            }
            bolas[ya][yo].desenha();
        }
    }
    for (let i = 0; i < linhas.length; i++) {
        linhas[i].desenha();
    }
    if (desenhar) {
        dx = targetx - xline;
        dy = targety - yline;
        xline += dx * 0.2;
        yline += dy * 0.2;
        linhas[nLinhas] = new Linha(firstpointx, firstpointy, xline, yline, diam + 1);
        nLinhas++;
        if (abs(dx) < 5 && abs(dy) < 5) {
            for (let ya = 0; ya < width / espacamento + 1; ya++) {
                for (let yo = 0; yo < height / espacamento + 1; yo++) {
                    selecionada[ya][yo] = false;
                }
            }
            desenhar = false;
        }
    }
}

function mousePressed() {
    if(mouseX> bolas[int(width / espacamento) - 3][1].x - diam/2&& mouseX<bolas[int(width / espacamento)-1][1].x +diam/2) {
        if (mouseY < bolas[1][int(height / espacamento) - 1].y + diam / 2&&mouseY>bolas[1][int(height / espacamento) - 3].y - diam / 2) {
            window.open("/sobre.html", "_self");
        }
    }
    for (let ya = 0; ya < width / espacamento + 1; ya++) {
        for (let yo = 0; yo < height / espacamento + 1; yo++) {
            if (mouseX > bolas[ya][yo].x - diam / 2 && mouseX < bolas[ya][yo].x + diam / 2 && mouseY > bolas[ya][yo].y - diam / 2 && mouseY < bolas[ya][yo].y + diam / 2) {
                if (!drawing && !desenhar) {
                    firstpointx = bolas[ya][yo].x;
                    firstpointy = bolas[ya][yo].y;
                    xline = firstpointx;
                    yline = firstpointy;
                    selecionada[ya][yo] = true;
                    drawing = true;
                } else if (!desenhar) {
                    targetx = bolas[ya][yo].x;
                    targety = bolas[ya][yo].y;
                    selecionada[ya][yo] = true;
                    desenhar = true;
                    drawing = false;
                }
            }

        }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    linhas= [];
    nLinhas=0;
    for (let ya = 0; ya < width / espacamento + 1; ya++) {
        bolas[ya] = [];
        for (let yo = 0; yo < height / espacamento + 1; yo++) {
            bolas[ya][yo] = new Bola(ya * espacamento, yo * espacamento, diam);
        }
    }
}
