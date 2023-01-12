function getDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();

  return `${dd}-${mm}-${yy}`;
}

class getNewentry {
  constructor(value, D2) {
    let key = Math.random();
    let val = {
      content: value,
      createdAt: getDate(),
      editedAt: getDate(),
    };
    return { key, val };
  }
}

module.exports = { getDate, getNewentry };
