const readLineSync = require("readline-sync")
const kuler = require("kuler")
const userName = readLineSync.question("What's your name ")
console.log("\n")
console.log(kuler(`Hello ${userName}. Let's play `, '#3B82F6'))
console.log("\n")
let score = 0;
//Creating dataset
const dataBase = {
  data: [
    {
      question: "Which of the following phenomena cannot be observed on the surface of the Moon?",
      options: {
        a: "Rising and setting of the Sun",
        b: "Solar eclipse",
        c: "Motion of comets",
        d: "Twinkling of stars"
      },
      answer: "d"
    },
    {
      question: "Which of the following planets has a revolution time which is shorter than its rotation time?",
      options: {
        a: "Jupiter",
        b: "Venus",
        c: "Mars",
        d: "Uranus"
      },
      answer: "b"
    },
    {
      question: "Which planet looks reddish in the night sky?",
      options: {
        a: "Jupiter",
        b: "Saturn",
        c: "Mars",
        d: "Mercury"
      },
      answer: "c"
    },
    {
      question: "The first satellite to operate in geostationary orbit is",
      options: {
        a: "Syncom 2",
        b: "Mir",
        c: "Skylab",
        d: "Sputnik 1"
      },
      answer: "a"
    },
    {
      question: "When was the first extrasolar planet discovered?",
      options: {
        a: "1995",
        b: "1992",
        c: "1990",
        d: "1958"
      },
      answer: "b"
    },
    {
      question:
        "In total, how many space flights were carried out by Spacelab?",
      options: {
        a: "20 flights",
        b: "50 flights",
        c: "25 flights",
        d: "40 flights"
      },
      answer: "c"
    },
    {
      question: "In 1921, Albert Einstein received the Nobel Prize for Physics for which of his following work?",
      options: {
        a: "Physical Cosmology",
        b: "Neutrino Oscillations",
        c: "Relativity Theory",
        d: "Photoelectric Effect"
      },
      answer: "d"
    },
    {
      question: "Which year is Halley''s Comet expected to return to the solar system?",
      options: {
        a: "2061",
        b: "2045",
        c: "2086",
        d: "2110"
      },
      answer: "a"
    },
    {
      question: "Approximately how many miles (or kilometres) are there in a light-year?",
      options: {
        a: "5.9 trillion(9.5 trillion km)",
        b: "5.9 million(9.5 million km)",
        c: "5.9 billion(9.5 billion km)",
      },
      answer: "a"
    },
    {
      question: "What type of galaxy is our Milky Way?",
      options: {
        a: "An elliptical galaxy",
        b: "A spiral galaxy",
        c: "An irregulary galaxy",
        d: "A round galaxy"
      },
      answer: "b"
    },
  ]
}
//Creating leaderboard
const leaderboard = {
  data: [
    {
      name: "Malika",
      score: 2
    },
    {
      name: "Riyan",
      score: 1
    },
    {
      name: "Asmita",
      score: 2
    }
  ]
}

function showQuestionsandOptions() {
  for (let i = 0; i < dataBase.data.length; i++) {
    console.log(dataBase.data[i].question + "\n")
    for (let key in dataBase.data[i].options) {
      console.log(`${key} ${dataBase.data[i].options[key]} `)
    }
    console.log("\n")
    let userAnswer = readLineSync.question("Choose the right answer ")
    console.log("\n")
    if (userAnswer === dataBase.data[i].answer) {
      console.log(kuler("Correct Answer", "00FF00"))
      score++;
    }
    else {
      console.log(kuler(`Incorrect Answer.`, "#DC2626"))
      console.log(kuler(`\nRight answer is ${dataBase.data[i].answer}`, "#0EA5E9"))
    }
    console.log("\n")
  }
  newUser(userName, score)
}
function sortInDescending(a, b) {
  return (b.score - a.score)
}
function newUser(userName, score) {
  leaderboard.data.push({ name: userName, score: score })
  let sortedLeaderboard = leaderboard.data.sort(sortInDescending)
  console.log(kuler("\nCheck leaderboard\n", "#FACC15"))
  for (let leader of sortedLeaderboard) {
    console.log(kuler(`${leader.name} Score ${leader.score}`, "#9333EA"))
  }
}
showQuestionsandOptions()