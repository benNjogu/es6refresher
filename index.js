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

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }

  return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name));//-> [ "Hebrew", "Arabic" ]
