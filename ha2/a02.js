let array = [
  "hund",
  "katze",
  "maus",
  "elefant",
  "schlange",
  "stachelschwein",
  "affe",
  "giraffe",
];

function addArrayElement(element) {
  let arrayCopy = [...array];

  if (!arrayCopy.includes(element)) {
    arrayCopy.push(element);
  }

  return arrayCopy;
}

function getArrayElements(number, startIndex) {
  let arrayCopy = [...array];
  startIndex %= arrayCopy.length;

  return arrayCopy.slice(startIndex, startIndex + number);
}

function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];

  const start = startIndex % arrayCopy.length;
  let subArray = arrayCopy.slice(start, start + number);
  let removedItems = [];
  subArray.forEach((element, index) => {
    if (index % everyIth === 0) {
      removedItems.push(element);
      arrayCopy[start + index] = null;
    }
  });

  return {
    newResult: arrayCopy,
    removedItems: removedItems,
  };
}
