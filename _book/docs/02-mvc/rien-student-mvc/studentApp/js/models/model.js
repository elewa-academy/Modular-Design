var eliumStudents = {
  name: "eliumStudents",
  students: {
    0: {
      id: 0,
      name: "Sanni",
      age: 31,
      sex: "female",
      country: "Liberia"
    }
  },
  currentId: 0,
  getAll: function() {
    var studentsArray = [];
    for (var id in this.students) {
      studentsArray.push(this.students[id]);
    }
    return studentsArray;
  },
  addNewStudent(studentObj) {
    var message = "Success!";
    if (
      typeof studentObj.name === "string" &&
      !isNaN(studentObj.age) &&
      typeof studentObj.sex === "string" &&
      typeof studentObj.country === "string"
    ) {
      if (studentObj.name && Number(studentObj.age)) {
        this.currentId++;
        this.students[this.currentId] = studentObj;
        this.students[this.currentId].id = this.currentId;
      } else {
        message = "Please enter age and name";
        return message;
      }
    } else {
      message = "Invalid entries";
      return message;
    }

    return message;
  }
};
