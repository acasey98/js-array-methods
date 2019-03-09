const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    //make a passenger object 
    //add it on the bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat==='back'){
        struggleBus.push(passenger);

    } else if (seat==='front'){
        struggleBus.unshift(passenger);
    }
};

const unloadPassenger = (bus, seat) => {
//remove a pass. from the bus
//return passenger object
    if (seat === 'front'){
        return bus.shift();
    } else if (seat === 'back'){
        return bus.pop();
    }
};

const allAboard = (bus) => {
    //loop over the pass.
    //given the bus costs $5
    const busFare = 5;
    const validPassengers = [];
    const invalidPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare){
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        } else invalidPassengers.push(passenger)
    });
    console.log(invalidPassengers);
    console.log(validPassengers);
    return validPassengers;
};

const busBuilder = (bus) => {
    let domString = '';
    for (let i = 0; i < bus.length; i++){
        domString += `<div class='bus-seat'>`;
        domString +=    `<h4>${bus[i].name}</h4>`;
        domString +=    `<p>${bus[i].wallet}</p>`;
        domString +=    `<p>${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    };
    printToDom('the-bus', domString);
};

const init = () =>{
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Matt1', 2, true, 'front');
    addPassenger('Matt2', 14, false, 'back');
    addPassenger('Matt3', 3, true, 'back');

    const firstPassenger = unloadPassenger(struggleBus,'front');
    
    const busPeople = allAboard(struggleBus);
    busBuilder(busPeople);
    
    
};

init();