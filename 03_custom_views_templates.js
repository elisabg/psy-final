// My Custom views 

// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

/*
const item1 = function(config){
	const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)
        }
    };
	// We have to return the view, so that it can be used in 05_views.js
    return view;
};

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

	}

)
*/