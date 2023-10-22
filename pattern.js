// Pattern 1
// *****
// *****
// *****
// *****
// *****

const pattern1 = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n; j++) {
      string = string + "*";
    }
    console.log(string);
  }
  return;
};
// pattern1();

// Pattern 2
// *
// **
// ***
// ****
// *****

const Pattern2 = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + "*";
    }
    console.log(string);
  }
};
// Pattern2();

// Pattern 3
// 1
// 12
// 123
// 1234
// 12345

const Pattern3 = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + j;
    }
    console.log(string);
  }
};
// Pattern3();

// Pattern 4
// 1
// 22
// 333
// 4444
// 55555

const Pattern4 = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + i;
    }
    console.log(string);
  }
};

// Pattern4();

// Pattern 5
// 12345
// 1234
// 123
// 12
// 1

const Pattern5 = () => {
  let n = 5;
  for (let i = n; i >= 1; i--) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + j;
    }
    console.log(string);
  }
};
// Pattern5();

// Pattern6
//     *
//    ***
//   *****
//  *******
// *********

const Pattern6 = () => {
  let n = 5;
  let width = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    let stars = 2 * i - 1;
    let gap = (width - stars) / 2;
    console.log(" ".repeat(gap) + "*".repeat(stars));
  }
};
// Pattern6();

//Pattern 7
// *********
//  *******
//   *****
//    ***
//     *

const Pattern7 = () => {
  let n = 5;
  let width = 2 * n - 1;
  for (let i = n; i >= 1; i--) {
    let stars = 2 * i - 1;
    let gap = (width - stars) / 2;
    console.log(" ".repeat(gap) + "*".repeat(stars));
  }
};
// Pattern7();

//Pattern8
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

function Pattern8() {
  let n = 5;
  let width = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    let stars = 2 * i - 1;
    let gap = (width - stars) / 2;
    console.log(" ".repeat(gap) + "*".repeat(stars));
  }
  for (let i = n; i >= 1; i--) {
    let stars = 2 * i - 1;
    let gap = (width - stars) / 2;
    console.log(" ".repeat(gap) + "*".repeat(stars));
  }
}

// Pattern8();

//Pattern9
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function Pattern9() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    string = "";
    for (let j = 1; j <= i; j++) {
      string = string + "*";
    }
    console.log(string);
  }
  for (let i = n - 1; i >= 1; i--) {
    string = "";
    for (let j = 1; j <= i; j++) {
      string = string + "*";
    }
    console.log(string);
  }
}
// Pattern9();

//Pattern10
// 1
// 01
// 101
// 0101
// 10101

function Pattern10() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern = pattern + ((i + j) % 2 ? "0" : "1");
    }
    console.log(pattern);
  }
}
// Pattern10();

// Pattern11
// A
// AB
// ABC
// ABCD
// ABCDE
function Pattern11() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(64 + j);
    }
    console.log(pattern);
  }
}
// Pattern11();

// Patter12
// A
// BB
// CCC
// DDDD
// EEEE
const Pattern12 = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(64 + i);
    }
    console.log(pattern);
  }
};
// Pattern12();
