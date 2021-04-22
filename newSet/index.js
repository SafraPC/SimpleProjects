const seen = new Set();

const arr = [
    { id: 1, name: "test1" },
      { id: 2, name: "test2" },
      { id: 3, name: "test1" },
      { id: 4, name: "test3" },
      { id: 5, name: "test5" },
      { id: 6, name: "test3" },
      { id: 7, name: "test7" },
      { id: 8, name: "test8" },
  ];

const filteredArr = arr.filter((el) => {
    const duplicate = seen.has(el.name);
    seen.add(el.name);
    return duplicate;
});

console.log(filteredArr);