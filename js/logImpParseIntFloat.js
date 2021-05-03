function toParseFloat(par) {
  let res = "";
  par = par.split("");
  for (let i = 0; i < par.length; i++) {
    if (isNaN(par[0]) || Number(par[0]) < 1) {
      par.shift();
    }
  }
  for (let i = 0; i < par.length; i++) {
    if (par[i] === ".") {
      if (res !== "" && !res.includes(".")) {
        res += par[i];
      } else {
        return Number(res);
      }
    } else if (!isNaN(par[i])) {
      res += par[i];
    }
  }
  return Number(res);
}
// console.log(toParseFloat("what000123.45.76"));

function toParseInt(par) {
  let res = "";
  let len = par.length - 1;
  //   par = par.split("");
  if (isNaN(par[0])) {
    return NaN;
  }
  if (par.startsWith("0x")) {
    let hexObj = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
    };
    res = 0;
    par = par.slice(2); //ktrel vercnel miayn a-f tarerov nerkayacvac mas@
    // console.log(par);
    for (let i = 0; i < par.length; i++) {
      if (!(par[0] in hexObj)) {
        return NaN;
      } else {
        for (let i = 1; i < par.length; i++) {
          if (!(par[i] in hexObj)) {
            par = par.slice(0, i);
          }
        }
        // console.log(par);
      }
    }
    len = par.length - 1;
    for (let i = 0; i < par.length; i++) {
      if (par[i] in hexObj) {
        res += hexObj[par[i]] * 16 ** len--;
      } else {
        res += 0;
      }
    }
    return res;
  } else {
    for (let i = 0; i < par.length; i++) {
      if (!isNaN(par[i])) {
        res += par[i];
      } else {
        return res;
      }
    }
  }
}

console.log(toParseInt("0xc1nabjgfuih"));
console.log(parseInt("0xc1nabjgfuih"));
