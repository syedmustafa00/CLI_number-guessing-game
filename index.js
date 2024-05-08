import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess the number: "
    }
]);
const { userGuess } = answer;
if (userGuess === systemGeneratedNo) {
    console.log(userGuess, "userGuess", systemGeneratedNo, "SYs");
    console.log("Congratulation your answer is correct \n You Win!");
}
else {
    console.log("please try again better luck next time");
}
