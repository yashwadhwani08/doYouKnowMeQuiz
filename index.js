var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;
var userName = chalk.red(readLineSync.question(chalk.bold.blue("What's your name? ")));

console.log(chalk.italic.cyanBright("Welcome",userName,"to the quiz!"));
console.log(chalk.bgYellow.underline("Rules:-"));
console.log(chalk.whiteBright("1. You will get multiple choice questions."));
console.log(chalk.whiteBright("2. Choose your option carefully as you can't change your answer after you select one of the options.You don't have to press enter after choosing your option."));
console.log(chalk.whiteBright("3. Scores : +1 for correct answer, 0 for passing, -1 for incorrect answer "));
console.log(chalk.bold.underline.bgCyanBright("All the best!!"))


console.log();

function play(i,optionList,question,answer,noOfQuestions){
  console.log(chalk.magentaBright("Q.",i+1+"/"+noOfQuestions));
  var index = readLineSync.keyInSelect(optionList,chalk.yellowBright(question));  
  var userAnswer = optionList[index];
  
  if(userAnswer === answer){
    score++;
    console.log(chalk.greenBright("Correct!"));
  }
  else if(index == "-1"){
    console.log(chalk.white("You chose to skip this question"));
  }
  else{
    score--;
    console.log(chalk.redBright("Incorrect!"));
  }  
  
  console.log(chalk.dim.underline("Your current score is: "+score));
  if(i<noOfQuestions-1){
    if (!readLineSync.keyInYN(chalk.blueBright('Do you want to play more?'))){
    // Key that is not `Y` was pressed.
    console.log(chalk.blueBright("----------")); 
    console.log(chalk.bold.underline.italic.bgYellowBright("Your total score is "+score));
    process.exit();
    }
    }
  else{
    console.log(chalk.blueBright("----------")); 
    console.log(chalk.bold.underline.italic.bgYellowBright("Your total score is "+score));
    process.exit();
  }
  console.log(chalk.cyanBright("----------"));  
}

var questions = [{
  options : ['Mumbai','Gondia','Nagpur','Pune'],
  question:"In which of the above cities do I live? ",
  answer:"Gondia"
},{
  options : ['Playing instruments','Gardening','Cooking','Drawing'],
  question:"What's my favorite hobby from the given options? ",
  answer:"Drawing"
},{
  options : ['Chess','Cards','Tennis','Football'],
  question:"What is my favorite game? ",
  answer:"Chess"
}
]

var i = 0;
if(i==questions.length){
  console.log("Your total score is",score);
}

for(i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(i,currentQuestion.options,currentQuestion.question, currentQuestion.answer,questions.length);
}

// frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
// index = readLineSync.keyInSelect(frameworks, 'Which framework?');
// console.log(frameworks[index] + ' is enabled.');

// cities = ['Mumbai','Gondia','Nagpur','Pune'];
// index = readLineSync.keyInSelect(cities, 'Which of the above cities do I live in? ');
