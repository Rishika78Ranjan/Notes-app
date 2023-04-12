const questions = [{
    'que': 'which of following is a markup language'
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': "what year javadcript launched",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b"
},
{
    que: "what does css stand for",
    'a': "hyper text markup language",
    'b': "css",
    'c': "jason object notation",
    'd': "helicopters terminal motorboats lamborghini",
    correct: "b"
}

]
let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = question[index]
    console.log(data)
    quesbox.innerText = `${index + 1}{data.que}`;
    optionInput[0].nextElementSibling.innertext = data.a;
    optionInput[1].nextElementSibling.innertext = data.b;
    optionInput[2].nextElementSibling.innertext = data.c;
    optionInput[3].nextElementSibling.innertext = data.d;

}
const submitQuiz = () => {
    reset();
    const ans = getAnswer()


    if (ans == data.correct) {
        right++;
    } else {
        wrong++;

    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionsInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
                break;
            }
        }

    )
    return answer;

}



const reset = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
    const endQuiz = () => {
        document.getElementById("box").innerHTML = `
            <h3> thank you for playing quiz</h3>
            <h2> $(right)/ $(total)are correct </h2>
        `
    }

    loadQuestion();
}


