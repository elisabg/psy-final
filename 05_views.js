// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in our experiment. We hope you have fun.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this exeriment you'll have to imagine that you are in a courtroom. 
  You'll be presented various sentences always in the same scheme. 
  The first sentence judges question to the Defendant. 
  If you've finished reading it press the "next" button on the screen. 
  The second sentence will be the Defendants answer, which you'll only see in Parts. 
  You'll have to read each word by it's own and press 
  the "space"-key when you are finished, to see thee next word. 
  Attention: You'll only see one word at the time. 
  If another word appears, the last one will hide.
  The third sentence will be the Judges conclusion. 
  You'll have to check on a scala of 1 to 10, how much you agree or disagree.`,
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


// MAIN ITEMS

//Screen1, Polar Questions
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
const Polar3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar3',
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
const Polar4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar4',
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
const Polar5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar5',
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
const Polar6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Polar6',
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

//Screen1, What Questions
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
const What3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What3',
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
const What4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What4',
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
const What5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What5',
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
const What6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What6',
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

//Screen1, HowMany questions
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
const HowMany3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany3',
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
const HowMany4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany4',
		text: `How many of the knives did you see in the closet?`,
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
const HowMany6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany6',
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

//Screen2, SUP answers
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

//Screen2, COMP answers
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

//Screen3, Inferences (INF)
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

// FILLER ITEMS

//Screen1, Polar Questions
//Shoes under the table
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
//

/*
const Filler_Polar3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar3',
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
const Filler_Polar4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar4',
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
const Filler_Polar5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar5',
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
const Filler_Polar6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'Filler_Polar6',
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
*/

//Screen1, What Questions
//Shoes under the table
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
/*
const What2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What2',
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
const What3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What3',
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
const What4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What4',
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
const What5 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What5',
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
const What6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'What6',
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
*/
//Screen1, HowMany questions
//Shoes under the table
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
/*

const HowMany2 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany2',
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
const HowMany3 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany3',
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
const HowMany4 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany4',
		text: `How many of the knives did you see in the closet?`,
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
const HowMany6 = magpieViews.view_generator(
	"intro", 
	//config information
	{
		trials: 1,
		name: 'HowMany6',
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
);v
*/
//Screen1, Did Questions
//Shoes under the table
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



//Screen2, Answers
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

//Screen3, Inferences
//Obviously Valid Inferences
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

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/
