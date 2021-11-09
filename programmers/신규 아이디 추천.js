let new_id = "-_.~!@#$%^&*()=+[{]}:?,<>/._-";
new_id = new_id.toLowerCase();
new_id = new_id.replace(/[^a-z|0-9|\-|_|.]/g, "");
new_id = new_id.replace(/[.]+/g, ".");
console.log(new_id);
new_id[0] === "." ? (new_id = new_id.substring(1)) : null;
new_id[new_id.length - 1] === "."
  ? (new_id = new_id.substring(0, new_id.length - 1))
  : null;
console.log(new_id);
new_id.length ? null : (new_id = "a");
new_id.length > 15 ? (new_id = new_id.substring(0, 15)) : null;
while (new_id.length < 3) {
  new_id = new_id.concat(new_id[new_id.length - 1]);
}
console.log(new_id);
