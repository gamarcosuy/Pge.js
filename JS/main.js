import { validarCedula } from "./logica.js";
import { dptosLocs } from "./datos.js";

class optionTag {
    constructor(value) {
        this.value = `<option value="${value}">${value}</option>`
    }
}

const datalistState = document.getElementById("State")

const StateOption = Object.keys(dptosLocs).map(dep => {
    return new optionTag(dep)
})

for (let i = 0; i < Object.keys(dptosLocs).length; i++){
    datalistState.innerHTML = datalistState.innerHTML + StateOption[i].value
}

const inputState = document.getElementById("inputState")
const datalistLocation = document.getElementById("Location")


inputState.onchange = () => {
    console.log(inputState.value)

    switch (inputState.value) {
            case "Salto":
            const LocationOptionSalto = dptosLocs.Salto.map(loc => {
                return new optionTag(loc)
            })
            for (let i = 0; i < LocationOptionSalto.length; i++){
                datalistLocation.innerHTML = datalistLocation.innerHTML +LocationOptionSalto[i].value
            }
            break;
              case "Canelones":
            const LocationOptionCanelones = dptosLocs.Canelones.map(loc => {
                return new optionTag(loc)
            })
            for (let i = 0; i < LocationOptionCanelones.length; i++){
                datalistLocation.innerHTML = datalistLocation.innerHTML + LocationOptionCanelones[i].value
            }
            break;
              case "Montevideo":
            const LocationOptionMontevideo = dptosLocs.Montevideo.map(loc => {
                return new optionTag(loc)
            })
            for (let i = 0; i < LocationOptionMontevideo.length; i++){
                datalistLocation.innerHTML = datalistLocation.innerHTML +LocationOptionMontevideo[i].value
            }
            break;
            case "Artigas":
                const LocationOptionArtigas = dptosLocs.Artigas.map(loc => {
                    return new optionTag(loc)
                })
                for (let i = 0; i <LocationOptionArtigas.length; i++){
                    datalistLocation.innerHTML = datalistLocation.innerHTML + LocationOptionArtigas[i].value
                }
                break;
        default:
            datalistLocation.innerHTML = null
            break;
    }
}

const inputIdentification= document.getElementById("Identification")

const form = document.getElementById("form")

form.addEventListener("submit", (ev) => {
    if  (!validarIdentification(inputIdentification.value)){
        ev.preventDefault()
        inputIdentification.oninvalid()
}});

