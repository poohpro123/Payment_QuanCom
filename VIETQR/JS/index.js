

function quickLink() {
  const BANK_ID = 970436;
  const ACCOUNT_NO = "0071002140725";
  const TEMPLATE = "compact2";
  const amount = parseInt(document.getElementById("TotalPrice").innerText);
  const thong_bao = document.getElementById("thongBao");
  if(amount <= 0){
   
    thong_bao.style.display="block";
    overlay.style.display = "block";
  }
  var currentDate = new Date();
  const DESCRIPTION = "TIEN COM " + currentDate.getHours() +" gio "+currentDate.getMinutes()+" phut " + currentDate.getTime();
  const url = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&&addInfo=${DESCRIPTION}`;

  const img = document.getElementById("quickLink");
  const overlay = document.getElementById("overlay");

  if(amount >= 35000){
  thong_bao.style.display ="none";
  img.src = url;
  img.style.display = "block";
  overlay.style.display = "block";
  }
}

function hideImage() {
    const img = document.getElementById("quickLink");
    const overlay = document.getElementById("overlay");

    img.style.display = "none";
    overlay.style.display = "none";
    resetCart();
}

function resetCart() {
    // Reset quantity inputs
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.value = 0;
    });

    // Reset total price
    const totalPriceElement = document.getElementById('TotalPrice');
    totalPriceElement.innerText = '0';
}

  function increment(id,pricePerUnit) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value);
    var totalPrice = document.getElementById('TotalPrice'); //total price
    var currentPrice = parseInt(totalPrice.innerText);
    quantityInput.value = currentQuantity + 1;
    totalPrice.innerText = currentPrice + pricePerUnit;

    if(currentQuantity === 10 || currentQuantity > 10){
        alert('Maximum amount');
        quantityInput.value = 10;
    }
}

function decrement(id,pricePerUnit) {
    var quantityInput = document.getElementById(id);
    var currentQuantity = parseInt(quantityInput.value);
    var totalPrice = document.getElementById('TotalPrice'); //total price
    var currentPrice = parseInt(totalPrice.innerText);
    if (currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
        totalPrice.innerText = currentPrice - pricePerUnit;
    }
}

