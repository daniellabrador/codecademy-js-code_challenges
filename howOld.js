// Write your function here:
function howOld(age,year){
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthYear = currentYear-age;
    const diffYear = Math.abs(birthYear-year)
    switch (true){
      case currentYear < year:
        return `You will be ${diffYear} in the year ${year}`
        break;
      case year <= birthYear:
        return `The year ${year} was ${diffYear} years before you were born`
        break;
      case birthYear < year:
        return `You were ${diffYear} in the year ${year}`
        break;
      default:
        return `Error!`
        break;
    }
}

console.log(howOld(40,1981));
  