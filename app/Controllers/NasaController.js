import { appState } from "../AppState.js";
import { nasaService } from "../Services/NasaService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPicture() {
    let apod = appState.apod
    // @ts-ignore
    document.querySelector('body').style.backgroundImage = `url(${apod.imgUrl})`
    // @ts-ignore
    setHTML('details', apod.DetailsTemplate)
    // @ts-ignore
    setText('copyright', apod.copyright)
}

function _setDate(date) {
    let datePicker = document.getElementById('space-date')
    datePicker.value = date
}

export class NasaController {
    constructor() {
        console.log('hello from the nasa contoller');
        this.getApod()
        appState.on('apod', _drawPicture)
    }

    async getApod() {
        try {
            await nasaService.getApod()
            let datePicker = document.getElementById('space-date')
            let ISODate = new Date().toISOString()
            let date = ISODate.substring(0, 10)
            datePicker.value = date
            datePicker.max = date
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async getApodByDate(date) {
        try {
            // console.log('picking the date')
            // @ts-ignore
            if (!date) {

                let dateInput = window.event.target
                // @ts-ignore
                console.log(dateInput.value, 'here is the date value');
                // @ts-ignore
                await nasaService.getApodByDate(dateInput.value)
            } else {
                // NOTE if there is a date supplied in the parameters.... just call the function in the service
                _setDate(date)
                await nasaService.getApodByDate(date)
                bootstrap.Offcanvas.getOrCreateInstance('#favs-offcanvas').hide()
            }
        } catch (error) {
            Pop.error(error.message)
        }
    }
}