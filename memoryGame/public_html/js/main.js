/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function ()
{
    var card = new Array(
            "./img/c1.png", "./img/c1.png", "./img/c2.png", "./img/c2.png", "./img/c3.png",
            "./img/c3.png", "./img/c4.png", "./img/c4.png", "./img/c5.png", "./img/c5.png",
            "./img/c6.png", "./img/c6.png", "./img/c7.png", "./img/c7.png", "./img/c8.png",
            "./img/c8.png", "./img/c9.png", "./img/c9.png", "./img/c10.png", "./img/c10.png",
            "./img/c11.png", "./img/c11.png", "./img/c12.png", "./img/c12.png",
            "./img/d1.png", "./img/d1.png", "./img/d2.png", "./img/d2.png", "./img/d3.png",
            "./img/d3.png", "./img/d4.png", "./img/d4.png", "./img/d5.png", "./img/d5.png",
            "./img/d6.png", "./img/d6.png", "./img/d7.png", "./img/d7.png", "./img/d8.png",
            "./img/d8.png", "./img/d9.png", "./img/d9.png", "./img/d10.png", "./img/d10.png",
            "./img/d11.png", "./img/d11.png", "./img/d12.png", "./img/d12.png",
            "./img/h1.png", "./img/h1.png", "./img/h2.png", "./img/h2.png", "./img/h3.png",
            "./img/h3.png", "./img/h4.png", "./img/h4.png", "./img/h5.png", "./img/h5.png",
            "./img/h6.png", "./img/h6.png", "./img/h7.png", "./img/h7.png", "./img/h8.png",
            "./img/h8.png", "./img/h9.png", "./img/h9.png", "./img/h10.png", "./img/h10.png",
            "./img/h11.png", "./img/h11.png", "./img/h12.png", "./img/h12.png", "./img/h13.png",
            "./img/h13.png",
            "./img/s1.png", "./img/s1.png", "./img/s2.png", "./img/s2.png", "./img/s3.png",
            "./img/s3.png", "./img/s4.png", "./img/s4.png", "./img/s5.png", "./img/s5.png",
            "./img/s6.png", "./img/s6.png", "./img/s7.png", "./img/s7.png", "./img/s8.png",
            "./img/s8.png", "./img/s9.png", "./img/s9.png", "./img/s10.png", "./img/s10.png",
            "./img/s11.png", "./img/s11.png", "./img/s12.png", "./img/s12.png", "./img/s13.png",
            "./img/s13.png");
    var board4 = [["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]];
    var board6 = [["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""]];
    var board8 = [["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""]];
    var board10 = [["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]];
    var store = [["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]];
    var t = 0;
    var row;
    var col;
    var num;
    var num1;
    var click;
    var click1Row = null;
    var click1Col = null;
    var click2Row = null;
    var click2Col = null;
    var timesOfClick = 2;
    var sec;
    
    document.getElementById("reset").onclick = reset;
    document.getElementById("a").onclick = game4x4;
    document.getElementById("b").onclick = game6x6;
    document.getElementById("c").onclick = game8x8;
    document.getElementById("d").onclick = game10x10;
    function game4x4() {
        var n = 0;
        var copyArr = card.concat();
        create(4, 4, 100);
        shuffle(copyArr, 16);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                board4[i][j] = copyArr[n];
                n++;
            }
        }
        for (row = 0; row < 4; row++) {
            for (col = 0; col < 4; col++) {
                store[row][col] = document.getElementById("cell" + row + col);
                store[row][col].passRow = row;
                store[row][col].passCol = col;
                store[row][col].addEventListener("click", function () {
                    passValue4(this.passRow, this.passCol);
                });
            }
        }
    }
    ;
    function game6x6() {
        var n = 0;
        var copyArr = card.concat();
        create(6, 6, 80);
        shuffle(copyArr, 36);
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                board6[i][j] = copyArr[n];
                n++;
            }
        }
        for (row = 0; row < 6; row++) {
            for (col = 0; col < 6; col++) {
                store[row][col] = document.getElementById("cell" + row + col);
                store[row][col].passRow = row;
                store[row][col].passCol = col;
                store[row][col].addEventListener("click", function () {
                    passValue6(this.passRow, this.passCol);
                });
            }
        }
    }
    ;
    function game8x8() {
        var n = 0;
        var copyArr = card.concat();
        create(8, 8, 55);
        shuffle(copyArr, 64);
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                board8[i][j] = copyArr[n];
                n++;
            }
        }
        for (row = 0; row < 8; row++) {
            for (col = 0; col < 8; col++) {
                store[row][col] = document.getElementById("cell" + row + col);
                store[row][col].passRow = row;
                store[row][col].passCol = col;
                store[row][col].addEventListener("click", function () {
                    passValue8(this.passRow, this.passCol);
                });
            }
        }
    }
    ;
    function game10x10() {
        var n = 0;
        var copyArr = card.concat();
        create(10, 10, 39);
        shuffle(copyArr, 100);
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                board10[i][j] = copyArr[n];
                n++;
            }
        }
        for (row = 0; row < 10; row++) {
            for (col = 0; col < 10; col++) {
                store[row][col] = document.getElementById("cell" + row + col);
                store[row][col].passRow = row;
                store[row][col].passCol = col;
                store[row][col].addEventListener("click", function () {
                    passValue10(this.passRow, this.passCol);
                });
            }
        }
    }
    ;
    function passValue4(row, col) {
        if (timesOfClick !== 0) {
            click = document.getElementById("cell" + row + col);
            click.src = board4[row][col];
            timesOfClick--;
        }
        if (timesOfClick === 1) {
            click1Row = row;
            click1Col = col;
        } else if (timesOfClick === 0) {
            click2Row = row;
            click2Col = col;
            compared();
            if (t === 8) {
                win();
            }
        }
    }
    function passValue6(row, col) {
        click = document.getElementById("cell" + row + col);
        click.src = board6[row][col];
        timesOfClick--;
        if (timesOfClick === 1) {
            click1Row = row;
            click1Col = col;
        } else if (timesOfClick === 0) {
            click2Row = row;
            click2Col = col;
            compared();
            if (t === 18) {
                win();
            }
        }
    }
    function passValue8(row, col) {
        click = document.getElementById("cell" + row + col);
        click.src = board8[row][col];
        timesOfClick--;
        if (timesOfClick === 1) {
            click1Row = row;
            click1Col = col;
        } else if (timesOfClick === 0) {
            click2Row = row;
            click2Col = col;
            compared();
            if (t === 32) {
                win();
            }
        }
    }
    function passValue10(row, col) {
        click = document.getElementById("cell" + row + col);
        click.src = board10[row][col];
        timesOfClick--;
        if (timesOfClick === 1) {
            click1Row = row;
            click1Col = col;
        } else if (timesOfClick === 0) {
            click2Row = row;
            click2Col = col;
            compared();
            if (t === 50) {
                win();
            }
        }
    }
    function create(row, col, size) {
        reset();

        sec = setInterval(function () { time(); }, 1000);

        for (num = 0; num < row; num++) {
            for (num1 = 0; num1 < col; num1++) {
                var img = new Image();
                img.src = "./img/back.png";
                img.style.width = size + "px";
                document.getElementById("row" + num).appendChild(img);
                img.setAttribute("id", "cell" + num + num1);
            }
        }
    }
    function compared() {

        Click1 = document.getElementById("cell" + click1Row + click1Col);
        Click2 = document.getElementById("cell" + click2Row + click2Col);

        if (Click1.src !== Click2.src) {
            setTimeout(function () {
                Click1.src = "./img/back.png";
                Click2.src = "./img/back.png";
            }, 1000);
        } else {
            t++;
        }
        setTimeout(function () {
            timesOfClick = 2;
        }, 1000);
    }

    function time() {
        document.getElementById("sec").innerHTML++;
        var time = document.getElementById("sec").innerHTML;
        if(time === "60"){
            document.getElementById("sec").innerHTML = "0";
            document.getElementById("min").innerHTML++;
        }
    }
    
    function reset() {
        clearInterval(sec);
        document.getElementById("win").innerHTML = "";
        t = 0;
        for (num = 0; num < 10; num++) {
            document.getElementById("row" + num).innerHTML = "";
        }
        
        document.getElementById("sec").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
    }
    function shuffle(array, m) {
        var t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
});
function win() {

    document.getElementById("win").innerHTML = "you won";
    document.getElementById("none").style.display = "block";


}