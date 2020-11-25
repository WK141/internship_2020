/*
課題１
*/
let element_task1 = document.getElementById("task1");
for(let i = 0; i < 5; i++){
    element_task1.insertAdjacentHTML("beforeend", "★");
}

/*
課題２
*/
let element_task2 = document.getElementById("task2");
var i = true;
while(i == true){
    element_task2.insertAdjacentHTML("beforeend", "<span>★</span>");
    judge_multiple_of_5();
    judge_break();
    if(i == false){
        break;
    }else{
        element_task2.insertAdjacentHTML("beforeend", "<span>☆</span>");
        judge_multiple_of_5();
        judge_break();
    }
}

function judge_multiple_of_5(){
    stringCount = document.getElementsByTagName("span").length;
    if(stringCount % 5 == 0){
        element_task2.insertAdjacentHTML("beforeend", "</br>");
    }
}
function judge_break(){
    stringCount = document.getElementsByTagName("span").length;
    if(stringCount > 24){
        i = false;
    }
}

/*
課題３
*/
//ボタンクリック時の処理
document.getElementsByName("button_buy")[0].addEventListener('click', function(){
    let element_task3 = document.getElementById("task3");
    //前回挿入したテキストの削除
    let delete_target = document.getElementById("insert_text");
    if(delete_target != null){
        delete_target.remove();
    }
    //計算処理
    let money = document.getElementsByName("input_money")[0].value;
    let select_drink = document.getElementsByName("select_drink")[0].value.split(",")[0];
    let select_drink_price = document.getElementsByName("select_drink")[0].value.split(",")[1];
    if(money >= parseInt(select_drink_price)){
        let change = money - select_drink_price;
        element_task3.insertAdjacentHTML("beforeend", '<span id="insert_text">' + select_drink + "を購入しました。<br/>おつりは" + change + "円です</span>");
    }else{
        element_task3.insertAdjacentHTML("beforeend", '<span id="insert_text"> お金が足りません</span>')
    }
}, false);

/*
発展
*/
//フォームに入力したときに動く処理
let input_money = document.getElementsByName("input_money")[1];
input_money.addEventListener('input', function(){
    for (let i = 0; i < 4; i++) {
        let drink = document.getElementsByName("drink")[i];
        let drink_price = drink.value.split(",")[1];
        //入力された金額によってラジオボタンを活性化
        if(input_money.value >= drink_price){
            drink.disabled  = false;
        }
    }
});