let SCRIPTS = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://www.coptic_alphabet",
  },
  {
    name: "Gakuyu",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -900,
    living: true,
    link: "https://www.gakuyu_alphabet",
  },
  {
    name: "English",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://www.english_alphabet",
  },
  {
    name: "Hebrew",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: -200,
    living: true,
    link: "https://www.aramaic_alphabet",
  },
  {
    name: "Arabic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: -200,
    living: true,
    link: "https://www.arabic_alphabet",
  },
  {
    name: "Mandarene",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ttb",
    year: -200,
    living: true,
    link: "https://www.mongolian_alphabet",
  },
];

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);//-> 4
console.log(horseShoe[0]);//-> � invalid half character code
console.log(horseShoe.charCodeAt(0));//-> 55357 code of the half character
console.log(horseShoe.codePointAt(0));//-> 128052 actual code for horse emoji
/**
 * The charCodeAt gives you a code unit, not a full character code.
 * The codePointAt does not give a full unicode character.
 */