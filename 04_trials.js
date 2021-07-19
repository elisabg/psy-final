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

/*
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
];
*/

//MAIN TRIALS

// Trial Info, SUP answers
const trial_info_SUP1 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_SUP2 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_SUP3 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | at | most | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_SUP4 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_SUP5 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | at | most | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_SUP6 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | at | most | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];

// Trial Info, COMP answers
const trial_info_COMP1= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | diamonds | under | the | bed.",
        option1: "Next",
    },
];
const trial_info_COMP2 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | coins | on | the | desk.",
        option1: "Next",
    },
];
const trial_info_COMP3 = [
    {
        QUD: "The witness responds:",
        sentence: "I | found | less | than | ten | of | the | knives | on | the | floor.",
        option1: "Next",
    },
];
const trial_info_COMP4 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | masks | in | the | closet.",
        option1: "Next",
    },
];
const trial_info_COMP5 = [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | less | than | ten | of | the | men | in | the | garden.",
        option1: "Next",
    },
];
const trial_info_COMP6 = [
    {
        QUD: "The witness responds:",
        sentence: "I | heard | less | than | ten | of | the | screams | in | the | kitchen.",
        option1: "Next",
    },
];

//Trial Info, Inferences (INF)
const trial_info_INF1 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the diamonds she found under the bed.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF2 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the coins she found on the desk.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF3= [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the knives she found on the floor.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF4 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the masks she saw in the closet.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF5 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the men she saw in the garden.",
        question: "Do you agree with the judge?",

    }
];
const trial_info_INF6 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness doesn’t know exactly how many of the screams she heard in the kitchen.",
        question: "Do you agree with the judge?",

    }
];

// FILLER ITEMS

// Trial Info, Answers
//Shoes under the table
const Filler_Ans1= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans2= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans3= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | of | the | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans4= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | shoes | under | the | table",
        option1: "Next",
    },
];
const Filler_Ans5= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans6= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
const Filler_Ans7= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | shoes | under | the | table",
        option1: "Next",
    },
];
const Filler_Ans8= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | shoes | under | the | table.",
        option1: "Next",
    },
];
//Pills on the table
const Filler_Ans9= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | only | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans10= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | nearly | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans11= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans12= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans13= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | of | the | pills | on | the | table.",
        option1: "Next",
    },
];
const Filler_Ans14= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | probably | only | ten | of | the | pills | on | the | table.",
        option1: "Next",
    },
];
//Torches in the drawer
const Filler_Ans15= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans16= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | certainly | more | than | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans17= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | more | than | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans18= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | only | ten | torches | in | the | drawer",
        option1: "Next",
    },
];
const Filler_Ans19= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | nearly | ten | of | the | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans20= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans21= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
const Filler_Ans22= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | torches | in | the | drawer.",
        option1: "Next",
    },
];
//Books on the shelf
const Filler_Ans23= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | found | more | than | ten | of | the | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans24= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | nearly | ten | of | the | books | on | the | shelf..",
        option1: "Next",
    },
];
const Filler_Ans25= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | probably | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans26= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | found | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans27= [
    {
        QUD: "The witness responds:",
        sentence: "I | found | approximately | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans28= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans29= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
const Filler_Ans30= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | books | on | the | shelf.",
        option1: "Next",
    },
];
//Men on the street
const Filler_Ans31= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | saw | only | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans32= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | nearly | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans33= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | more | than | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans34= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans35= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | approximately | ten | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans36= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | men | on | the | street",
        option1: "Next",
    },
];
const Filler_Ans37= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
const Filler_Ans38= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | of | the | men | on | the | street.",
        option1: "Next",
    },
];
//guns in the bag
const Filler_Ans39= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | more | than | ten | of | the | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans40= [
    {
        QUD: "The witness responds:",
        sentence: "I | probably | saw | nearly | ten | of | the | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans41= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | certainly | only | ten | guns | in | the | bag. ",
        option1: "Next",
    },
];
const Filler_Ans42= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | approximately | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans43= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | more | than | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans44= [
    {
        QUD: "The witness responds:",
        sentence: "I | saw | only | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
const Filler_Ans45= [
    {
        QUD: "The witness responds:",
        sentence: "I | certainly | saw | nearly | ten | guns | in | the | bag.",
        option1: "Next",
    },
];
//pictures on the wall
const Filler_Ans46= [
    {
        QUD: "The witness responds:",
        sentence: "I saw more than ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans48= [
    {
        QUD: "The witness responds:",
        sentence: "I saw certainly only ten pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans49= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];
const Filler_Ans47= [
    {
        QUD: "The witness responds:",
        sentence: "I probably saw nearly ten of the pictures on the wall.",
        option1: "Next",
    },
];




// Trial Info, Inferences
//Shoes under the table
const Filler_info1 = [
    {
        optionLeft: "agree",
        optionRight: "disagree",
        QUD: "The witness considers it possible that she found ten of the shoes under the table.",
        question: "Do you agree with the judge?",

    }
];