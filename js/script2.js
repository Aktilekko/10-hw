class Cars {
  constructor(model, year, engine, color) {
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
  }

  showInfo() {
    return `Марка машины: ${this.model}, Год выпуска: ${this.year}, Mощность двигателя: ${this.engine}, Цвет: ${this.color}  `;
  }
}
class ElectroCars extends Cars {
  constructor(model, year, engine, color, battery) {
    super(model, year, engine, color);
    this.battery = battery;
  }
  showInfo() {
    return `Марка машины: ${this.model}, Год выпуска: ${this.year}, Mощность двигателя: ${this.engine}, Цвет: ${this.color} ,Oбъем аккумулятора ${this.battery} `;
  }
  promote() {
    return `${this.model}-экономный вариант`;
  }
}

const honda = new Cars("Honda Accord", 2002, 143, "серебристый");
console.log(honda.showInfo());

const toyota = new ElectroCars("Prius", 2011, 163, "Белый жемчуг", 2800);
console.log(toyota.showInfo());
console.log(toyota.promote());
