function doSomething(msg: string | null) {
  if (msg === null) {
    console.log("msg is null");
  } else {
    console.log("msg toUpperCase", msg?.toUpperCase());
  }
}
doSomething(null);
doSomething("kaung myat kyaw");

function livedangerously(x?: number | null) {
  console.log(x!.toFixed());
}
livedangerously(19);
// livedangerously(null);
