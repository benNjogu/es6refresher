let accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Enter account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }

  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

transfer("a", 63);
console.log(accounts); //-> { a: 37, b: 63, c: 20 }

/*
The above transfer function transfers a sum of money from a given account to
another, asking for the name of the other account in the process. If given an
invalid account name, getAccount throws an exception.
But transfer first removes the money from the account and then calls
getAccount before it adds it to another account. If it is broken off by an
exception at that point, it’ll just make the money disappear.
That code could have been written a little more intelligently, for example by
calling getAccount before it starts moving money around. 
*/
