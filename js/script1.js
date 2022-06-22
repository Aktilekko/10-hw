class Restaurant {
  served = 0;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  serve() {
    return this.served++;
  }
  setServed(number) {
    return (this.served += number);
  }
  showTotalServed() {
    return `Всего обслужено ${this.served}`;
  }

  info() {
    return ` Ресторан  ${this.name}  ${this.type} кухня`;
  }

  stat() {
    let currentHour = new Date().getHours();
    if (currentHour > 9 && currentHour <= 22) {
      return `${this.name} открыто`;
    } else {
      return `${this.name} закрыто`;
    }
  }
}

const rest = new Restaurant("Via Vinetta", "Europe");
