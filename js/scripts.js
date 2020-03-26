
var check = function (num1, num2, num3) {
  if (num1 + num2 >= num3 && num2 + num3 >= num1 && num1 + num3 >= num2) {
    if (num1 === num2 && num2 === num3 && num1 === num3) {
      return "equilateral";

    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
      return "isosceles";

    } else {
      return "scalene";
    }
  } else {
    return "NOT a triangle";
  }
}




$(document).ready(function () {



  $("#triangleForm").submit(function (event) {
    event.preventDefault();


    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());

    alert(check(sideOne, sideTwo, sideThree));


  });


});