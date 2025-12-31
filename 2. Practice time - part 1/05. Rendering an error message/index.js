// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = "Something went wrong, please try again"

function purchase() {
  console.log("Purchase button clicked")
  document.getElementById("error").innerText = errorMessage
}