const calculateChange = function(total, cash) {
  if (cash < total) {
    return 'Insufficient funds';
  }
  let remaining = cash - total;

  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }
  let keys = Object.keys(change);

  while (remaining > 0) {
    
    if (remaining >= 2000) {
      change.twentyDollar += 1;
      remaining -= 2000;
      
      
    }
    else if (remaining >= 1000) {
      change.tenDollar += 1;
      remaining -= 1000;
      
            
    }
    else if (remaining >= 500) {
      change.fiveDollar += 1;
      remaining -= 500;
      
            
    }
    else if (remaining >= 200) {
      change.twoDollar += 1;
      remaining -= 200;
      
           
    }
    else if (remaining >= 100) {
      change.oneDollar += 1;
      remaining -= 100;
      
         
    }
    else if (remaining >= 25) {
      change.quarter += 1;
      remaining -= 25;
      
    }
    else if (remaining >= 10) {
      change.dime += 1;
      remaining -= 10;

    }
    else if (remaining >= 5) {
      change.nickel += 1;
      remaining -= 5;

    }
    else if (remaining >= 1) {
      change.penny += 1;
      remaining -= 1;
    }
  }
  for (i = 0; i < keys.length; i++) {
    if (change[keys[i]] === 0) {
      delete change[keys[i]];
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));