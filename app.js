
const elements = document.querySelectorAll(".tt, .tt2, .tt3, .tt4, .tt5"); // Выбираем все элементы

elements.forEach(element => {
  element.addEventListener("click", function() {
    // Закрываем все элементы
    elements.forEach(el => {
      el.classList.remove("i");
    });
    
    // Открываем только текущий элемент
    this.classList.add("i");
  });
});

const targetElement = document.querySelector(".indi");

document.querySelector(".tt2").addEventListener("click", function() {
    targetElement.classList.remove("class1", "class3", "class4", "class5"); // Удаляем предыдущие классы
    targetElement.classList.add("class2"); // Добавляем новый класс
});

document.querySelector(".tt").addEventListener("click", function() {
    targetElement.classList.remove("class2", "class3", "class4", "class5"); // Удаляем предыдущие классы
    targetElement.classList.add("class1"); // Добавляем новый класс
});

document.querySelector(".tt3").addEventListener("click", function() {
    targetElement.classList.remove("class1", "class2", "class4", "class5"); // Удаляем предыдущие классы
    targetElement.classList.add("class3"); // Добавляем новый класс
});
document.querySelector(".tt4").addEventListener("click", function() {
    targetElement.classList.remove("class1", "class2", "class3", "class5"); // Удаляем предыдущие классы
    targetElement.classList.add("class4"); // Добавляем новый класс
});
document.querySelector(".tt5").addEventListener("click", function() {
    targetElement.classList.remove("class1", "class2", "class3", "class4"); // Удаляем предыдущие классы
    targetElement.classList.add("class5"); // Добавляем новый класс
});
document.querySelector(".tumb").addEventListener("click", function() {
        document.querySelector(".ge").classList.toggle("p");
});

document.querySelector(".tumb").addEventListener("click", function() {
  document.querySelector(".yy").classList.toggle("w");
});
document.querySelector(".tumb").addEventListener("click", function() {
  var elements = document.querySelectorAll(".kk");
  elements.forEach(function(element) {
      element.classList.toggle("k");
  });
});

document.querySelector(".tumb").addEventListener("click", function() {
  document.querySelector(".indi").classList.toggle("r");
});

document.querySelector(".tumb").addEventListener("click", function() {
  var elements = document.querySelectorAll(".gg , .gg2, .gg3, .gg4, .gg5");
  elements.forEach(function(element) {
      element.classList.toggle("z");
  });
});
document.querySelector(".tt").addEventListener("click", function() {
  var targetElement = document.querySelector(".wave");
  targetElement.classList.remove("cs2", "cs3", "cs4", "cs5");
  targetElement.classList.add("cs1");
});
document.querySelector(".tt2").addEventListener("click", function() {
  var targetElement = document.querySelector(".wave");
  targetElement.classList.remove("cs1", "cs3", "cs4", "cs5");
  targetElement.classList.add("cs2");
});
document.querySelector(".tt3").addEventListener("click", function() {
  var targetElement = document.querySelector(".wave");
  targetElement.classList.remove("cs1", "cs2", "cs4", "cs5");
  targetElement.classList.add("cs3");
});
document.querySelector(".tt4").addEventListener("click", function() {
  var targetElement = document.querySelector(".wave");
  targetElement.classList.remove("cs1", "cs2", "cs3", "cs5");
  targetElement.classList.add("cs4");
});
document.querySelector(".tt5").addEventListener("click", function() {
  var targetElement = document.querySelector(".wave");
  targetElement.classList.remove("cs1", "cs2", "cs3", "cs4");
  targetElement.classList.add("cs5");
});


