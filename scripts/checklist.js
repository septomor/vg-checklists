cb = Array.from(document.getElementsByTagName("input"))

cb.forEach(function callback(e) {
    e.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            e.parentElement.parentElement.bgColor = "rgb(60,140,47)";
        }
        else {
            e.parentElement.parentElement.bgColor = "";
        }
    })
})