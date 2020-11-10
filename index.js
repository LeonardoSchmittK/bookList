"use strict";

let familyList = [
  { title: "Coraline", author: "Neil Gaiman" },
  { title: "Lord of The Rings", author: "J.R.R Tolkien" },
  { title: "It", author: "Stephen King" },
];

const add = (arr, ...bookName) => {
  let newList = [...arr];
  let names = bookName;
  for (let i = 0; i <= names.length - 1; ++i) {
    newList.push(names[i]);
  }
 
  return newList;
};

const remove = (arr, ...bookName) => {
  let newList = [...arr];
  let names = bookName;

  for (let e = 0; e < names.length; ++e) {
    for (let i = 0; i < newList.length; ++i) {
      if (newList[i].title === bookName[e]) {
        var index = newList.indexOf(newList[i]);
        newList.splice(index, 1);
      }
    }
  }

  return newList;
};

const brotherList = add(
  remove(familyList, "Coraline"),
  { title: "Harry Potter", author: "J.K Rowling" },
  { title: "Duna", author: "Frank Herbert" }
);

const motherList = remove(brotherList, "Duna");

const fatherList = add(
  familyList,
  { title: "The Last Wish", author: "Andrzej Sapkowski" },
  { title: "Jurassic Park", author: "Michael Crichton" }
);

console.log({ motherList, fatherList, brotherList });
