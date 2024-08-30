// Create a class called BillCalculation to calculate bill amount based on the rate below: 
// Create another class class HouseHold to define the user. Set name and unitsConsumed as two variables of this class
// Set values to these by using constructor. 
// Using Inheritance calculate the bill amount to be paid. 
// For the first 20 units, a lumsum amount of Npr. 80
// For the next 10 units, a rate of Npr. 4.5/unit
// For the next 20 units, a rate of Npr. 5/unit
// For the next 30 units, a rate of Npr. 7.5/unit
// For the next 50 units, a rate of Npr. 10/unit
// for the next 120 units, a rate of Npr. 15/unit
// and for any more then the above, a rate of Npr. 25/unit

// Class representing Household
class HouseHold {
    constructor(name, unitsConsumed) {
        this.name = name;
        this.unitsConsumed = unitsConsumed;
    }
}

// Class for Bill Calculation inherits HouseHold
class BillCalculation extends HouseHold {
    constructor(name, unitsConsumed) {
        super(name, unitsConsumed);
    }

    calculateBill() {
        let units = this.unitsConsumed;
        let billAmount = 0;

        if (units <= 20) {
            billAmount = 80; // Lumsum amount for the first 20 units
        } else if (units <= 30) {
            billAmount = 80 + (units - 20) * 4.5;
        } else if (units <= 50) {
            billAmount = 80 + 10 * 4.5 + (units - 30) * 5;
        } else if (units <= 80) {
            billAmount = 80 + 10 * 4.5 + 20 * 5 + (units - 50) * 7.5;
        } else if (units <= 130) {
            billAmount = 80 + 10 * 4.5 + 20 * 5 + 30 * 7.5 + (units - 80) * 10;
        } else if (units <= 250) {
            billAmount = 80 + 10 * 4.5 + 20 * 5 + 30 * 7.5 + 50 * 10 + (units - 130) * 15;
        } else {
            billAmount = 80 + 10 * 4.5 + 20 * 5 + 30 * 7.5 + 50 * 10 + 120 * 15 + (units - 250) * 25;
        }

        return billAmount;
    }

    displayInfo() {
        return `User: ${this.name}, Units Consumed: ${this.unitsConsumed}, Bill Amount: Npr. ${this.calculateBill().toFixed(2)}`;
    }
}

// Example usage
const household1 = new BillCalculation('John Doe', 275);
console.log(household1.displayInfo()); 

const household2 = new BillCalculation('Jane Smith', 120);
console.log(household2.displayInfo());