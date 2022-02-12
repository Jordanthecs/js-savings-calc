# js-savings-calc
//Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Savings</title>
    <link href="styles.css" rel="stylesheet"/>
</head>
<body>
    <div class ="head-parent">
        <div class = "head">
            <h1>Savings</h1>
        </div>
    </div>
    <div class = "save-parent">
        <div class="savings">
            <h3>How much money do you have saved?</h3>
            <div class = "saved-block">
                <input type="text" class="saved" placeholder="Enter Saved Amount" required>
            </div>
        </div>
    </div>

    <div class = "month-parent">
        <div class="monthly">
            <h3>How much money are you saving every month?</h3>
            <div class = "eMonth-block">
                <input type="text" class="everyMonth" placeholder="Enter Saving Amount" required>
            </div>
        </div>
    </div>

    <div class = "duration-parent">
        <div class="duration">
            <h3>How long are you saving?</h3>
            <div class="monthly-block">
                <input type="text" class="monthAmount" placeholder="Months" required>
            </div>
        </div>
    </div>
        <h1></h1>
        <div class = "sub">
            <button class="money">Sumbit</button>
        </div>
        <div class = "total">
        <h1 ></h1>
        </div>
    <script src="savings.js"></script>
</body>
</html>

//JavaScript
let saved = document.querySelector(".money");

let initialAmount, total,duration,monthly;

saved.addEventListener("click", function () {
  initialAmount = parseInt(document.querySelector(".saved").value);
  monthly = parseInt(document.querySelector(".everyMonth").value);
  duration = parseInt(document.querySelector(".monthAmount").value);
  total = (monthly * duration) + initialAmount;
  console.log(total);
  document.querySelector(
    ".total"
  ).textContent = `You will have $${total} after ${duration} months!`;
});

//CSS
body {
  background-color: black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: xx-large;
}

.money {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.head {
  padding: 20px;
  background-color: pink;
  border: 20px solid aqua;
  margin: 20px;
  height: 150px;
  width: 500px;
  display: flex;
  justify-content: center;
}

.head-parent{
  display: flex;
  justify-content: center;
}

.save-parent, .duration-parent, .month-parent{
  display: flex;
  justify-content: center;
}

.saved-block,.monthly-block,.eMonth-block{
  display: flex;
  justify-content: center;
}

.saved,
.everyMonth,
.monthAmount {
  padding: 10px;
  
}

h3 {
  color: white;
}

.total{
  color: white;
  padding: 80px;
  display: flex;
  justify-content: center;
}

.sub{
  display:flex;
  justify-content: center;
}
