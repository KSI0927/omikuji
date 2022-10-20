/*テンキー数値入力用*/
function n1(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    var object2 = document.getElementById("num1").textContent;
    var sub3 = document.getElementById("cal").textContent;
    var num4 = document.getElementById("num2").textContent;
    if(object2 =="iii"){/**iiiが一つ目に合ったらそれを消去したいけどできない。 iiiがあってもそれを認識しない */
        object.textContent = 1;
        }else{
     object.innerText += 1;/**通常時は値を追加していく */
        }
    }

function n2(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 2;
    }else{
    object.innerText += 2;
    }
    }

function n3(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 3;
    }else{
    object.innerText += 3;
    }
    }

function n4(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 4;
    }else{
    object.innerText += 4;
    }
    }

function n5(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 5;
    }else{
    object.innerText += 5;
    }
    }

function n6(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 6;
    }else{
    object.innerText += 6;
    }
    }

function n7(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 7;
    }else{
    object.innerText += 7;
    }
    }

function n8(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 8;
    }else{
    object.innerText += 8;
    }
    }

function n9(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 9;
    }else{
    object.innerText += 9;
    }
    }

function n0(){
    var object = document.getElementById("num1");
    if(object == "iii"){
        object.innerText = 0;
    }else{
    object.innerText += 0;
    }
    }

/*テンキー計算記号入力用*/    
function addition(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    sub.innerText = "+";/**計算記号を格納 */
    var object2 = document.getElementById("num1").textContent;
    num3.innerText = object2;/**一つ目の値に格納されていた値を二つ目の値に格納する */
    var total = document.getElementById("total");
    var totalv = document.getElementById("total").textContent;
    if(totalv != ""){/**もし計算結果の部分が空欄でないならそれを二つ目の値に格納して合計を消去する */
        num3.innerText = totalv;
        total.innerText ="";
    }
    object.innerText="";
    }
    
function subtraction(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    sub.innerText = "-";/**計算記号を格納 */
    var object2 = document.getElementById("num1").textContent;
    num3.innerText = object2;/**一つ目の値に格納されていた値を二つ目の値に格納する */
    var total = document.getElementById("total");
    var totalv = document.getElementById("total").textContent;
    if(totalv != ""){/**もし計算結果の部分が空欄でないならそれを二つ目の値に格納して合計を消去する */
        num3.innerText = totalv;
        total.innerText ="";
    }
    object.innerText="";
    }
    
function multiplication(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    sub.innerText = "*";/**計算記号を格納 */
    var object2 = document.getElementById("num1").textContent;
    num3.innerText = object2;/**一つ目の値に格納されていた値を二つ目の値に格納する */
    var total = document.getElementById("total");
    var totalv = document.getElementById("total").textContent;
    if(totalv != ""){/**もし計算結果の部分が空欄でないならそれを二つ目の値に格納して合計を消去する */
        num3.innerText = totalv;
        total.innerText ="";
    }
    object.innerText="";
    }

function division(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    sub.innerText = "/";/**計算記号を格納 */
    var object2 = document.getElementById("num1").textContent;
    num3.innerText = object2;/**一つ目の値に格納されていた値を二つ目の値に格納する */
    var total = document.getElementById("total");
    var totalv = document.getElementById("total").textContent;
    if(totalv != ""){/**もし計算結果の部分が空欄でないならそれを二つ目の値に格納して合計を消去する */
        num3.innerText = totalv;
        total.innerText ="";
    }
    object.innerText="";
    }
/**合計計算ボタン*/
function total(){
    /**一つ目の値、計算記号、二つ目の値、計算結果を読み取る */
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    var object2 = document.getElementById("num1").textContent;
    var sub3 = document.getElementById("cal").textContent;
    var num4 = document.getElementById("num2").textContent;
    /**一つ目の値、二つ目の値の型を文字列型から数値型に変換する */
    var objectn = parseInt(object2);
    var num3n = parseInt(num4);
    /**計算結果の値を読み取る */
    var total = document.getElementById("total");
    var totalv = document.getElementById("total").textContent;
    /**計算記号を参照して実際に計算を行う */
    if(sub3 == "+"){
        total.innerText=(num3n + objectn);
    } else if (sub3 == "-"){
        if( num3n < objectn){/**もし一つ目の値num3よりも二つ目の値objectnが大きかったら不正扱い */
                alert("不正な値です。");/** */
                object.innerText="";/** 二つ目の値を削除*/
        } else{
            total.innerText=(num3n - objectn);
    }
    } else if (sub3 == "*"){
        total.innerText=(num3n * objectn);
    } else if (sub3 == "/"){
        if( objectn == 0 || num3n == 0){/** もし値のどちらかが0ならば不正扱い*/
            alert("不正な値です。");
            object.innerText="";/** */
    } else{
        total.innerText=(num3n / objectn);
}
    }
       
}
/**初期化ボタン*/
function reset(){
    var object = document.getElementById("num1");
    var sub = document.getElementById("cal");
    var num3 = document.getElementById("num2");
    var total = document.getElementById("total");
    object.innerText="";
    sub.innerText="";
    num3.innerText="";
    total.innerText="";
}