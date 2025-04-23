let finalResult = document.querySelector("#screen")
const buttonPlus = document.querySelector("#plus").innerHTML
const buttonTimes = document.querySelector("#times").innerHTML
const buttonMinus = document.querySelector("#minus").innerHTML
const buttonDivide = document.querySelector("#divide").innerHTML
const dot = document.querySelector("#num-dot").innerHTML

let calculated = false



function print(num){

    if(num === buttonPlus || num === buttonDivide || num === buttonTimes || num === buttonMinus || num === dot){
        calculated = false
        

    }


    if(calculated){
        document.querySelector("#screen").innerHTML = ""
        calculated = false
    }
  

    if(finalResult.innerHTML.length <= 16 ){
        let number = document.querySelector("#screen").innerHTML
        finalResult.innerHTML = number + num
    }
 
}

function cleanAll(){
    finalResult.innerHTML = ""
}

function backSpace() {
        calculated = false
        let actualeResult = finalResult.innerHTML
        document.querySelector("#screen").innerHTML = actualeResult.substring(0, actualeResult.length -1)
}

function calc(){
    finalResult.innerHTML = eval(finalResult.innerHTML)
    calculated = true

}