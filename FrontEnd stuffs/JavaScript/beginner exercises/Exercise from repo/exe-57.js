// 57. Get Names

/*
Write a function that given an array of users, returns an array of their names. Can you achieve this in one line of code?
*/

const getNames = users => {
    return users.map(ele => ele.name);
  };
  
  const users = [
    {
      id: 1,
      name: 'Alice',
      startDate: '2021-01-03',
    },
    {
      id: 2,
      name: 'Bob',
      startDate: '2020-02-01',
    },
    {
      id: 3,
      name: 'Claire',
      startDate: '2019-03-01',
    },
  ];
  
  console.log(getNames(users)); // ['Alice', 'Bob', 'Claire']