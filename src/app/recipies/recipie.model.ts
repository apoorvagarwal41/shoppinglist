export default class Recipie {
  public title: String
  public description: String
  public imagePath: String
  constructor(title, desc, imgPath) {
    this.title = title
    this.description = desc
    this.imagePath = imgPath
  }
}
