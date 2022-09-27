const select = document.getElementById("select");
const loanInput = document.getElementById("reqloan");
const amountInput = document.getElementById("amount");
const calcBtn = document.getElementById("calcbtn");

let oran = 0;
let taksit = 0;

calcBtn.addEventListener("click", () => {
  if (select.value === "House") {
    oran = 1.29;
  } else if (select.value === "Vehicle") {
    oran = 1.79;
  } else if (select.value === "Personal") {
    oran = 1.99;
  }
  if (
    select.value === "select credit type" ||
    !loanInput.value ||
    !amountInput.value
  ) {
    alert("fill in the blanks");
  }
  const faiz = oran / 100;
  taksit =
    (loanInput.value * (faiz * (1 + faiz) ** amountInput.value)) /
    ((1 + faiz) ** amountInput.value - 1);
  console.log(taksit);
  if (
    select.value !== "select credit type" &&
    loanInput.value &&
    amountInput.value
  ) {
    calculateLoan();
  }
});

const calculateLoan = () => {
  const infos = document.getElementById("infos");

  infos.innerHTML = `<h2 class="mt-5">⇛ Credit İnfos ⇚ </h2>
      <table class="table table-bordered border-1 border-dark mt-5 bg-light">
        <tr>
          <th>Credit Amount</th>
          <td>${loanInput.value} $</td>
          <th>Credit Type</th>
          <td>${select.value}</td>
        </tr>
        <tr>
          <th>Installment</th>
          <td>${amountInput.value}</td>
          <th>Interest</th>
          <td>${oran}</td>
        </tr>
        <tr>
          <th>Total Refund</th>
          <td>${(taksit * amountInput.value).toFixed(2)} $</td>
          <th>Installment Amount</th>
          <td>${taksit.toFixed(2)} $</td>
        </tr>
      </table>`;
};
