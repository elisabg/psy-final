// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in our experiment. <br>
   We hope you have fun.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this exeriment you'll have to imagine that you are in a courtroom. 
  You'll be presented various sentences always in the same scheme: 
  <br>
  The first sentence is the judges question to the Defendant. <br>
  If you've finished reading it press the "next" button on the screen. 
  <br>
  The second sentence will be the Defendants answer, which you'll only see in Parts. 
  You'll have to read each word by it's own and press 
  the "space"-key when you are finished, to see the next word. 
  Attention: You'll only see one word at the time.<br>
  If another word appears, the last one will hide.
  <br>
  The third sentence will be the Judges conclusion. 
  You'll have to check on a scala of 1 to 5, how much you agree or disagree with the judges conclusion.`,
  buttonText: 'go to trials'
});

/*
const screen1_intro_customized = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'item part 1',
		text: `first sentence`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);

// customized self paced reading task 
const self_paced_reading = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_self.length,
		name: 'self_paced_reading',
		data: trial_info_self,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);

// validity task, third screen
const validity_task = magpieViews.view_generator('rating_scale',
    {
        trials: third_screen.length,
        name: 'validity_task',
        data: third_screen,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
*/

//MAIN TRIALS **CORRECT ORDER**

//Screen1

//Polar questions
const Polar1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar1',
		text: `Did you find at most ten of the diamonds under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar2',
		text: `Did you find at most ten of the diamonds under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar3',
		text: `Did you find at most ten of the coins on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar4',
		text: `Did you find at most ten of the coins on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar5',
		text: `Did you find at most ten of the knives on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar6',
		text: `Did you find at most ten of the knives on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar7',
		text: `Did you see at most ten of the masks in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar8',
		text: `Did you see at most ten of the masks in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar9',
		text: `Did you see at most ten of the men in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar10',
		text: `Did you see at most ten of the men in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar11',
		text: `Did you hear at most ten of the screams in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Polar12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar12',
		text: `Did you hear at most ten of the screams in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
//What Quesions
const What1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What1',
		text: `What did you find under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What2',
		text: `What did you find under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What3',
		text: `What did you find on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What4',
		text: `What did you find on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What5',
		text: `What did you see on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What6',
		text: `What did you see on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What7',
		text: `What did you see in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What8',
		text: `What did you see in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What9',
		text: `What did you see in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What10',
		text: `What did you see in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What11',
		text: `What did you hear in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const What12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What12',
		text: `What did you hear in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
//HowMany Questions
const HowMany1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany1',
		text: `How many of the diamonds did you find under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany2',
		text: `How many of the diamonds did you find under the bed?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany3',
		text: `How many of the coins did you find on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany4',
		text: `How many of the coins did you find on the desk?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany5',
		text: `How many of the knives did you see on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany6',
		text: `How many of the knives did you see on the floor?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany7',
		text: `How many of the masks did you see in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany8',
		text: `How many of the masks did you see in the closet?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany9',
		text: `How many of the shots did you hear in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany10',
		text: `How many of the shots did you hear in the garden?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany11',
		text: `How many of the screams did you hear in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const HowMany12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany12',
		text: `How many of the screams did you hear in the kitchen?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);

//Screen 2

//SUP answers
const SUP1 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP1.length,
		name: 'SUP1',
		data: trial_info_SUP1,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP2 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP2.length,
		name: 'SUP2',
		data: trial_info_SUP2,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP3 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP3.length,
		name: 'SUP3',
		data: trial_info_SUP3,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP4 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP4.length,
		name: 'SUP4',
		data: trial_info_SUP4,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP5 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP5.length,
		name: 'SUP5',
		data: trial_info_SUP5,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP6 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP6.length,
		name: 'SUP6',
		data: trial_info_SUP6,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP7 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP7.length,
		name: 'SUP7',
		data: trial_info_SUP7,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP8 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP8.length,
		name: 'SUP8',
		data: trial_info_SUP8,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP9 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP9.length,
		name: 'SUP9',
		data: trial_info_SUP9,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP10 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP10.length,
		name: 'SUP10',
		data: trial_info_SUP10,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP11 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP11.length,
		name: 'SUP11',
		data: trial_info_SUP11,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP12 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP12.length,
		name: 'SUP12',
		data: trial_info_SUP12,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP13 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP13.length,
		name: 'SUP13',
		data: trial_info_SUP13,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP14 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP14.length,
		name: 'SUP14',
		data: trial_info_SUP14,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP15 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP15.length,
		name: 'SUP15',
		data: trial_info_SUP15,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP16 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP16.length,
		name: 'SUP16',
		data: trial_info_SUP16,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP17 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP17.length,
		name: 'SUP17',
		data: trial_info_SUP17,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const SUP18 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_SUP18.length,
		name: 'SUP18',
		data: trial_info_SUP18,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
