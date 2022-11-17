import { appState } from "../AppState.js"
import { FavApod } from "../Models/FavApod.js";
import { sandboxApi } from "./AxiosService.js"

class FavsService {

    async getFavs() {
        const res = await sandboxApi.get('api/jsam/apods')
        console.log(res.data, 'getting my favs');
        appState.favs = res.data.map(f => new FavApod(f))
        console.log(appState.favs, 'appstate favs');
    }
    async createFav() {
        // NOTE in our post request, we send whatever tehe 'active' apod is in the appstate to the sandbox
        const res = await sandboxApi.post('api/jsam/apods', appState.apod)
        console.log('creating fav', res.data);
        appState.favs = [...appState.favs, new FavApod(res.data)]
        console.log(appState.favs, 'new appstate fav');

    }

    async deleteFav(favId) {
        const res = await sandboxApi.delete('api/jsam/apods/' + favId)
        console.log(res.data, 'deleting a fav');
        // NOTE this line does the same as lines 27 and 28
        // appState.favs = appState.favs.filter(f=>f.id !=favId)
        let filteredArray = appState.favs.filter(f => f.id != favId)
        appState.favs = filteredArray
    }

}

export const favsService = new FavsService()