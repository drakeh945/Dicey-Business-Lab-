window.addEventListener("DOMContentLoaded", function () {
  let dieArray = [];

  let div = document.createElement("div");
  div.className = "col shadow-lg p-4 mb-4 bg-light";
  let div1 = document.getElementsByClassName("col shadow-lg p-4 mb-4 bg-light");
  div.class = div1;

  document.body.appendChild(div);
  div.style.textAlign = "center";
  div.style.height = "100px";
  div.style.lineHeight = "100px";
  div.style.borderStyle = "solid";
  div.style.boxShadow = "10px 10px grey";

  class Die {
    constructor() {
      this.divSquare = document.createElement("div");
      this.divSquare.className = "dieSquares";
      this.divSquare1 = document.getElementsByClassName("dieSquares");
      this.divSquare.class = this.divSquare1;
      this.divSquare.id = "eachDieId";
      this.value = 0;
      this.dieRoll();

      div.appendChild(this.divSquare);
      this.divSquare.classList.add("dieSquares");
      this.divSquare.style.height = "50px";
      this.divSquare.style.width = "50px";
      this.divSquare.style.margin = "0px 10px 0px";
      this.divSquare.style.cssFloat = "left";
      this.divSquare.style.fontSize = "75px";
      this.divSquare.style.verticalAlign = "middle";
      this.divSquare.style.lineHeight = ".5";
      this.indexNum = dieArray.length;
      //double click on each die to remove them
      this.divSquare.addEventListener("dblclick", () => {
        this.removeDie();
      });
      //click on each die to roll them
      this.divSquare.addEventListener("click", () => {
        this.dieRoll();
      });
    }

    //Rolling the die will create the value of each die shown below
    dieRoll() {
      this.value = Math.floor(Math.random() * 6 + 1);
      if (this.value === 1) {
        this.divSquare.textContent = "\u2680";
      } else if (this.value === 2) {
        this.divSquare.textContent = "\u2681";
      } else if (this.value === 3) {
        this.divSquare.textContent = "\u2682";
      } else if (this.value === 4) {
        this.divSquare.textContent = "\u2683";
      } else if (this.value === 5) {
        this.divSquare.textContent = "\u2684";
      } else if (this.value === 6) {
        this.divSquare.textContent = "\u2685";
      }
      return this.value;
    }

    //Using the array filter method to create a new array with all the
    //elements to pass a test implemented by the removeDie function
    removeDie() {
      this.divSquare.outerHTML = "";
      dieArray = dieArray.filter(
        (dieSquares) => dieSquares.indexNum !== this.indexNum
      );
    }
  }

  //function to add the die for each click or roll button
  dieSumFormula = (sum) => {
    dieArray.forEach((dieSquares) => (sum += dieSquares.value));
    return (sum = 0);
  };

  document.getElementById("genDieBtn").addEventListener("click", addDie);

  //each die roll function
  fixedDie = () => {
    let dice = new Die();
    if (dieArray.length < 5);
    dieArray.push(dice);
  };
  //after 5 die are created, the "Roll Die Homey" button is disabled to keep only five die on the screen
  stopDie = () => {
    let button1 = document.getElementById("genDieBtn");
    if (dieArray.length < 9) button1.disabled = true;
  };
  //function that adds each die when the "Roll Die Homey" button is pressed
  function addDie() {
    fixedDie();
    fixedDie();
    fixedDie();
    fixedDie();
    fixedDie();
    stopDie();
  }

  //The "ReRoll Da Die" button re-rolls the die that are on the screen
  //and adds a die if there are less than five of them
  let button2 = document.getElementById("reRollDie");

  button2.addEventListener("click", () => {
    if (dieArray.length < 5) {
      fixedDie();
    } else dieArray.forEach((dieSquares) => dieSquares.dieRoll());
    dieSumFormula();
  });

  //when the "Add Yop Die" button is pressed, whatever die
  //is on the screen will be calculated and shown with an alert
  document.getElementById("sumDie").addEventListener("click", addSumDie);

  function addSumDie() {
    let sum = 0;
    dieArray.forEach((dieSquares) => (sum += dieSquares.value));
    alert("Total Die: " + sum);
  }
});
