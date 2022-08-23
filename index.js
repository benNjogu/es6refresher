const person = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("this", self);
    }, 1000);
  },
};

person.talk();
