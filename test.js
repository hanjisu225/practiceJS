
let money=0
function buy(price) {
    if(money == 0 || money < price) alert("돈부족!");
    else {
        switch(price) {
            case 1800:
                money -= price;
                alert("허니버터칩 구매");
                setMoney(0);
                break;
            case 1500:
                money -= price;
                alert("김치만두 구매");
                setMoney(0);
                break;
            case 800:
                money -= price;
                alert( "옥수수브이콘 구매");
                setMoney(0);
                break;
            default:
                break;
        }
    }
}
function setMoney(won) {
    money += won;
    document.getElementById("main").innerHTML = "현재 잔액 :"+money+"원"
    isBuy();
}
function isBuy() {
    if(money >= 1800) {
        document.getElementById("buy1").style.color="blue";
        document.getElementById("buy2").style.color="blue";
        document.getElementById("buy3").style.color="blue";
    }
    else if(money >= 1500) {
        document.getElementById("buy1").style.color="red";
        document.getElementById("buy2").style.color="blue";
        document.getElementById("buy3").style.color="blue";
    }
    else if(money >= 800) {
        document.getElementById("buy1").style.color="red";
        document.getElementById("buy2").style.color="red";
        document.getElementById("buy3").style.color="blue";
    }
    else {
        document.getElementById("buy1").style.color="red";
        document.getElementById("buy2").style.color="red";
        document.getElementById("buy3").style.color="red";
    }
}