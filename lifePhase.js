const lifePhase = age => {
    switch (true) {
      case (age < 0):
        return `This is not a valid age`;
        break;
      case (age < 4):
        return `baby`;
        break;
      case (age < 13):
        return `child`;
        break;
      case (age < 20):
        return `teen`;
        break;
      case (age < 65):
        return `adult`;
        break;
      case (age < 141):
        return `senior citizen`;
        break;
      case (age >= 141):
        return `This is not a valid age`;
        break;
      default:
        return `This is not a valid age`;
        break;
    }
}
console.log(lifePhase(5)); //should print 'child'