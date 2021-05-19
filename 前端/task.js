const p1 = Promise.resolve();
const p2 = p1.then(() => {
  console.log(0); // A
  // return 4;
  return Promise.resolve(4);
});
const p3 = p2.then((res) => {
  console.log(res); // B
  return 8
});
// const p4 = p3.then(res => {
//   console.log(res); // C
// });

const p5 = Promise.resolve();
const p6 = p5.then(() => {
  console.log(1); // D
});
const p7 = p6.then(() => {
  console.log(2); // E
  return 2;
});
const p8 = p7.then(() => {
  console.log(3); // F
});
const p9 = p8.then(() => {
  console.log(5); // G
});
const p10 = p9.then(() =>{
  console.log(6); // H
})