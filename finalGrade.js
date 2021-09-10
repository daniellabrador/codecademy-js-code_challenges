function finalGrade(a,b,c){
    const avg = (a+b+c)/3;
    if (a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100){
      return `You have entered an invalid grade.`
    } else {
      switch (true){
      case (avg < 60):
        return 'F';
        break;
      case (avg < 70):
        return 'D';
        break;
      case (avg < 80):
        return 'C';
        break;
      case (avg < 90):
        return 'B';
        break;
      case (avg <= 100):
        return 'A';
        break;
    }    
    }
  
}
  
console.log(finalGrade(90, 80, 70)) // Should print 'C'
  
console.log(finalGrade(99, 92, 95)) // Should print 'A'