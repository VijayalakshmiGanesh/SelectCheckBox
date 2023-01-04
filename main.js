let checkboxes = document.querySelectorAll("input[type='checkbox']")
let lastChecked = null;
let result = document.querySelector(".result")


function displayResult(){
    let resultValuesSet = new Set();
    checkboxes.forEach(checkbox =>{
        if(checkbox.checked)
            resultValuesSet.add(checkbox.value)
    })
    result.innerHTML="The Selected values are: <br/><ul>"
    resultValuesSet.forEach( value => result.innerHTML+=`<li>${value}</li>`)
    result.innerHTML+=`</ul>`
}
function clickHandler(e) {
    let inbetween = false;

    //Check if we are holding the shift key and checking the checkbox
    if (e.shiftKey && this.checked && lastChecked != null) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked)
                inbetween = !inbetween; //Finding the checkbox that are in between

            if (inbetween)
                checkbox.checked = true;
        })
    }
    lastChecked = this;
    displayResult()
}

checkboxes.forEach(checkbox => { 
    checkbox.addEventListener("click", clickHandler)
})



