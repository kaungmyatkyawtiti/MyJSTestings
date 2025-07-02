interface flyable {
  fly: () => void;
}

class Bird implements flyable {
  fly() {
    console.log("flying");
  }
}

class Airplane implements flyable {
  fly() {
    console.log("flying");
  }
}
