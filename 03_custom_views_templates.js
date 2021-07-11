// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information


//customized first screen without title

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




// customized validitiy task



const self_paced_reading = magpieViews.view_generator("self_paced_reading", {
	// This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
	trials: trial_info_self.length,
	// name should be identical to the variable name
	name: 'self_paced_reading',
	data: trial_info,
	// you can add custom functions at different stages through a view's life cycle
	// hook: {
	//     after_response_enabled: check_response
	// }
  },
  {
	answer_container_generator: function (config, CT) {
		return 0
   }
}

  /*
  {
	
        stimulus_container_generator: stimulus_container_generators.self-paced-reading,
        answer_container_generator: answer_container_generators.one_button,
        handle_response_function: handle_response_functions.self-paced-reading
  }
*/
  
);
