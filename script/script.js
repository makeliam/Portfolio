const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

document.addEventListener("DOMContentLoaded", function() {
  const aboutBtn = document.querySelector('.about-btn a');

  aboutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutSection = document.querySelector(this.getAttribute('href'));
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});

let container = document.querySelector('.container');
for(let i = 1; i <=100; i++){
  let dot = document.createElement('div');
  dot.classList.add('element');
  container.appendChild(dot);
}

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
  targets: dotAll,
  easing: 'easeInOutExpo',
  loop:true,
  delay: anime.stagger(100,{grid:[10,10], from: 'center'})
})
animation
.add({
  rotateZ:180,
  translateY: anime.stagger(-20,{grid:[10,10], from: 'center',axis:'y'}),
  translateX: anime.stagger(-20,{grid:[10,10], from: 'center',axis:'x'}),
  opacity: 1,
})
.add({
  borderRadius: 50,
})
.add({
  scale: 0.2,
  opacity: 0.2,
})
.add({
  rotateZ:180,
  translateY: anime.stagger(0,{grid:[10,10], from: 'center',axis:'y'}),
  translateX: anime.stagger(0,{grid:[10,10], from: 'center',axis:'x'}),
  opacity: 1,
})
.add({
  scale: 1,
  borderRadius: 0,
})
.add({
  rotateZ:-90,
})