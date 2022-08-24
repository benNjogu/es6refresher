let missileSystem = {
  safeMode: true,
  lauch(time) {
    console.log("lauching " + time);
  },
};

let lauchMissiles = function () {
  missileSystem.lauch("now");
};

safeMode = missileSystem.safeMode;
if (safeMode) {
  lauchMissiles = function () {
    console.log("can't lauch, safe mode enabled");
  };
}

lauchMissiles();
