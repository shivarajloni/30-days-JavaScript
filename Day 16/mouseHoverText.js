const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px            intially: 100 

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    const { offsetWidth: width, offsetHeight: height } = hero;              // ES6- simplied code compared to above!
    let { offsetX: x, offsetY: y } = e;

    // console.log(x, y);
    // console.log(this, e.target);

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    // console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // text.style.textShadow = `10px 10px 0 red`;
    
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

  }

  hero.addEventListener('mousemove', shadow);