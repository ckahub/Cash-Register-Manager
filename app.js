const billAmount= document.querySelector("#bill_amount");
const cashGiven= document.querySelector("#cash_given");
const check = document.querySelector("#check");
const message = document.querySelector("#message");
const NumberOfNotes= document.querySelector(".No_of_notes");

const avaialableNotes=[2000,500,100,50,10,5];

check.addEventListener("click", function validate(){

if(billAmount.value>0)
{
    hideMessage();
    if(billAmount.value<cashGiven.value)
{
    var amountToReturn=billAmount-cashGiven;
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
    message.innerHTML= msg;
}

function hideMessage()
{
    message.style.display = "none";
}
function calculateChange(amountToReturn)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        const Notes= Math.trunc(amountToReturn/availableNotes[i]);
       
        amountToReturn= amountToReturn % availableNotes[i];
        NumberOfNotes[i].innerText=Notes;

       


    }
}