// In this file you can specify the trial data for your experiment

/*
//Example
const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};
*/

//Trial info for self-paced-reading task
const trial_info_self = [
    {
        QUD: "The judge asks: 'What did you see under the bed?' The witness responds",
        sentence: "all | of the | yellow marbles | are | inside | the case.'",
        option1: "Next",
    },
];

//Trial info for validiy task
const third_screen = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "Judges answer",
        question: "Do you agree with the judge?",

    }
]