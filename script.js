var btn = document.querySelector('button');

var light = document.querySelector('.bulb');

var room = document.querySelector('.main');

var color = 1;
btn.addEventListener("click", function() {

    if(color == 0) {
        light.style.boxShadow ="-10px -10px 45px 20px black"
        light.style.backgroundColor = "rgb(150, 150, 150)";
        room.style.backgroundImage = "none";
        room.style.backgroundColor = "rgba(0, 0, 0, 1000)";
        btn.innerHTML = "ON";
        color = 1;
    }
    else {
        light.style.boxShadow ="-10px -10px 45px 10px white"
        light.style.backgroundColor = "white";
        room.style.backgroundImage = "url('https://media.istockphoto.com/id/1458750230/photo/a-bouquet-of-tulips-on-a-white-table-in-the-background-the-interior-of-a-white-kitchen-in-the.jpg?s=1024x1024&w=is&k=20&c=qCexJ2dAeu-dMZbk7F0iX51mT6wCoz0c2vrBuwU5N9c=')"
        btn.innerHTML = "OFF";
        room.style.backgroundColor = "black";
        color = 0;  
    }
})