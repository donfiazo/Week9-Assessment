function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').replace(/--/g, '-').toLowerCase();
  }
  console.log(spinalCase('AllThe-small Things'));