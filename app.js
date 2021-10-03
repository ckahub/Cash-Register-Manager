const billAmount= document.querySelector("#bill_amount");
const cashGiven= document.querySelector("#cash_given");
const chck = document.querySelector("#check");
const message = document.querySelector("#message");
const noOfNotes= document.querySelectorAll(".Number_Of_Notes");

const availableNotes= [ 2000 , 500 , 100 , 50 , 10 , 5 , 1 ];


chck.addEventListener("click", validate);

function validate() {
    hideMessage();
    if (billAmount.value > 0)
     {

      if (cashGiven.value >= billAmount.value) {
       
        const amountToReturn = cashGiven.value - billAmount.value; 
        calculateChange(amountToReturn);
      } 
      else 
      {
        showMessage("Do you wanna wash plates?");
      }
    }
     else {
      showMessage("Invalid Bill Amount");
    }
  };
  
  
function showMessage(msg)
{
    message.style.display = "block";
    message.innerHTML= msg;
}

function hideMessage()
{
    message.style.display = "none";
}


function calculateChange(amountToReturn) {
    
    for (let i = 0; i < availableNotes.length; i++) {
      
      const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);
     
  
      
      amountToReturn = amountToReturn % availableNotes[i];
    
  
      
      noOfNotes[i].innerText = numberOfNotes;
    }
  }
