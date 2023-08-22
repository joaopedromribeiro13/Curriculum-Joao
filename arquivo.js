function navfunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "flex") {
      x.style.display = "none";
      console.log("foi");
    } else {
      console.log("não foi");
      x.style.display = "flex";
    }
  }