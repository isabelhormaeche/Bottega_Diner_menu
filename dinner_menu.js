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
            "Bakery": 3  // comment opcion croissant, etc
        },
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
  
     

    let printMenu = `Our ${typeMenu.toUpperCase()} menu includes: (1) main course and (2) sides of your choice with free coffee or tea:\n`;
        printMenu += ".............................................................................\n";    
    printMenu += "MAIN COURSE (select ONE):\n"; 
    printMenu += ".............................................................................\n";
    mainCourses.forEach((item, index) => {
    printMenu += `${index + 1}. ${item} - €${bottegaMenu[typeMenu].mainCourses[item]}\n`;
    });
    printMenu += ".............................................................................\n";
    printMenu += "\nSIDES (select TWO):\n";
    printMenu += ".............................................................................\n";
    sideDishes.forEach((item, index) => {
      printMenu += `${index + 1}. ${item} - €${bottegaMenu[typeMenu].sideDishes[item]}\n`;
    });
      alert(printMenu);
  }


    


// Funtion to get the total price:

function getTotalPrice(mainCourse, sideDishOne, sideDishTwo, typeMenu) {
  
    const mainCoursePrice = bottegaMenu[typeMenu].mainCourses[mainCourse];
    const sideDishOnePrice = bottegaMenu[typeMenu].sideDishes[sideDishOne];
    const sideDishTwoPrice = bottegaMenu[typeMenu].sideDishes[sideDishTwo];
    
    // Check if dishes are on the menu.
    if (mainCoursePrice === undefined || sideDishOnePrice === undefined || sideDishTwoPrice === undefined) {
      throw new Error("The selected dish/dishes are not in the menu.");
    }
  
    const totalPrice = mainCoursePrice + sideDishOnePrice + sideDishTwoPrice;
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


// Function to order SIDE dish (TWO):


function ordersideDishTwo(typeMenu) {
  
    const sideDishes = Object.keys(bottegaMenu[typeMenu].sideDishes);
  
    let order = prompt("You can select one more choice. Please select your SECOND SIDE dish entering the dish number:\n" + sideDishes.map((item, index) => `${index + 1}. ${item}`).join("\n")).toLowerCase(); 
  
    // Check if order is a number
    if (!isNaN(order)) {
      const index = parseInt(order) - 1;
      if (index >= 0 && index < sideDishes.length) {
        alert(generateComment());
        return sideDishes[index];
      }
    }
  
    // Check if order is in the menu
    if (!sideDishes.includes(order)) {
      alert("That option is not in the menu. Please, try again. Enter only the dish number (e.g.:  8. dishname, enter -->  8 ).");
      return ordersideDishTwo(typeMenu); // Ask to select again!!!
    }
  
    return order;
  }



// Funtion to get bill:

  function getBill(typeMenu) {

    showMenu(typeMenu);
  
    const mainCourse = orderMainCourse(typeMenu);
    const sideDishOne = ordersideDishOne(typeMenu);
    const sideDishTwo = ordersideDishTwo(typeMenu);
  
    const totalPrice = getTotalPrice(mainCourse, sideDishOne, sideDishTwo, typeMenu)
    
    alert(`You ordered ${mainCourse.toUpperCase()} as your main course with ${sideDishOne.toUpperCase()} and ${sideDishTwo.toUpperCase()} as side dishes. Total price is : €${totalPrice}. Enjoy your ${typeMenu.toUpperCase()}!`);
    alert("Thank you for coming! See you again soon!");
    
  }

// -------------------START HERE -------------------------------------------

const menuOptions = Object.keys(bottegaMenu); // ["breakfast","lunch","dinner"]

let typeMenu;
while (true) {
    typeMenu = prompt(`Welcome to BOTTEGA´S DINER!\nPlease select your menu: ${menuOptions.join(', ')}:`).toLowerCase();
    if (menuOptions.includes(typeMenu)) {
        alert("Great choice!");
        break; 
    } else {
        alert("Invalid menu selection. Please choose breakfast, lunch, or dinner.");
    }
}

getBill(typeMenu);

// --------------------------------------------------------------------------------










