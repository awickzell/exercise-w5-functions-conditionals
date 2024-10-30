/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  )
}
theCoders(`jennie`, `tom`)

/*
2)
Pass in only ONE name when you call the function and see what happens.
(HINT, you should get undefined...)
*/

theCoders(`jennie`)


/*
3) 
create a function that checks which name is the longest when comparing the coders 
and print out: "The driver has the longest name." or "The navigator has the longest name" 
or if the names ar the same length "The driver and the navigator has equally long names"
*/

const checkNameLength = (driver, navigator) => {
  if (driver.length > navigator.length) {
    console.log(`The driver has the longest name.`)
  } else if (navigator.length > driver.length) {
    console.log(`The navigator has the longest name.`)
  } else if (driver.length === 0 && navigator.length === 0) {
    console.log(`Please provide names for both the driver and navigator.`)
  } else {
    console.log(`The driver and the navigator have equally long names.`)
  }
}

theCoders(`jennie`, `tom`)
checkNameLength(`jennie`, `tom`)

/*
4) 
to get user input you can use the prompt() and then store that into a variable.
Such as 
let userAge = prompt('How old are you?')
Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
alert('wow you are 33! that's young!')
or alert('23! Younger than Zlatan') or something like that.
Add as many conditonals as you want.
*/

const checkUserAge = () => {
  let userAge = prompt('How old are you?')

  userAge = parseInt(userAge)

  if (isNaN(userAge) || userAge <= 0) {
    alert(`Please enter a valid age.`)
  } else if (userAge < 18) {
    alert(`Wow, you're still young! Enjoy it!`)
  } else if (userAge < 30) {
    alert(`You're younger than Zlatan! Still lots of adventures ahead!`)
  } else if (userAge < 40) {
    alert(`${userAge}! Prime of your life!`)
  } else if (userAge < 60) {
    alert(`${userAge}! Lots of experience, keep going strong!`)
  } else {
    alert(`${userAge}! You're wise and full of stories to tell!`)
  }
}

checkUserAge()


/*
const calculationTest = () => {
5)
In this function we want to give the user a mathematical calculation to 
give us the answer to. Something like prompt('What is 5 + 6?')  
If the answer is correct, congratulate the user. 'Yay! Correct'
If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
You choose if to use addition, subtraction, multiplication or division. 
*/
const mathQuestion = () => {
  const num1 = 5
  const num2 = 6
  const correctAnswer = num1 + num2

  let userAnswer = prompt(`What is ${num1} + ${num2}?`)
  userAnswer = Number(userAnswer)

  if (userAnswer === correctAnswer) {
    alert(`Yay! Correct`)
  } else {
    alert(`Noooo, the answer is ${correctAnswer}`)
  }
}

mathQuestion()


/*
6) **BONUS**
Make the calculation machine we just made show random calculations everytime you invoke the function.
But hey, maybe limit the randomness to be numbers between 0-10?
*/
const secondMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10 + 1)
  const num2 = Math.floor(Math.random() * 10 + 1)
  const operations = [`+`, `-`, `*`, `/`]
  const operation = operations[Math.floor(Math.random() * operations.length)]
  let correctAnswer

  switch (operation) {
    case `+`:
      correctAnswer = num1 + num2
      break
    case `-`:
      correctAnswer = num1 - num2
      break
    case `*`:
      correctAnswer = num1 * num2
      break
    case `/`:
      correctAnswer = Math.round((num1 / num2) * 10) / 10
      break
  }

  let userAnswer = prompt(`What is ${num1} ${operation} ${num2}?`)
  userAnswer = Number(userAnswer)

  if (userAnswer === correctAnswer) {
    alert(`Yay! Correct!`)
  } else {
    alert(`Noooo, the answer is ${correctAnswer}`)
  }
}
secondMathQuestion()

