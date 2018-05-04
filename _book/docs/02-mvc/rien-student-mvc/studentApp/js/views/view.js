var studentViewer = {
  name: "studentViewer",
  displayStudents: function(arr) {
    var studentsList = document.getElementById("studentsList");
    if (studentsList.innerHTML) {
      studentsList.innerHTML = "";
    }
    arr.forEach(function(element) {
      var header = document.createElement("h4");
      var list = document.createElement("ul");

      for (var key in element) {
        if (key === "name") {
          header.innerText = element[key];
        } else if (key !== "id") {
          var listItem = document.createElement("li");
          listItem.innerText = element[key];
          list.appendChild(listItem);
        }
      }

      studentsList.appendChild(header);
      studentsList.appendChild(list);
    });
  }
};
