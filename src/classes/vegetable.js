export class Vegetable {
  constructor(vegType, counter) {
    this.vegType = vegType;
    this.layer = counter;
  }

  addToSalad() {
    let saladBowl = document.getElementById('salad');
    for(let i=0; i<1; i++) {
      let newVeg = `<div class='salad-vegetable'
                         style="bottom: 100vh; left: ${10 * (i + 2)}vw; transition: transform 2s linear;"
                         data-veg='${this.vegType}'></div>`;
      $(saladBowl).append(newVeg);
    }
  }
};
