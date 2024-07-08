export default class Category {
  constructor(id, name, courses) {
    this.id = id;
    this.name = name;
    this.courses = courses;
  }
  
  static categoriesComplete = []

  static fromJSON(json) {
    const cat = JSON.parse(json);
    return new Category(cat.id, cat.name, cat.courses);
  }
}