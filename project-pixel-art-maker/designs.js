// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let submit = $("#button");
let clear = $("clear");
let canvas = $("#pixelCanvas");

//creates grid based on user input
function makeGrid() {
    let height = $("#inputHeight").val();
    let width = $("#inputWeight").val();

    for(var i = 0; i < height; i++){
        canvas.append("<tr></tr>");
        for(var j = 0; j < width; j++){
            canvas.children("tr").last().append("<td></td>")
        }
        }

    }

//Listens for click on the submit button then it clears any "tr" before calling makeGrid
submit.on("click", function(evn){
    evn.preventDefault();
    $("tr").remove();
    makeGrid();
});

//Selests the color from the color picker and makes it into a value then adds the style to the td
canvas.on("click", function(){
    let color = $("#colorPicker").val();
    $(event.target).css("background-color", color);
});

clear.on("click", function(){
    $("tr").remove();
});
