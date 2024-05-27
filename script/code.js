let calculateTotal = document.querySelector('[calculateTotal]');

document.querySelector('[calculateTotal]').addEventListener("click", ()=>{
    let fQuantity = +document.querySelector('[quantityFsj]').value;
    let mQuantity = +document.querySelector('[quantityMsj]').value;
    
    let firstTotal = 150.95 * fQuantity ;
    document.querySelector('[displayFsj]').textContent = firstTotal.toFixed(2);

    let secTotal = 180.95 * mQuantity;
    document.querySelector('[displayMsj]').textContent = secTotal.toFixed(2);

   finalTotal = firstTotal + secTotal;
    document.querySelector('[finalTotal]').textContent = finalTotal.toFixed(2);
});