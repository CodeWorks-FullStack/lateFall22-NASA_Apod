export class NasaApod {
    constructor(data) {
        this.date = data.date
        this.explanation = data.explanation
        this.imgUrl = data.url
        this.title = data.title
        this.copyright = data.copyright || 'NASA'
    }

    get DetailsTemplate() {
        return /*html*/`      <div class="col-6 text-shadow">
        <div class="text-end apod-header">
          <H1>${this.title}</H1>
          <h2>${this.date}</h2>
        </div>
        <p class="apod-body">${this.explanation}</p>
      </div>`
    }

}