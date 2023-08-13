// Deposit

document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositField = document.getElementById("deposit-field");
  const deposit = document.getElementById("deposit-amount");
  let mainBalance = document.getElementById("main-balance");
  const balance = mainBalance.innerText;
  const depositTotal = deposit.innerText;
  let depositAmount = depositField.value;
  const depositTotalAmount =
    parseFloat(depositAmount) + parseFloat(depositTotal);
  const totalBalance = parseFloat(depositAmount) + parseFloat(balance);

  // Store data in local storage
  localStorage.setItem("totalDeposit", depositTotalAmount);
  localStorage.setItem("balanceTotal", totalBalance);

  // Retrieve data from local storage
  const item = localStorage.getItem("totalDeposit");
  const item1 = localStorage.getItem("balanceTotal");

  // Update the UI with retrieved data
  deposit.textContent = item;
  mainBalance.innerText = item1;

  depositField.value = "";
});

//Withdraw

document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawField = document.getElementById("withdraw-field");
  let withdraw = document.getElementById("withdraw");
  let mainBalance = document.getElementById("main-balance");

  const withdrawAmount = withdrawField.value;
  const withdrawTotal = withdraw.innerText;
  const balance = mainBalance.innerText;

  const withdrawTotalAmount =
    parseInt(withdrawAmount) + parseInt(withdrawTotal);
  const totalBalance = parseInt(balance) - parseInt(withdrawAmount);

  withdraw.innerText = withdrawTotalAmount;
  mainBalance.innerText = totalBalance;

  withdrawField.value = "";
});
