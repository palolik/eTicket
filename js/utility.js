const seatIds = [];
const arrayLength = seatIds.length;
function select(){
    document.addEventListener('click', (event) => {
        if (event.target.matches('kbd')) {
          const elementId = event.target.id;
          
       
          if (!seatIds.includes(elementId)) {
            addSeatList(elementId);
            setBackgroundColorById(elementId);
          removeBackgroundColorById(elementId);
          seatList();
          leanthOfSeats();
          }
        }
      });
}
function addSeatList(elementId){
    if (!seatIds.includes(elementId)) {
        seatIds.push(elementId); 
      } 
   
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-lime-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-white');
}

function  leanthOfSeats(){
    const arrayLength = seatIds.length;
    seatCounterPlus(arrayLength);
    seatCounterMinus(arrayLength);
    seatPriceCounter(arrayLength);
    coupon();

}
function seatCounterPlus(arrayLength){
    const seats = document.getElementById("seats");
    seats.textContent = arrayLength;
}
function seatCounterMinus(arrayLength){
    const seats = document.getElementById("seatsA");
    seats.textContent =40-arrayLength;
}
function seatList() {
    const list = document.getElementById("seatlist");
    seatIds.forEach(id => {
      const item = document.createElement("div");
      item.classList.add("flex", "flex-row", "justify-between");
      const seatId = document.createElement("p");
      seatId.textContent = id;
      item.appendChild(seatId);
      const seatClass = document.createElement("p");
      seatClass.textContent = "Economy";
      item.appendChild(seatClass);
      const seatPrice = document.createElement("p");
      seatPrice.textContent = "$550";
      item.appendChild(seatPrice);
      list.appendChild(item);
    });
  }
function seatPriceCounter(arrayLength){
    const seats = document.getElementById("Price");
    seats.textContent =arrayLength*550;
}
function coupon(){
    const arrayLength = seatIds.length;
    if(arrayLength == 4){
        var couponCodeValue = document.getElementById('userCouponCode').value;
        const seats = document.getElementById("Price").innerHTML;
        if (couponCodeValue === 'NEW15') {
            console.log(arrayLength);
            const price2 = document.getElementById("Price2");
            price2.textContent =seats*0.75;
        }
        else if(couponCodeValue === 'Couple 20')
        {
            const price2 = document.getElementById("Price2");
            price2.textContent =seats*0.80;
        } 
       
    
    }

}


function floatingBox() {
    const elementId = "floatingDiv";
    setDivVisById(elementId);
     removeDivVisById(elementId);
};

function setDivVisById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('block');
}

function removeDivVisById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function closeFloatingBox() {
    const elementId = "floatingDiv";
    ssetDivVisById(elementId);
     rremoveDivVisById(elementId);
    console.log(elementId);

};

function ssetDivVisById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function rremoveDivVisById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('block');
}
 
function activateNextButton(){
 numberValue = parseInt(document.getElementById('number').value);
 const element = document.getElementById('nextButton');

if (seatIds.length > 0 && !isNaN(numberValue)) {
    element.classList.remove('btn-disabled');
  } else {
    element.classList.add('btn-disabled');
  }

}

 










  