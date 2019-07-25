


// calculator 

let persons = document.querySelectorAll(".counter-block-input")[0],
    restDayes = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById("total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change",function(){
        personsSum = +this.value;  // this.value то что вел пользыватель .
        total = (daysSum + personsSum) * 4000;

        if (restDayes.value == ""){
            totalValue.innerHTML = 0;
        } else{
            totalValue.innerHTML = total;
        }
    });

    restDayes.addEventListener("change",function(){
        daysSum = +this.value;  // this.value то что вел пользыватель .
        total = (daysSum + personsSum) * 4000;

        if (persons.value == ""){
            totalValue.innerHTML = 0;
        } else{
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener("change",function(){
        if (restDayes.value == "" || persons.value == ""){
            totalValue.innerHTML = 0;
        }else{
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });