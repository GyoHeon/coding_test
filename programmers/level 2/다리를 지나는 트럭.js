let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
let n = truck_weights.length;

for (let i = 0; i < n; i++) {
  let truck = truck_weights.shift();
  console.log(truck);
}
