function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function myFunctio2() {
  const element = document.getElementsByTagName("p");

  document.getElementById("demo").innerHTML = '<br>The text in first paragraph (index 0) is: </br>' + element[0].innerHTML;
}