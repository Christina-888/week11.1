const tasks = document.getElementById("tasks");
const list = document.querySelector(".list");

const takeTasks = () => {
  const userPoints = tasks.value;
  const liElement = document.createElement("li");
  liElement.textContent = userPoints;
 // console.log(userPoints);
  tasks.value = "";
  list.appendChild(liElement);
};



list.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('active');
  }
});