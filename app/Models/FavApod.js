export class FavApod {
    constructor(data) {
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.date = data.date
        this.user = data.user
    }

    get FavoriteTemplate() {
        return /*html*/`       <div class="col-12">
            <img src="${this.imgUrl}" class="img-fluid" alt="" onclick="app.nasaController.getApodByDate('${this.date}')">
            <div class="d-flex justify-content-between">
              <i class="mdi mdi-delete selectable" onclick="app.favsController.deleteFav('${this.id}')"></i>
              <p class="text-shadow">${this.date}</p>
            </div>
          </div>`
    }

}