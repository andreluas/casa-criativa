function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document   
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    
}