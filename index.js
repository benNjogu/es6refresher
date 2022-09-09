console.log(
  "Liskov, Barbara\nMacCarthy, John\nWalder, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
);
/**
Barbara Liskov
John MacCarthy
Philip Walder
 */
