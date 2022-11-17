import { appState } from "../AppState.js"
import { favsService } from "../Services/FavsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawFavs() {
    let template = ''
    appState.favs.forEach(f => template += f.FavoriteTemplate)
    setHTML('favorites', template)
}


export class FavsController {
    constructor() {
        console.log('hello from the favs controller')
        this.getFavs()
        appState.on('favs', _drawFavs)
    }

    async createFav() {
        try {
            await favsService.createFav()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async getFavs() {
        try {
            console.log('getting my favs')
            await favsService.getFavs()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async deleteFav(favId) {
        // console.log('deleting a fav', favId);
        try {
            if (await Pop.confirm()) {
                await favsService.deleteFav(favId)
            }
        } catch (error) {
            Pop.error(error.message)
        }
    }
}