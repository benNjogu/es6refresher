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

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);//-> -340

console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);//-> -200
