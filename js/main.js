let result

fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    result = data
    document.querySelector("#slipID").innerHTML = result.slip.id;
    document.querySelector("#slipAdvice").innerHTML = result.slip.advice;
  })
  .catch(err => {
    console.log(`error ${err}`)
  })

document.querySelector("#button").addEventListener("mouseover", addShadow)
document.querySelector("#button").addEventListener("mouseout", removeShadow)


function addShadow() {
  // console.log("Clicked")
  document.querySelector("#button").style.boxShadow = "0 0 40px hsl(150deg 100% 66%)";
}

function removeShadow() {
  // console.log("Clicked")
  document.querySelector("#button").style.boxShadow = "0 0 0px hsl(150deg 100% 66%)";
}