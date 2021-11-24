let object = {
  a: "hund",
  b: "katze",
  c: "maus",
  d: "elefant",
  e: "schlange",
  f: "stachelschwein",
  g: "affe",
  h: "giraffe",
};

function addObjectElement(key, value) {
  let objectCopy = Object.assign({}, object);
  if (key in objectCopy) {
    let newKey = key + "_1";
    let keyId = 1;

    while (newKey in objectCopy) {
      keyId += 1;
      newKey = key + "_" + keyId.toString();
    }
    objectCopy[newKey] = value;
  } else {
    objectCopy[key] = value;
  }
  return objectCopy;
}

function getObjectElements(keys) {
  let objectCopy = Object.assign({}, object);

  return keys.map((key) => {
    return key in objectCopy ? objectCopy[key] : "not found";
  });
}

function deleteObjectElements(keys) {
  let objectCopy = Object.assign({}, object);
  keys.forEach((key) => {
    if (key in objectCopy) {
      delete objectCopy[key];
    }
  });
  return objectCopy;
}
