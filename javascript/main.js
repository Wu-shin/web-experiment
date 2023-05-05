let demo = document.getElementById("content")
console.log(demo)

// function 可改變文字顏色
function changecolor(number){
    switch (number){
        case 1:
            demo.style.color = "red";
            break;
        case 2:
            demo.style.color = "blue";
            break;
        case 3:
            demo.style.color = "green";
            break;
        case 4:
            demo.style.color = "#646464";
            break;
    }
    
}

jQuery(document).ready(function() {
    $('#top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
    })
});
