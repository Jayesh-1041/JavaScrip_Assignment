const sm1 = document.getElementById('sm1')
const md1 = document.getElementById('md1')
const lg = document.getElementById('lg')
const md2 = document.getElementById('md2')
const sm2 = document.getElementById('sm2')

// buttons
const left_btn = document.getElementById('left_btn')
const right_btn = document.getElementById('right_btn')

const images_array = [
    'https://images.unsplash.com/photo-1619572945516-7598cb601a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIzZG9kZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
    'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg',
    'https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635406.jpg',
    'https://images.unsplash.com/photo-1585355596541-effaec37618d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]


function imagesChange(){  
    sm1.src = images_array[0];
    md1.src = images_array[1];
    lg.src = images_array[2];
    md2.src = images_array[3];
    sm2.src = images_array[4];
}

function shiftLeft() {
    var image = images_array.shift();
    images_array.push(image);
    imagesChange()
}

function shiftRight() {
  var image = images_array.pop();
  images_array.unshift(image);
  imagesChange()
}

imagesChange()

left_btn.addEventListener('click',() => shiftLeft());
right_btn.addEventListener('click',() => shiftRight());