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

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));//-> [{ name: false, count: 2 } { name: true, count: 3 }]
