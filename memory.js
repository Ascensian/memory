/* This is creating a variable called `i` and setting it to 0. */
let i = 0


/* This is creating a div element with the id "memo_box" and appending it to the body of the document. */
var memory_box = document.createElement("div");
memory_box.id = "memo_box";
document.body.appendChild(memory_box)


/* A loop that will create 12 images and add them to the `memo_box` div. */
do {
    var img = document.createElement("img");
    img.src = "images/image.jpg";
    img.style.width = "100px";
    img.style.margin = "1vh"
    document.getElementById("memo_box").appendChild(img)
    i++
} while (i < 12)