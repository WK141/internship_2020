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
//let element_task2 = document.getElementById("task2");
let element_task2 = document.getElementById("task2_star_place");
for(i = 0; i < 25; i++){
    let star_count = document.getElementsByTagName("span").length;
    if(star_count % 5 == 0 && star_count != 0){
        element_task2.insertAdjacentHTML("beforeend", "</br>");
    }
    let star_type = document.getElementById("task2_star_place").textContent.slice(-1);
    if(star_type == "★"){
        element_task2.insertAdjacentHTML("beforeend", "<span>☆</span>");
    }else if(star_count == 0 || star_type == "☆"){
        element_task2.insertAdjacentHTML("beforeend", '<span>★</span>');
    }
}

/*
課題３
*/
//ボタンクリック時の処理
let task3_button_click = document.getElementsByName("button_buy")[0]
task3_button_click.addEventListener('click', function(){
    let element_task3 = document.getElementById("task3_insert_text_place");
    //計算処理
    let money = document.getElementById("input_money").value;
    let select_drink = document.getElementsByName("select_drink")[0].value.split(",")[0];
    let select_drink_price = document.getElementsByName("select_drink")[0].value.split(",")[1];
    if(money >= parseInt(select_drink_price)){
        let change = money - select_drink_price;
        element_task3.textContent=`${select_drink}を購入しました。\nおつりは${change}円です`;
    }else{
        element_task3.textContent="お金が足りません";
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