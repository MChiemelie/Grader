function grade(score) {
   score >= 90 && score <= 100
      ? console.log("Grade A+")
      : score >= 80 && score < 90
      ? console.log("Grade A")
      : score >= 70 && score < 80
      ? console.log("Grade B")
      : score >= 60 && score < 70
      ? console.log("Grade C")
      : score >= 50 && score < 60
      ? console.log("Grade D")
      : score >= 0 && score < 40
      ? console.log("Grade F")
      : score < 0
      ? console.log("Grade cannot be less than 0!")
      : score > 100
      ? console.log("Grade cannot be greater than 100!")
      : console.log("Invalid!");
}

grade();