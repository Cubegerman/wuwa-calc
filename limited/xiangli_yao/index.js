var skill_broadblade = 0
var skill_extermination_order = 0

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("skill_extermination_order").innerHTML = this.value;
}


document.getElementById("skill_broadblade").innerHTML = skill_broadblade;

