const replaceVowels = (str) => {
  const newStrArray = str.split(" ");

  for (i = 0; i < newStrArray.length; i++) {
    const charArray = newStrArray[i].toLowerCase().split("");

    charArray.forEach((char, index) => {
      if (char === "a" || char === "i" || char === "e" || char === "o" || char === "u") {
        charArray[index] = "-";
      }
    });

    newStrArray[i] = charArray.join("");
  }

  newString = newStrArray.join(" ");

  return newString
}


$(document).ready(function() {
  $("form").submit(() => {
    event.preventDefault();

    const strInput = $("#sentence").val();

    $("#output").append(replaceVowels(strInput));

  })
});