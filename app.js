const billAmount= document.querySelector("#bill_amount");
const cashGiven= document.querySelector("#cash_given");
const chck = document.querySelector("#check");
const message = document.querySelector("#message");
const NumberOfNotes= document.querySelectorAll(".Number_Of_Notes");

const availableNotes= [ 2000 , 500 , 100 , 50 , 10 , 5 , 1 ];
var amountToReturn=Number(billAmount.value-cashGiven.value);

chck.addEventListener("click", function validate(){
    hideMessage();
if(billAmount.value>0)
{
    hideMessage();
    if(billAmount.value<cashGiven.value)
{
    
    calculateChange(amountToReturn);
}
    else
    {
        message.style.display = "block";
        showMessage("Do you want to wash plates??");
    }

}    


else
{
    message.style.display = "block";
    showMessage("Not a valid amount");
}
})

function showMessage(msg)
{
    message.style.display = "block";
    message.innerHTML= msg;
}

function hideMessage()
{
    message.style.display = "none";
}
function calculateChange( amountToReturn)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        var Notes= Math.trunc( amountToReturn / availableNotes[i]);
       
        amountToReturn = amountToReturn % availableNotes[i];
        console.log(Notes);
        NumberOfNotes[i].innerText = Notes;
      

       


    }

}