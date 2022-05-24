let saved = document.querySelector(".money");

let initialAmount, total,duration,monthly;

saved.addEventListener("click", function () { 
  initialAmount = parseInt(document.querySelector(".saved").value); 
  monthly = parseInt(document.querySelector(".everyMonth").value); 
  duration = parseInt(document.querySelector(".monthAmount").value);
  total = (monthly * duration) + initialAmount; 
  console.log(total); 
  document.querySelector( ".total" ).textContent = You will have $${total} after ${duration} months!; 
});
