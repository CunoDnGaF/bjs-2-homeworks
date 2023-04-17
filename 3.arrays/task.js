function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]));
  }

  function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(user => user.gender === gender);
    let agesSum = filteredUsers.map(user => user.age).reduce((acc, val) => acc + val, 0);
    let averageAge = agesSum / filteredUsers.length;
    if(Number.isFinite(averageAge)) {
      return averageAge;
    } else {
      return 0;
    } 
  }