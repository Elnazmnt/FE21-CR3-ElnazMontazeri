function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    sum = starterPrice + maindishPrice + dessertPrice + beveragePrice
    return sum;

}
calculateInvoice(10, 24.50, 0, 8);
console.log("Dear customer numnber 120, your payment is:" + sum + " $ .Thanks and hope to see you soon");
// calculateInvoice(13,0,0,8);
// console.log("Dear customer numnber 251, your payment is:"+sum+  " $ .Thanks and hope to see you soon");
// calculateInvoice(0,0,0,12);
// console.log("Dear customer numnber 362, your payment is:"+sum+  " $ .Thanks and hope to see you soon");

function studentInvoice(starterPri, maindishPri, dessertPri, beveragePri) {
    sumStud = (starterPri * 0.9) + (maindishPri * 0.9) + (dessertPri * 0.9) + beveragePri
    return sumStud
}
studentInvoice(8,0,0,14)
console.log("Dear customer , your payment is:" + sumStud +
 " $ . You received a 10% discount (except for beverages ) Thanks and hope to see you soon");
//  studentInvoice(15,21.50,0,0)
// console.log("Dear customer , your payment is:" + sumStud +
//  " $ . You received a 10% discount (except for beverages ) Thanks and hope to see you soon");
//  studentInvoice(0,25,0,12)
// console.log("Dear customer , your payment is:" + sumStud +
//  " $ . You received a 10% discount (except for beverages ) Thanks and hope to see you soon");