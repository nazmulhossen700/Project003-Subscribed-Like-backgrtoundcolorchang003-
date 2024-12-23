

function btn(){
  document.getElementById('btn').innerHTML =
  '<i class="fa-regular fa-bell"></i> Subscribed'
}

// function like(){
//   document.getElementById('like').innerHTML =
//   '<i class="fa-solid fa-thumbs-up"></i> Liked'
// }

document.getElementById('like').onclick = function(){
  document.getElementById('like').innerHTML = 
  '<i class="fa-solid fa-thumbs-up"></i> Liked'
}

const  bgColor = document.getElementById('bgColor')
const bgColorChang = document.querySelector('.bgColorChang')

bgColorChang.addEventListener('click', function(){
  bgColor.style.backgroundColor ='#000'
  bgColorChang.innerHTML = '<i class="fa-solid fa-sun"></i>'
  bgColorChang.style.color ='#fff'
});