// BOTTEGA DINER 

const bottegaMenu = {
    breakfast:{
        mainCourses: {
            "Eggs": 10,
            "Pancakes": 9,
            "Cereals": 10 
        },
        sideDishes: { 
            "Bacon": 4,
            "Fruit": 3,
            "Yogurt": 2,
            "Bakery": 3  
        },
        beverages: { 
          "Soda": 2,
          "Wine": 4,
          "Fruit juice": 2,
          "Shake": 4
        }
    },
    lunch:{
        mainCourses: {
            "Grilled Steak": 10,
            "Lasagna": 8,
            "Rissoto": 8,
            "Salmon Teriyaki": 10
        },
        sideDishes: { 
            "French fries": 2,
            "Green Salad": 4,
            "Tomato Soup": 4,
            "Garlic Bread": 2
        },
        beverages: { 
          "Soda": 2,
          "Wine": 4,
          "Fruit juice": 2,
          "Shake": 4
      }
    },
    //dinner price 50% more expensive than lunch price (--> lunch price * 1.5)
    dinner:{  
        mainCourses: {
            "Grilled Steak": 15,
            "Lasagna": 12,
            "Rissoto": 12,
            "Salmon Teriyaki": 15
          },
        sideDishes: { 
            "French fries": 3,
            "Green Salad": 6,
            "Tomato Soup": 6,
            "Garlic Bread": 3
          },
          beverages: { 
            "Soda": 2,
            "Wine": 4,
            "Fruit juice": 2,
            "Shake": 4
        }
    }
};

// Funtion to get random comment (pulled from a comment vault):

