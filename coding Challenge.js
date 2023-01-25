const bills= [125,555,44];

  function calcTip(bills){
    if (bills>= 50 && bills<= 300) { return bills*0.15} 
    else {return bills*0.20};
   
};

calcTip(125,555,44);

const tip1= calcTip(bills[0]);
const tip2=calcTip(bills[1]);
const tip3=calcTip(bills[2]);

console.log(tip1,tip2,tip3);
