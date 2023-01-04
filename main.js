let checkboxes = document.querySelectorAll("input[type='checkbox']")
let lastChecked = null;


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
}
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", clickHandler)
})

