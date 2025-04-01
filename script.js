let finalResult = document.querySelector("#screen")
let calculated = false



function print(num){

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
    let actualeResult = finalResult.innerHTML
    document.querySelector("#screen").innerHTML = actualeResult.substring(0, actualeResult.length -1)
}

function calc(){
    finalResult.innerHTML = eval(finalResult.innerHTML)
    calculated = true

}