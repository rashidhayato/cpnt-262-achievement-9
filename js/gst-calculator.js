const gstRate = 0.05
    //Function//           //Parameter//
const calculateGST = function(subTotal) {
  // Move repeated code here
  const gst = subTotal * gstRate;
    const total = subTotal + gst;
      console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total}.`);
}

// Refactor the following code so that gst totals are calculated by invoking calculateGST(). Example:
// calculateGST(subTotal1);

// Sub Total 1
const subTotal1 = 40;

// Sub Total 2
const subTotal2 = 55;

// Sub Total 3
const subTotal3 = 32.45;

// Function // Argument //
calculateGST(subTotal1)
calculateGST(subTotal2)
calculateGST(subTotal3)


