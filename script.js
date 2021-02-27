//---------------------------------------------------------------------

TweenMax.to(".wrapper", 2, {
    top: "-110%",
    ease: Expo.easeInOut,
    delay: 0.4
});

TweenMax.from(".title", 2, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".title-main", 2, {
    delay: 1.2,
    y: 90,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".contact-title", 2, {
    delay: 1.4,
    y: 90,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".icons", 2, {
    delay: 1.6,
    y: 90,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".contact-subtitle", 2, {
    delay: 1.8,
    y: 90,
    opacity: 0,
    ease: Expo.easeInOut
});
//---------------------------------------------------------------------



// --------------------------------------------------------------------
 const text = new Blotter.Text('Hello', {
    family: "Montserrat",
    size: 120,
    weight: 700,
    fill: "#121212"
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

let scope = blotter.forText(text);
let elem = document.getElementById('main');
scope.appendTo(elem);

$('.b-canvas').mousemove(function(e) {	
	const formula = ((e.pageX * e.pageY) / 200000) / 1.5;
	// const number = formula.toFixed(1);
	
	material.uniforms.uVolatility.value = formula;
	material.uniforms.uSeed.value = formula;
	
});
	


// ---------------------------------------------------------------------


const copytext = document.querySelector("#copy");
const copytitle = document.querySelector("#copytit");

copytext.onclick = function() {
  document.execCommand("copy");
}; 

copytext.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", copytext.textContent);
      console.log(event.clipboardData.getData("text"))
    }

    copytitle.classList.toggle("active");
    setTimeout(function(){
        copytitle.classList.toggle("active");
    }, 1500)
});

