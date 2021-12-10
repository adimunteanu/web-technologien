var data = [
  { id: "a01-01", cmd: "notGoodGrades(grades).slice(0, 1)", expected: '[{"id":3, "matrikelnummer":4545, "course":"Webtechnologien", "grade":"3, 3", "versuch":1}]' },
  { id: "a01-02", cmd: "notGoodGrades(grades).slice(-1)", expected: '[{"id":999, "matrikelnummer":4592, "course":"Webtechnologien", "grade":"5, 0", "versuch":1}]' },
  { id: "a01-03", cmd: "notGoodGrades(grades).slice(42, 43)", expected: '[{"id":92, "matrikelnummer":4453, "course":"Analysis I und Lineare Algebra für ­Ingenieurwissenschaften", "grade":"5, 0", "versuch":3}]' },

  { id: "a02-01", cmd: "gradeOverview(students, grades).slice(0, 1)", expected: '[{"student":{"matrikelnummer":4251, "vorname":"Médiamass", "nachname":"Ciccottio", "adresse":"900 Mitchell Trail", "course":"Medientechnik", "semester":5, "email":"mciccottio0@bandcamp.com", "phone":"(533) 9776037"}, "grades":[{"id":100, "matrikelnummer":4251, "course":"Webtechnologien", "grade":"3, 3", "versuch":1}]}]' },
  { id: "a02-02", cmd: "gradeOverview(students, grades).slice(-18, -17)", expected: '[{"student":{"matrikelnummer":4636, "vorname":"Vérane", "nachname":"Voase", "adresse":"02451 Marquette Terrace", "course":"Medientechnik", "semester":5, "email":"ivoasede@google.es", "phone":"(787) 2832036"}, "grades":[{"id":628, "matrikelnummer":4636, "course":"Analysis I und Lineare Algebra für ­Ingenieurwissenschaften", "grade":"3, 3", "versuch":2}, {"id":886, "matrikelnummer":4636, "course":"Analysis I und Lineare Algebra für ­Ingenieurwissenschaften", "grade":"5, 0", "versuch":2}]}]' },
  { id: "a02-03", cmd: "gradeOverview(students, grades).slice(57, 58)", expected: '[{"student":{"matrikelnummer":4661, "vorname":"Lucrèce", "nachname":"Nolli", "adresse":"1196 Grover Circle", "course":"Medientechnik", "semester":6, "email":"dnolli1l@biblegateway.com", "phone":"(991) 7252387"}, "grades":[{"id":806, "matrikelnummer":4661, "course":"Digitale Systeme", "grade":"1, 0", "versuch":1}]}]' },

  { id: "a03-01", cmd: "duplicateStudents(students).slice(0, 1)", expected: '[{"matrikelnummer":4695, "students":[{"matrikelnummer":4695, "vorname":"Marie-josée", "nachname":"Lamasna", "adresse":"4444 Grayhawk Hill", "course":"Medientechnik", "semester":12, "email":"ilamasnau@amazon.co.jp", "phone":"(727) 4187917"}, {"matrikelnummer":4695, "vorname":"Maïlis", "nachname":"Dawes", "adresse":"875 Corben Avenue", "course":"Medientechnik", "semester":12, "email":"cdawesv@myspace.com", "phone":"(996) 7386162"}]}]' },
  { id: "a03-02", cmd: "duplicateStudents(students).slice(-5, -4)", expected: '[{"matrikelnummer":4275, "students":[{"matrikelnummer":4275, "vorname":"Maïlis", "nachname":"Thunnercliff", "adresse":"095 Ridgeway Center", "course":"Medieninformatik", "semester":2, "email":"bthunnercliff1x@unblog.fr", "phone":"(952) 8884951"}, {"matrikelnummer":4275, "vorname":"Geneviève", "nachname":"Denman", "adresse":"69 Dahle Pass", "course":"Medieninformatik", "semester":8, "email":"bdenman9h@yellowpages.com", "phone":"(292) 2551046"}, {"matrikelnummer":4275, "vorname":"Renée", "nachname":"Glison", "adresse":"33374 Hanson Street", "course":"Wirtschaftsinformatik", "semester":2, "email":"tglisondq@indiegogo.com", "phone":"(904) 3297190"}]}]' },
  { id: "a03-03", cmd: "duplicateStudents(students).slice(12, 13)", expected: '[{"matrikelnummer":4468, "students":[{"matrikelnummer":4468, "vorname":"Edmée", "nachname":"Spedroni", "adresse":"2 Westport Lane", "course":"Medientechnik", "semester":11, "email":"aspedronis@aol.com", "phone":"(310) 3094790"}, {"matrikelnummer":4468, "vorname":"Liè", "nachname":"Larkins", "adresse":"6 Shelley Way", "course":"Informatik", "semester":5, "email":"llarkins36@digg.com", "phone":"(513) 7400481"}]}]' },  

  { id: "a04-01", cmd: "invalidGrades(grades).slice(1, 2)", expected: '[{"matrikelnummer":4611, "grades":[[{"id":2, "matrikelnummer":4611, "course":"Webtechnologien", "grade":"1, 7", "versuch":2}, {"id":127, "matrikelnummer":4611, "course":"Webtechnologien", "grade":"1, 3", "versuch":3}]]}]' },
  { id: "a04-02", cmd: "invalidGrades(grades).slice(-1)", expected: '[{"matrikelnummer":4545, "grades":[[{"id":162, "matrikelnummer":4545, "course":"Einführung in die Programmierung", "grade":"3, 0", "versuch":3}, {"id":1000, "matrikelnummer":4545, "course":"Einführung in die Programmierung", "grade":"2, 7", "versuch":1}]]}]' },
  { id: "a04-03", cmd: "invalidGrades(grades).slice(99, 100)", expected: '[{"matrikelnummer":4727, "grades":[[{"id":220, "matrikelnummer":4727, "course":"Webtechnologien", "grade":"5, 0", "versuch":1}, {"id":849, "matrikelnummer":4727, "course":"Webtechnologien", "grade":"4, 0", "versuch":1}], [{"id":680, "matrikelnummer":4727, "course":"Analysis I und Lineare Algebra für ­Ingenieurwissenschaften", "grade":"5, 0", "versuch":3}, {"id":915, "matrikelnummer":4727, "course":"Analysis I und Lineare Algebra für ­Ingenieurwissenschaften", "grade":"4, 0", "versuch":1}]]}]' },   
];