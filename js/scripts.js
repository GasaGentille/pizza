// function Pizza(element){
//     this.element = element;
// }

var item = "";
function getSelectedItem(sel) {
    item = sel.options[sel.selectedIndex].text;
    if(item == "Small"){
        document.querySelector(".small").style.display = "unset";
        document.querySelector(".medium").style.display = "none";
        document.querySelector(".large").style.display = "none";
    }
    if(item == "Medium"){
        document.querySelector(".medium").style.display = "unset";
        document.querySelector(".small").style.display = "none";
        document.querySelector(".large").style.display = "none";
    }
    if(item == "Large"){
        document.querySelector(".large").style.display = "unset";
        document.querySelector(".medium").style.display = "none";
        document.querySelector(".small").style.display = "none";
    }
      
  }
  
  function checkedbutton(smRadioBtn){
    var smRadioBtn = document.querySelectorAll(".sm-radio-btn")
    var sommes = 0; 
    var allItem =""
    for(var i = 0; i < smRadioBtn.length; i++){
        if (smRadioBtn[i].checked == true) { 
            var nextS = smRadioBtn[i].nextSibling.nextSibling;
            var nextS2 = nextS.nextSibling.nextSibling.firstChild.nextSibling;
            var item = nextS.innerText;
            console.log(typeof(item));
            var  price = nextS2;
            var getPrice = price.innerText;
            
            var prs = parseInt(getPrice);
            console.log(typeof(prs));
            allItem += item +":"+getPrice+"+  "
            
            sommes += prs;
            checkOut(item, prs, sommes, allItem)
        }

    }

}
function checkOut(label, amount, total, allItem){
    console.log(label, amount);

    console.log(`Total: ${total}`)
    var btn = document.querySelector(".btn-checkout");
    btn.addEventListener('click', e =>{
        e.preventDefault();
        var result = document.querySelector(".checkout")
        result.innerText = allItem;
        var parag = document.createElement("P");
        parag.innerText = total;
        result.append(parag);

        var deliv = document.createElement("BUTTON");
        deliv.innerText = "Delivary";
        deliv.type = "button";
        deliv.className = "delivar";
        result.append(deliv);

        computeResult(total, allItem);
    });
}

function computeResult(total, allItem){
    document.querySelector(".delivar").addEventListener('click', e=>{
        e.preventDefault();
        var r = confirm("Can we help you for your pizza delivery to your appropriate place?");

        if (r == true) {
            var addr = prompt("Enter your location address");
            if(addr){
                var delivCharge = 0;
                var conf = confirm("you will be charged 2000rw for delivary");
                ///////add
                alert("Your pizza will be delivered to your location")
                if(conf == true){
                    delivCharge = 2000;
                    var grandTotal = total + delivCharge;
                    var summary = "Selected items: " + allItem + " delivery charge: " + delivCharge + " Total amount to be paid: " + grandTotal;
                    var clientAddress = "  to the address: " +addr;
                    var finalResult = document.createElement("DIV");
                    finalResult.className = "final-result";
                    // finalResult.style.cssFloat = "right";
                    finalResult.style.fontFamily = "";
                    finalResult.append(summary);
                    finalResult.append(clientAddress);
                    document.querySelector(".summary").append(finalResult);

                }else{
                    alert("you have concelled the delivery service");
                }
            }else{
                alert("you must enter your location address to get our delivery service");
            }
        } else {
        alert("You pressed Cancel!");
        }
    });
}

          var item = smRadioBtn[i].nextSibling;