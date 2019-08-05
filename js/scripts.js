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
            var item = smRadioBtn[i].nextSibling;
            //console.log(item);
            var  price = nextS.firstChild.nextSibling;
            var prix = price.innerText;
            
            var prs = parseInt(prix);
            var btn = document.createElement("P");
            btn.innerText = item;
            var result = document.querySelector(".checkout");
            result.innerHTML = btn;
            sommes += prs;
            checkOut(item, prs, sommes, allItem)
        }

    }

        //console.log(sommes);
} 
// JSON.stringify(label)
function checkOut(label, amount, total){
    console.log(label, amount);

    console.log(`Total: ${total}`)
    var btn = document.querySelector(".btn-checkout");
    btn.addEventListener('click', e =>{
        e.preventDefault();
        var result = document.querySelector(".checkout")
        result.innerText = allItem;
    })
}
