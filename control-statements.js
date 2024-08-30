let action = "edit"
if(action === "Add") {
    //code block
    console.log("Add operation")
} else {
    // else statement
    if(action === "Edit") {
        //code block
        console.log("Edit operation")
    } else {
        // else statement
        if(action === "View") {
            //code block
            console.log("View operation")
        } else {
            // else statement
            if(action === "Delete") {
                //code block
                console.log("Delete operation")
            } else {
                console.log("Invalid operation")
            }
        }
    }
}


//Task 1
//Create a number variable. Assign a random number which should be greater than 0 and less than 500.
//Print if the number is not between the range, otput should be: 'Number should be between 0 to 500'
//Check if the number is even or odd.

let num = 90
 
if (num <= 100){
    if(num % 2 == 0){
        console.log("Number is even")
    }
    else{
        console.log("Number is Odd")
    }
}
else{
    console.log("Number should be between 0 - 100")
}


let x = 400
percentage = 100 * 400 / 500
if (percentage >= 80) {
    console.log("First Division with Distinction")
}else if(percentage >= 60 && percentage <80) {
        console.log("First Division")
}else if(percentage >= 45 && percentage <60) {
    console.log("Second Division")
}else if(percentage >= 35 && percentage <45) {
    console.log("Third Division")
} else {
    console.log("sorrx you are failed")
}


// Task 3
// Create an object data with name and understand as a key.
// Assign some name and some number value(should be greater than 1) to name and unitsConsumed respecetively.
// Calculate the total amount of bill to be paid by household based in the following range/price:
// For the first 20 units, a lumsum amount of Npr. 80
// For the next 10 units, a rate of Npr. 4.5/unit
// For the next 20 units, a rate of Npr. 5/unit
// For the next 30 units, a rate of Npr. 7.5/unit
// For the next 50 units, a rate of Npr. 10/unit
// For the next 120 units, a rate of Npr. 15/unit
// and any more then the above, a rate of Npr. 25/unit

// For check. Consider, if the household consumes 150 units what should be the charge?
// 150
    // 20 => 80
    // 10 units => 45 
    // 20 units => 100 
    // 30 units => 225 
    // 50 units => 500 
    // 20 units => 300
// Total amount = 80 + 45 + 100 + 225 + 500 + 300 = Npr. 1250     

// Define an object for the household
let household = {
    name: "Sujan",
    unitsConsumed: 150
};

// Function to calculate total bill based on units consumed
function calculateBill(units) {
    let totalAmount = 0;

    // First 20 units - Npr. 80 (fixed amount)
    if (units > 20) {
        totalAmount += 80;
        units -= 20;
    } else {
        totalAmount += 80;
        units = 0;
    }

    // Next 10 units - Npr. 4.5 per unit
    if (units > 10) {
        totalAmount += 10 * 4.5;
        units -= 10;
    } else if (units > 0) {
        totalAmount += units * 4.5;
        units = 0;
    }

    // Next 20 units - Npr. 5 per unit
    if (units > 20) {
        totalAmount += 20 * 5;
        units -= 20;
    } else if (units > 0) {
        totalAmount += units * 5;
        units = 0;
    }

    // Next 30 units - Npr. 7.5 per unit
    if (units > 30) {
        totalAmount += 30 * 7.5;
        units -= 30;
    } else if (units > 0) {
        totalAmount += units * 7.5;
        units = 0;
    }

    // Next 50 units - Npr. 10 per unit
    if (units > 50) {
        totalAmount += 50 * 10;
        units -= 50;
    } else if (units > 0) {
        totalAmount += units * 10;
        units = 0;
    }

    // Next 120 units - Npr. 15 per unit
    if (units > 120) {
        totalAmount += 120 * 15;
        units -= 120;
    } else if (units > 0) {
        totalAmount += units * 15;
        units = 0;
    }

    // Any remaining units - Npr. 25 per unit
    if (units > 0) {
        totalAmount += units * 25;
    }

    return totalAmount;
}