//COMP answers
const COMP1 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP1.length,
		name: 'COMP1',
		data: trial_info_COMP1,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP2 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP2.length,
		name: 'COMP2',
		data: trial_info_COMP2,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP3 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP3.length,
		name: 'COMP3',
		data: trial_info_COMP3,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP4 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP4.length,
		name: 'COMP4',
		data: trial_info_COMP4,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP5 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP5.length,
		name: 'COMP5',
		data: trial_info_COMP5,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP6 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP6.length,
		name: 'COMP6',
		data: trial_info_COMP6,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP7 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP7.length,
		name: 'COMP7',
		data: trial_info_COMP7,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP8 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP8.length,
		name: 'COMP8',
		data: trial_info_COMP8,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP9 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP9.length,
		name: 'COMP9',
		data: trial_info_COMP9,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP10 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP10.length,
		name: 'COMP10',
		data: trial_info_COMP10,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP11 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP11.length,
		name: 'COMP11',
		data: trial_info_COMP11,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP12 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP12.length,
		name: 'COMP12',
		data: trial_info_COMP12,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP13 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP13.length,
		name: 'COMP13',
		data: trial_info_COMP13,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP14 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP14.length,
		name: 'COMP14',
		data: trial_info_COMP14,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP15 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP15.length,
		name: 'COMP15',
		data: trial_info_COMP15,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP16 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP16.length,
		name: 'COMP16',
		data: trial_info_COMP16,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP17 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP17.length,
		name: 'COMP17',
		data: trial_info_COMP17,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const COMP18 = magpieViews.view_generator("self_paced_reading",
	{
		trials: trial_info_COMP18.length,
		name: 'COMP18',
		data: trial_info_COMP18,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);

//Screen 3

// Inferences
const INF1 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF1.length,
        name: 'INF1',
        data: trial_info_INF1,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF2= magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF2.length,
        name: 'INF2',
        data: trial_info_INF2,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF3 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF3.length,
        name: 'INF3',
        data: trial_info_INF3,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF4 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF4.length,
        name: 'INF4',
        data: trial_info_INF4,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF5 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF5.length,
        name: 'INF5',
        data: trial_info_INF5,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF6 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF6.length,
        name: 'INF6',
        data: trial_info_INF6,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF7 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF7.length,
        name: 'INF7',
        data: trial_info_INF7,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF8 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF8.length,
        name: 'INF8',
        data: trial_info_INF8,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF9 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF9.length,
        name: 'INF9',
        data: trial_info_INF9,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF10 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF10.length,
        name: 'INF10',
        data: trial_info_INF10,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF11 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF11.length,
        name: 'INF11',
        data: trial_info_INF11,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF12 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF12.length,
        name: 'INF12',
        data: trial_info_INF12,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF13 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF13.length,
        name: 'INF13',
        data: trial_info_INF13,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF14 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF14.length,
        name: 'INF14',
        data: trial_info_INF14,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF15 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF15.length,
        name: 'INF15',
        data: trial_info_INF15,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF16 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF16.length,
        name: 'INF16',
        data: trial_info_INF16,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF17 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF17.length,
        name: 'INF17',
        data: trial_info_INF17,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF18 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF18.length,
        name: 'INF18',
        data: trial_info_INF18,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF19 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF19.length,
        name: 'INF19',
        data: trial_info_INF8,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF20 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF20.length,
        name: 'INF20',
        data: trial_info_INF20,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF21 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF21.length,
        name: 'INF21',
        data: trial_info_INF21,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF22 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF22.length,
        name: 'INF22',
        data: trial_info_INF22,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF23 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF23.length,
        name: 'INF23',
        data: trial_info_INF23,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF24 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF24.length,
        name: 'INF24',
        data: trial_info_INF24,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF25 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF25.length,
        name: 'INF25',
        data: trial_info_INF25,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF26 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF26.length,
        name: 'INF26',
        data: trial_info_INF26,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF27 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF27.length,
        name: 'INF27',
        data: trial_info_INF27,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF28 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF28.length,
        name: 'INF28',
        data: trial_info_INF28,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF29 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF29.length,
        name: 'INF29',
        data: trial_info_INF29,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF30 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF30.length,
        name: 'INF30',
        data: trial_info_INF30,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF31 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF31.length,
        name: 'INF831',
        data: trial_info_INF31,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF32 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF32.length,
        name: 'INF32',
        data: trial_info_INF32,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF33 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF33.length,
        name: 'INF33',
        data: trial_info_INF33,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF34 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF34.length,
        name: 'INF34',
        data: trial_info_INF34,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF35 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF35.length,
        name: 'INF35',
        data: trial_info_INF35,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const INF36 = magpieViews.view_generator('rating_scale',
    {
        trials: trial_info_INF36.length,
        name: 'INF36',
        data: trial_info_INF36,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);

// FILLER ITEMS **CORRECT**

//Screen1

//Polar Questions
const Filler_Polar1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar1',
		text: `Did you find more than ten of the shoes under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar2',
		text: `Did you find nearly ten of the shoes under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar3',
		text: `Did you find more than ten pills on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar4',
		text: `Did you find approximately ten pills on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar5',
		text: `Did you certainly find only ten of the torches in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar6',
		text: `Did you find more than ten of the torches in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar7',
		text: `Did you find more than ten of the books on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar8',
		text: `Did you certainly find nearly ten of the books on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar9',
		text: `Did you see only ten men on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar10',
		text: `Did you certainly see nearly ten of the men on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar11',
		text: `Did you certainly see more ten of the guns in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar12',
		text: `Did you see nearly ten of the guns in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar13 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar13',
		text: `Did you certainly see more than ten of the pictures on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar14 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar14',
		text: `Did you see nearly ten of the pictures on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar15 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar15',
		text: `Did you see only ten rings under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar16 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar16',
		text: `Did you see more than ten of the rings under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar17 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar17',
		text: `Did you hear more than ten cars on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Polar18 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar18',
		text: `Did you hear nearly ten cars on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
//What Questions
const Filler_What1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What1',
		text: `What did you find under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What2',
		text: `What did you find under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What3',
		text: `What did you find on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What4',
		text: `What did you find on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What5',
		text: `What did you find in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What6',
		text: `What did you find in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What7',
		text: `What did you find on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What8',
		text: `What did you find on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What9',
		text: `What did you see on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What10',
		text: `What did you see on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What11',
		text: `What did you see in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What12',
		text: `What did you see in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What13 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What13',
		text: `What did you see on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What14 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What14',
		text: `What did you see on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What15 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What15',
		text: `What did you hear in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What16 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What16',
		text: `What did you hear in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What17 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What17',
		text: `What did you hear on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_What18 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_What18',
		text: `What did you hear on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
//HowMany questions
const Filler_HowMany1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany1',
		text: `How many shoes did you find under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany2',
		text: `How many shoes did you find under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany3',
		text: `How many of the pills did you find on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany4',
		text: `How many of the pills did you find on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany5',
		text: `How many of the torches did you find in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany6',
		text: `How many torches did you find in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany7',
		text: `How many books did you find on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany8',
		text: `How many books did you see on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany9',
		text: `How many men did you see on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany10',
		text: `How many men did you see on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany11',
		text: `How many guns did you see in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany12',
		text: `How many guns did you see in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany13 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany13',
		text: `How many pictures did you see on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany14 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany14',
		text: `How many pictures did you see on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany15 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany15',
		text: `How many of the beeps did you hear in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany16 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany16',
		text: `How many of the beeps did you hear in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany17 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany17',
		text: `How many cars did you hear on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_HowMany18 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_HowMany18',
		text: `How many cars did you hear on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
//Did Questions
const Filler_Did1 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did1',
		text: `Did you find ten shoes under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did2',
		text: `Did you find ten shoes under the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did3',
		text: `Did you certainly find ten pills on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did4',
		text: `Did you find ten pills on the table?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did5',
		text: `Did you find ten torches in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did6',
		text: `Did you find ten torches in the drawer?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did7 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did7',
		text: `Did you see ten books on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did8 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did8',
		text: `Did you see ten books on the shelf?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did9 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did9',
		text: `Did you see ten of the men on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did10 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did10',
		text: `Did you see ten of the men on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did11 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did11',
		text: `Did you see ten guns in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did12 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did12',
		text: `Did you see ten guns in the bag?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did13 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did13',
		text: `Did you see ten pictures on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did14 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did14',
		text: `Did you see ten pictures on the wall?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did15 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did15',
		text: `Did you hear ten beeps in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did16 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did16',
		text: `Did you hear ten beeps in the shower?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did17 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did17',
		text: `Did you hear ten cars on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);
const Filler_Did18 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Did18',
		text: `Did you hear ten cars on the street?`,
	},
	{
		stimulus_container_generator: function(config, CT) {
			return `<div class='magpie-view'>
				<section class="magpie-text-container">
					<p class="magpie-view-text">${config.text}</p>
				</section>
			 </div>`;
		}
	}
);

//Screen2

const Filler_Answer1 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans1.length,
		name: 'Filler_Answer1',
		data: Filler_Ans1,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer2 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans2.length,
		name: 'Filler_Answer2',
		data: Filler_Ans2,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer3 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans3.length,
		name: 'Filler_Answer3',
		data: Filler_Ans3,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer4 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans4.length,
		name: 'Filler_Answer4',
		data: Filler_Ans4,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer5 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans5.length,
		name: 'Filler_Answer5',
		data: Filler_Ans5,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer6 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans6.length,
		name: 'Filler_Answer6',
		data: Filler_Ans6,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer7 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans7.length,
		name: 'Filler_Answer7',
		data: Filler_Ans7,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer8 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans8.length,
		name: 'Filler_Answer8',
		data: Filler_Ans8,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer9 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans9.length,
		name: 'Filler_Answer9',
		data: Filler_Ans9,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer10 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans10.length,
		name: 'Filler_Answer10',
		data: Filler_Ans10,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer11 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans11.length,
		name: 'Filler_Answer11',
		data: Filler_Ans11,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer12 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans12.length,
		name: 'Filler_Answer12',
		data: Filler_Ans12,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer13 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans13.length,
		name: 'Filler_Answer13',
		data: Filler_Ans13,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer14 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans14.length,
		name: 'Filler_Answer14',
		data: Filler_Ans14,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer15 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans15.length,
		name: 'Filler_Answer´15',
		data: Filler_Ans15,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer16 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans16.length,
		name: 'Filler_Answer16',
		data: Filler_Ans16,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer17 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans17.length,
		name: 'Filler_Answer17',
		data: Filler_Ans17,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer18 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans18.length,
		name: 'Filler_Answer18',
		data: Filler_Ans18,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer19 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans19.length,
		name: 'Filler_Answer19',
		data: Filler_Ans19,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer20 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans20.length,
		name: 'Filler_Answer20',
		data: Filler_Ans20,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer21 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans21.length,
		name: 'Filler_Answer21',
		data: Filler_Ans21,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer22 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans22.length,
		name: 'Filler_Answer22',
		data: Filler_Ans22,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer23 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans23.length,
		name: 'Filler_Answer23',
		data: Filler_Ans23,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer24 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans24.length,
		name: 'Filler_Answer24',
		data: Filler_Ans24,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer25 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans25.length,
		name: 'Filler_Answer25',
		data: Filler_Ans25,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer26 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans26.length,
		name: 'Filler_Answer26',
		data: Filler_Ans26,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer27 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans27.length,
		name: 'Filler_Answer27',
		data: Filler_Ans27,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer28 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans28.length,
		name: 'Filler_Answer28',
		data: Filler_Ans28,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer29 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans29.length,
		name: 'Filler_Answer29',
		data: Filler_Ans29,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer30 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans30.length,
		name: 'Filler_Answer30',
		data: Filler_Ans30,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer31 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans31.length,
		name: 'Filler_Answer31',
		data: Filler_Ans31,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer32 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans32.length,
		name: 'Filler_Answer32',
		data: Filler_Ans32,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer33 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans33.length,
		name: 'Filler_Answer33',
		data: Filler_Ans33,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer34 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans34.length,
		name: 'Filler_Answer34',
		data: Filler_Ans34,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer35 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans35.length,
		name: 'Filler_Answer35',
		data: Filler_Ans35,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer36 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans36.length,
		name: 'Filler_Answer36',
		data: Filler_Ans36,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer37 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans37.length,
		name: 'Filler_Answer37',
		data: Filler_Ans37,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer38 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans38.length,
		name: 'Filler_Answer38',
		data: Filler_Ans38,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer39 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans39.length,
		name: 'Filler_Answer39',
		data: Filler_Ans39,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer40 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans40.length,
		name: 'Filler_Answer40',
		data: Filler_Ans40,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer41 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans41.length,
		name: 'Filler_Answer41',
		data: Filler_Ans41,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer42 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans42.length,
		name: 'Filler_Answer42',
		data: Filler_Ans42,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer43 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans43.length,
		name: 'Filler_Answer43',
		data: Filler_Ans43,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer44 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans44.length,
		name: 'Filler_Answer44',
		data: Filler_Ans44,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer45 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans45.length,
		name: 'Filler_Answer45',
		data: Filler_Ans45,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer46 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans46.length,
		name: 'Filler_Answer46',
		data: Filler_Ans46,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer47 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans47.length,
		name: 'Filler_Answer47',
		data: Filler_Ans47,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer48 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans48.length,
		name: 'Filler_Answer48',
		data: Filler_Ans48,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer49 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans49.length,
		name: 'Filler_Answer49',
		data: Filler_Ans49,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer50 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans50.length,
		name: 'Filler_Answer50',
		data: Filler_Ans50,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer51 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans51.length,
		name: 'Filler_Answer51',
		data: Filler_Ans51,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer52 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans52.length,
		name: 'Filler_Answer52',
		data: Filler_Ans52,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer53 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans53.length,
		name: 'Filler_Answer53',
		data: Filler_Ans53,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer54 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans54.length,
		name: 'Filler_Answer54',
		data: Filler_Ans54,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer55 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans55.length,
		name: 'Filler_Answer55',
		data: Filler_Ans55,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer56 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans56.length,
		name: 'Filler_Answer56',
		data: Filler_Ans56,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer57 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans57.length,
		name: 'Filler_Answer57',
		data: Filler_Ans57,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer58 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans58.length,
		name: 'Filler_Answer58',
		data: Filler_Ans58,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer59 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans59.length,
		name: 'Filler_Answer59',
		data: Filler_Ans59,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer60 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans60.length,
		name: 'Filler_Answer60',
		data: Filler_Ans60,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer61 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans61.length,
		name: 'Filler_Answer61',
		data: Filler_Ans61,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer62 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans62.length,
		name: 'Filler_Answer62',
		data: Filler_Ans62,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer63 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans63.length,
		name: 'Filler_Answer63',
		data: Filler_Ans63,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer64 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans64.length,
		name: 'Filler_Answer64',
		data: Filler_Ans64,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer65 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans65.length,
		name: 'Filler_Answer65',
		data: Filler_Ans65,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer66 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans66.length,
		name: 'Filler_Answer66',
		data: Filler_Ans66,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer67 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans67.length,
		name: 'Filler_Answer67',
		data: Filler_Ans67,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer68 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans68.length,
		name: 'Filler_Answer68',
		data: Filler_Ans68,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer69 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans69.length,
		name: 'Filler_Answer69',
		data: Filler_Ans69,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer70 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans70.length,
		name: 'Filler_Answer70',
		data: Filler_Ans70,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer71 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans71.length,
		name: 'Filler_Answer71',
		data: Filler_Ans71,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);
const Filler_Answer72 = magpieViews.view_generator("self_paced_reading",
	{
		trials: Filler_Ans72.length,
		name: 'Filler_Answer72',
		data: Filler_Ans72,
	},
	{
		answer_container_generator: function (config, CT) {
			return `<div class='magpie-view-answer-container'>
				 <p class='magpie-view-question'>${config.data[CT].question}</p>
					<label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
						<input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
				 </div>`;
		}
	}
);

//Screen3

const Filler_INF1 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info1.length,
        name: 'Filler_INF1',
        data: Filler_info1,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF2 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info2.length,
        name: 'Filler_INF2',
        data: Filler_info2,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF3 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info3.length,
        name: 'Filler_INF3',
        data: Filler_info3,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF4 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info4.length,
        name: 'Filler_INF4',
        data: Filler_info4,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF5 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info5.length,
        name: 'Filler_INF5',
        data: Filler_info5,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF6 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info6.length,
        name: 'Filler_INF6',
        data: Filler_info6,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF7 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info7.length,
        name: 'Filler_INF7',
        data: Filler_info7,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF8 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info8.length,
        name: 'Filler_INF8',
        data: Filler_info8,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF9 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info9.length,
        name: 'Filler_INF9',
        data: Filler_info9,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF10 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info10.length,
        name: 'Filler_INF10',
        data: Filler_info10,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF11 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info11.length,
        name: 'Filler_INF11',
        data: Filler_info11,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF12 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info12.length,
        name: 'Filler_INF12',
        data: Filler_info12,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF13 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info13.length,
        name: 'Filler_INF13',
        data: Filler_info13,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF14 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info14.length,
        name: 'Filler_INF14',
        data: Filler_info14,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF15 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info15.length,
        name: 'Filler_INF15',
        data: Filler_info15,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF16 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info16.length,
        name: 'Filler_INF16',
        data: Filler_info16,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF17 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info17.length,
        name: 'Filler_INF17',
        data: Filler_info17,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF18 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info18.length,
        name: 'Filler_INF18',
        data: Filler_info18,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF19 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info19.length,
        name: 'Filler_INF19',
        data: Filler_info19,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF20 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info20.length,
        name: 'Filler_INF20',
        data: Filler_info20,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF21 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info21.length,
        name: 'Filler_INF21',
        data: Filler_info21,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF22 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info22.length,
        name: 'Filler_INF22',
        data: Filler_info22,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF23 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info23.length,
        name: 'Filler_INF23',
        data: Filler_info23,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF24 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info24.length,
        name: 'Filler_INF24',
        data: Filler_info24,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF25 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info25.length,
        name: 'Filler_INF25',
        data: Filler_info25,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF26 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info26.length,
        name: 'Filler_INF26',
        data: Filler_info26,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF27 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info27.length,
        name: 'Filler_INF27',
        data: Filler_info27,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF28 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info28.length,
        name: 'Filler_INF28',
        data: Filler_info28,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF29 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info29.length,
        name: 'Filler_INF29',
        data: Filler_info29,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF30 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info30.length,
        name: 'Filler_INF30',
        data: Filler_info30,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF31 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info31.length,
        name: 'Filler_INF31',
        data: Filler_info31,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF32 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info32.length,
        name: 'Filler_INF32',
        data: Filler_info32,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF33 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info33.length,
        name: 'Filler_INF33',
        data: Filler_info33,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF34 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info34.length,
        name: 'Filler_INF34',
        data: Filler_info34,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF35 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info35.length,
        name: 'Filler_INF35',
        data: Filler_info35,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF36 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info36.length,
        name: 'Filler_INF36',
        data: Filler_info36,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF37 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info37.length,
        name: 'Filler_INF37',
        data: Filler_info37,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF38 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info38.length,
        name: 'Filler_INF38',
        data: Filler_info38,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF39 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info39.length,
        name: 'Filler_INF39',
        data: Filler_info39,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF40 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info40.length,
        name: 'Filler_INF40',
        data: Filler_info40,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);


const Filler_INF41 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info41.length,
        name: 'Filler_INF41',
        data: Filler_info41,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);



const Filler_INF42 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info42.length,
        name: 'Filler_INF42',
        data: Filler_info42,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF43 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info43.length,
        name: 'Filler_INF43',
        data: Filler_info43,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF44 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info44.length,
        name: 'Filler_INF44',
        data: Filler_info44,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF45 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info45.length,
        name: 'Filler_INF45',
        data: Filler_info45,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF46 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info46.length,
        name: 'Filler_INF46',
        data: Filler_info46,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF47 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info47.length,
        name: 'Filler_INF47',
        data: Filler_info47,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF48 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info48.length,
        name: 'Filler_INF48',
        data: Filler_info48,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF49 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info49.length,
        name: 'Filler_INF49',
        data: Filler_info49,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF50 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info50.length,
        name: 'Filler_INF50',
        data: Filler_info50,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF51 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info51.length,
        name: 'Filler_INF51',
        data: Filler_info51,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF52 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info52.length,
        name: 'Filler_INF52',
        data: Filler_info52,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF53 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info53.length,
        name: 'Filler_INF53',
        data: Filler_info53,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF54 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info54.length,
        name: 'Filler_INF54',
        data: Filler_info54,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF55 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info55.length,
        name: 'Filler_INF55',
        data: Filler_info55,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF56 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info56.length,
        name: 'Filler_INF56',
        data: Filler_info56,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF57 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info57.length,
        name: 'Filler_INF57',
        data: Filler_info57,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF58 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info58.length,
        name: 'Filler_INF58',
        data: Filler_info58,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF59 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info59.length,
        name: 'Filler_INF59',
        data: Filler_info59,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF60 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info60.length,
        name: 'Filler_INF60',
        data: Filler_info60,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF61 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info61.length,
        name: 'Filler_INF61',
        data: Filler_info61,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF62 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info62.length,
        name: 'Filler_INF62',
        data: Filler_info62,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF63 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info63.length,
        name: 'Filler_INF63',
        data: Filler_info63,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF64 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info64.length,
        name: 'Filler_INF64',
        data: Filler_info64,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF65 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info65.length,
        name: 'Filler_INF65',
        data: Filler_info65,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);

const Filler_INF66 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info67.length,
        name: 'Filler_INF67',
        data: Filler_info67,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);


const Filler_INF67 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info67.length,
        name: 'Filler_INF67',
        data: Filler_info67,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF68 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info68.length,
        name: 'Filler_INF68',
        data: Filler_info68,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF69 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info69.length,
        name: 'Filler_INF69',
        data: Filler_info69,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF70 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info70.length,
        name: 'Filler_INF70',
        data: Filler_info70,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF71 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info71.length,
        name: 'Filler_INF71',
        data: Filler_info71,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);
const Filler_INF72 = magpieViews.view_generator('rating_scale',
    {
        trials: Filler_info72.length,
        name: 'Filler_INF72',
        data: Filler_info72,
    },
    {
		answer_container_generator: function(config, CT) {
			return `<p class='magpie-view-question'>${config.data[CT].question}</p>
					<div class='magpie-view-answer-container'>
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionLeft}</strong>
						<label for="1" class='magpie-response-rating'>1</label>
						<input type="radio" name="answer" id="1" value="1" />
						<label for="2" class='magpie-response-rating'>2</label>
						<input type="radio" name="answer" id="2" value="2" />
						<label for="3" class='magpie-response-rating'>3</label>
						<input type="radio" name="answer" id="3" value="3" />
						<label for="4" class='magpie-response-rating'>4</label>
						<input type="radio" name="answer" id="4" value="4" />
						<label for="5" class='magpie-response-rating'>5</label>
						<input type="radio" name="answer" id="5" value="5" />
						<strong class='magpie-response-rating-option magpie-view-text'>${config.data[CT].optionRight}</strong>
					</div>`;
			}
	},
);

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});
