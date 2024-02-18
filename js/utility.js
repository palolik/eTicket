
function select(){
    document.addEventListener('click', (event) => {
        if (event.target.matches('kbd')) { 
          const elementId = event.target.id;
          setBackgroundColorById(elementId);
          removeBackgroundColorById(elementId);
          addSeatList(elementId);
          seatList();
          leanthOfSeats();
        }

      });

}
const buttonIds = [];
const arrayLength = buttonIds.length;
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-lime-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-white');
}
function addSeatList(elementId){
   
    buttonIds.push(elementId); 
    console.log(buttonIds);
}
function  leanthOfSeats(){
    const arrayLength = buttonIds.length;
    console.log(arrayLength);
    seatCounterPlus(arrayLength);
    seatCounterMinus(arrayLength);
    seatPriceCounter(arrayLength)
}
function seatCounterPlus(arrayLength){
    const seats = document.getElementById("seats");
    seats.textContent = arrayLength;
}
function seatCounterMinus(arrayLength){
    const seats = document.getElementById("seatsA");
    seats.textContent =40-arrayLength;
}
function seatList(){
    buttonIds.forEach(element => {
        const classs = 'economy';
        const price = 500;
        const seats = document.getElementById("seatlist");
        seats.innerHTML = `<div class="flex flex-row justify-between"><p>${element}</p><p>${classs}</p><p>${price}</p></div>`;
    })
}
function seatPriceCounter(arrayLength){
    const seats = document.getElementById("Price");
    seats.textContent =arrayLength*500;
}
function coupon(){
    
    const seats = document.getElementById("Price").innerHTML;
    const price2 = document.getElementById("Price2");
    price2.textContent =seats*0.75;
}




  