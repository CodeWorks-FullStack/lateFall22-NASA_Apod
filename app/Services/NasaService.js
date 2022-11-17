import { appState } from "../AppState.js";
import { NasaApod } from "../Models/NasaApod.js";
import { NasaApi } from "./AxiosService.js"

class NasaService {
    async getApodByDate(date) {
        // console.log('apod by date service', date);
        const res = await NasaApi.get('apod?date=' + date)
        // console.log(res.data, 'get by date');
        appState.apod = new NasaApod(res.data)
        console.log(appState.apod, 'get by date');

    }
    async getApod() {
        const res = await NasaApi.get('apod')
        // console.log(res.data, 'getting apod');
        appState.apod = new NasaApod(res.data)
        console.log(appState.apod, 'appstate apod');
    }

}

export const nasaService = new NasaService()