// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions,

            
            // COND 3(what-comp)

            //sentence 3
            What6, // first screen
            COMP8,
            INF16,

            //sentence1
            What2, 
            COMP2,
            INF4,

            // sentence 5
            What10,
            COMP14,
            INF28,

            //sentence 4
            What8,
            COMP11,
            INF22,

            //sentence2
            What4,
            COMP8,
            INF16,

            
            //sentence 6
            What12,
            COMP17,
            INF34,

            // FILLER??


            // COND 4 (WHAT SUP)
            //sentence 1
            What1, // first screen               // no next button
            SUP2,
            INF4,
            /*
            //sentence4
            What4,
            SUP4,
            INF4,

            // sentence 3
            What3,
            SUP8,
            INF8,

            //sentence 6
            What6,
            SUP6,
            INF6,

            //sentence 5
            What5,
            SUP5,
            INF5,

            

            //sentence 2
            What2,
            SUP2,
            INF2,

            // FILLERS??


            // COND 1 (pol comp)

            //sentence 4
            Polar4, // first screen
            COMP4,
            INF4,

            //sentence6
            Polar6,
            COMP6,
            INF6,

            // sentence 1
            Polar1,
            COMP1,
            INF1,
            

            //sentence 2                     // next doesn't work
            Polar2,
            COMP2,
            INF2,

            //sentence 3
            Polar3,
            COMP3,
            INF3,

            //sentence 5
            Polar5,
            COMP5,
            INF5,


            // FILLERS??


            // COND 5 (howmany comp)

            //sentence 6
            HowMany6, // first screen
            COMP6,
            INF6,

            //sentence 2
            HowMany2,
            COMP2,
            INF2,

            // sentence 4
            HowMany4,
            COMP4,
            INF4,

            //sentence 5
            HowMany5,
            COMP7,
            INF7,

            //sentence 1
            HowMany1,
            COMP1,
            INF1,

            //sentence 3
            HowMany3,
            COMP8,
            INF8,


            // FILLERS??


            // COND 2 (polar sup)

             //sentence 2
             Polar2, // first screen
             SUP2,
             INF2,
 
             //sentence 5
             Polar5,
             SUP5,
             INF5,
 
             // sentence 6
             Polar6,
             SUP6,
             INF6,
 
             //sentence 3
             Polar3,
             SUP3,
             INF3,
 
             //sentence 4
             Polar4,
             SUP4,
             INF4,
 
             //sentence 1
             Polar1,
             SUP1,
             INF1,





             // COND 6 (Howmany sup)
             
            //sentence 5
            HowMany5, // first screen
            SUP7,
            INF7,

            //sentence 3
            HowMany3,
            SUP8,
            INF8,

            // sentence 2
            HowMany2,
            SUP2,
            INF2,

            //sentence 1
            HowMany1,
            SUP1,
            INF1,

            //sentence 6
            HowMany6,
            SUP6,
            INF6,

            //sentence 4
            HowMany4,
            SUP4,
            INF4,
*/




            //list1,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
