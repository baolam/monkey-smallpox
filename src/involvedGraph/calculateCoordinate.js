const R = 200;
const espilon = 100;
const r = 30;

function calculate(prior_code, n, width, height) {
  const rad = 2 * Math.PI / n;
  const distance = prior_code * ((1 / rad) * (r + R)) + espilon;
  const cenX = width / 2, cenY = height / 2;
  const rst = [];
  for (let i = 0; i < n; i++) {
    rst.push(
      [ cenX + distance * Math.cos(rad * i), cenY + distance * Math.sin(rad * i) ]
    );
  }
  console.log(rst);
  return rst;
}

export default calculate;