function generateComment() {
    const comments = [
        "Great choice!",
        "Awesome choice!",
        "Excellent choice!",
        "You're going to love it!",
        "You're going to love it!",
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}

// Function to show menu (Main courses + Side dishes):

function showMenu(typeMenu) {
  
    const mainCourses = Object.keys(bottegaMenu[typeMenu].mainCourses);
    const sideDishes = Object.keys(bottegaMenu[typeMenu].sideDishes);
    const beverages = Object.keys(bottegaMenu[typeMenu].beverages);
  
    let printMenu = `Our ${typeMenu.toUpperCase()} menu includes: (1) main course, (1) side and (1) drink of your choice. Free coffee/tea is included.\n`;
    printMenu += ".............................................................................\n";    
    printMenu += "MAIN COURSE (select ONE):\n"; 
    mainCourses.forEach((item, index) => {
    printMenu += `${index + 1}. ${item} - €${bottegaMenu[typeMenu].mainCourses[item]}\n`;
    });
    printMenu += "\nSIDES (select TWO):\n";
    printMenu += ".............................................................................\n";
    sideDishes.forEach((item, index) => {
      printMenu += `${index + 1}. ${item} - €${bottegaMenu[typeMenu].sideDishes[item]}\n`;
    });
    printMenu += "\nBEVERAGES (select ONE):\n";
    printMenu += ".............................................................................\n";
    beverages.forEach((item, index) => {
    printMenu += `${index + 1}. ${item} - €${bottegaMenu[typeMenu].beverages[item]}\n`;
    });
      alert(printMenu);
  }

// Funtion to get the total price:

function getTotalPrice(mainCourse, sideDishOne, beverage, typeMenu) {
    const mainCoursePrice = bottegaMenu[typeMenu].mainCourses[mainCourse];
    const sideDishOnePrice = bottegaMenu[typeMenu].sideDishes[sideDishOne];
    const beveragePrice = bottegaMenu[typeMenu].beverages[beverage];
    // Check if dishes are on the menu.
    if (mainCoursePrice === undefined || sideDishOnePrice === undefined ||  beveragePrice === undefined) {
      throw new Error("The selected dish/dishes are not in the menu.");
    }
  
    const totalPrice = mainCoursePrice + sideDishOnePrice + beveragePrice;
    return totalPrice;
  }


// Function to order MAIN course:

function orderMainCourse(typeMenu) {
    const mainCourses = Object.keys(bottegaMenu[typeMenu].mainCourses);
    let order = prompt("Please select (ONE) main course: enter the dish number:\n" + mainCourses.map((item, index) => `${index + 1}. ${item}`).join("\n")).toLowerCase(); 
  
    // Check if order is a number
    if (!isNaN(order)) {
        const index = parseInt(order) - 1;
        if (index >= 0 && index < mainCourses.length) {
            alert(generateComment());
            return mainCourses[index];
      }
    }
  
    // Check if order is in the menu
    if (!mainCourses.includes(order)) {
      alert("That option is not in the menu. Please, try again. Enter only the dish number (e.g.:  8. dishname, enter -->  8 ).");
      return orderMainCourse(typeMenu); // Ask again until correct option entered.
    }
   return order;
  }


// Function to order SIDE dish (ONE):

function ordersideDishOne(typeMenu) {
    const sideDishes = Object.keys(bottegaMenu[typeMenu].sideDishes);
    let order = prompt("Remember you have (2) sides included. Please select your FIRST SIDE dish: entering the dish number:\n" + sideDishes.map((item, index) => `${index + 1}. ${item}`).join("\n")).toLowerCase(); 
  
    // Check if order is a number
    if (!isNaN(order)) {
      const index = parseInt(order) - 1;
      if (index >= 0 && index < sideDishes.length) {
        alert("Perfect! You chose your first side dish.");
        return sideDishes[index];
      }
    }
  
    // Checkk if order is in the menu
    if (!sideDishes.includes(order)) {
      alert("That option is not in the menu. Please, try again. Enter only the dish number (e.g.:  8. dishname, enter -->  8 ).");
      return ordersideDishOne(typeMenu); // Ask to select again!!!
    }
  
    return order;
  }

  // Function to order BEVERAGE:

function orderBeverage(typeMenu) {
  const beverages = Object.keys(bottegaMenu[typeMenu].beverages);
  let order = prompt("Apart from coffee and tea which are free included, what would you like to drink? Please select your beverage entering the drink number:\n" + beverages.map((item, index) => `${index + 1}. ${item}`).join("\n")).toLowerCase(); 

  // Check if order is a number
  if (!isNaN(order)) {
    const index = parseInt(order) - 1;
    if (index >= 0 && index < beverages.length) {
      alert(generateComment());
      return beverages[index];
    }
  }

  // Check if order is in the menu
  if (!beverages.includes(order)) {
    alert("That option is not in the menu. Please, try again. Enter only the dish number (e.g.:  8. dishname, enter -->  8 ).");
    return orderBeverage(typeMenu); // Ask to select again!!!
  }
  return order;
}

// Funtion to get bill:

  function getBill(typeMenu) {
    showMenu(typeMenu);
    const mainCourse = orderMainCourse(typeMenu);
    const sideDishOne = ordersideDishOne(typeMenu);
    const beverage = orderBeverage(typeMenu);

    const mainCoursePrice = bottegaMenu[typeMenu].mainCourses[mainCourse];
    const sideDishOnePrice = bottegaMenu[typeMenu].sideDishes[sideDishOne];
    const beveragePrice = bottegaMenu[typeMenu].beverages[beverage];
    const totalPrice = getTotalPrice(mainCourse, sideDishOne, beverage, typeMenu);
    
  let printBill = "BOTTEGA DINER BILL:\n";
  printBill += "*****************************\n";
  printBill += `\nMain Course: ... ${mainCourse.toUpperCase()}........€${mainCoursePrice} \n`; 
  printBill += `\nSide Dish: ... ${sideDishOne.toUpperCase()}........ €${sideDishOnePrice} \n`;
  printBill += `\nBeverage: ... ${beverage.toUpperCase()}........€${beveragePrice} \n`;
  printBill += "---------------------------------------------------------------------------\n";   
  printBill += `\nTOTAL PRICE (taxes included): .................€${totalPrice}\n`;
  printBill += `\nENJOY YOUR ${typeMenu.toUpperCase()}!\n`;
  printBill += "\nThank you for coming! See you again soon!";
    alert(printBill)
}
    
// -------------------START HERE--------------Ask user to enter the time:
let typeMenu;
while (true) {
    const userInput = prompt("Welcome to BOTTEGA´s DINNER!\nWhat time is it? Please enter the time in 24-hour format (from 1 to 24):");
    const userHour = parseInt(userInput);

    if (userHour >= 7 && userHour <= 11) {
        typeMenu = "breakfast";
      alert ("Thanks! You can order BREAKFAST until 11a.m.");
        break;
    } else if (userHour >= 13 && userHour <= 15) {
        typeMenu = "lunch";
       alert ("Thanks! You can order LUNCH until 3p.m.");
        break;
    } else if (userHour >= 20 && userHour <= 22) {
        typeMenu = "dinner";
       alert ("Thanks! You can order DINNER until 10p.m.");
        break;
    } else if (userHour < 7 || userHour > 11 && userHour <13 || userHour >= 23) {
        alert ("Sorry we´re closed now. Please come again later. Our openning hours are: BREAKFAST (07:00-11:00), LUNCH (13:00-15:00) and DINNER (20:00-23:00)");
    } else {
        alert("Invalid time. Please enter a valid hour (from 1 to 24). For example, 13:30h --> enter 13");
    }
}
getBill(typeMenu);








