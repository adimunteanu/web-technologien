function notGoodGrades(grades) {
  return grades.filter(
    (gradeObject) =>
      parseFloat(gradeObject["grade"].split(",").join(".")) >= 3.0
  );
}

function gradeOverview(students, grades) {
  return students.map((student) => {
    return {
      student,
      grades: grades.filter(
        (gradeObject) =>
          gradeObject["matrikelnummer"] === student["matrikelnummer"]
      ),
    };
  });
}

function duplicateStudents(students) {
  return [...new Set(students.map((student) => student["matrikelnummer"]))].map(
    (matrikelnummer) => {
      return {
        matrikelnummer,
        students: students.filter(
          (student) => student["matrikelnummer"] === matrikelnummer
        ),
      };
    }
  );
}

function invalidGrades(grades) {
  return grades
    .map((s) => {
      const matrikelnummer = s["matrikelnummer"];
      const uniqueCourses = [
        ...new Set(
          grades
            .filter(
              (gradeObject) => gradeObject["matrikelnummer"] === matrikelnummer
            )
            .map((gradeObject) => gradeObject["course"])
        ),
      ];

      return {
        matrikelnummer,
        grades: uniqueCourses
          .map((course) => {
            return grades.filter(
              (gradeObject) =>
                gradeObject["matrikelnummer"] === matrikelnummer &&
                gradeObject["course"] === course
            );
          })
          .filter((course) => course.length > 1),
      };
    })
    .filter((e) => e.grades.length > 0);
}
