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
            COMP5,
            INF10,

            //sentence 6
            What12,
            COMP17,
            INF34,

            // FILLER??


            // COND 4 (WHAT SUP)
            //sentence 1
            What1, // first screen               // no next button
            SUP2,
            INF3,


            //sentence4
            What7,
            SUP11,
            INF21,

            // sentence 3
            What5,
            SUP8,
            INF15,

            //sentence 6
            What11,
            SUP17,
            INF33,

            //sentence 5
            What9,
            SUP14,
            INF27,

            //sentence 2
            What3,
            SUP5,
            INF9,

            // FILLERS??


            // COND 1 (polar comp)

            //sentence 4
            Polar8, // first screen
            COMP10,
            INF20,

            //sentence6
            Polar12,
            COMP16,
            INF32,

            // sentence 1
            Polar2,
            COMP1,
            INF2,
            

            //sentence 2                     // next doesn't work
            Polar4,
            COMP4,
            INF8,

            //sentence 3
            Polar6,
            COMP7,
            INF14,

            //sentence 5
            Polar10,
            COMP13,
            INF26,


            // FILLERS??


            // COND 5 (howmany comp)

            //sentence 6
            HowMany12, // first screen
            COMP18,
            INF36,

            //sentence 2
            HowMany4,
            COMP6,
            INF12,

            // sentence 4
            HowMany8,
            COMP12,
            INF24,

            //sentence 5
            HowMany10,
            COMP15,
            INF30,

            //sentence 1
            HowMany2,
            COMP3,
            INF6,

            //sentence 3
            HowMany6,
            COMP9,
            INF18,


            // FILLERS??


            // COND 2 (polar sup)

             //sentence 2
             Polar3, // first screen
             SUP4,
             INF7,
 
             //sentence 5
             Polar9,
             SUP13,
             INF25,
 
             // sentence 6
             Polar11,
             SUP16,
             INF31,
 
             //sentence 3
             Polar5,
             SUP7,
             INF13,
 
             //sentence 4
             Polar7,
             SUP10,
             INF19,
 
             //sentence 1
             Polar1,
             SUP1,
             INF1,





             // COND 6 (Howmany sup)
             
            //sentence 5
            HowMany9, // first screen
            SUP15,
            INF29,

            //sentence 3
            HowMany5,
            SUP9,
            INF17,

            // sentence 2
            HowMany3,
            SUP6,
            INF11,

            //sentence 1
            HowMany1,
            SUP3,
            INF5,

            //sentence 6
            HowMany11,
            SUP18,
            INF35,

            //sentence 4
            HowMany7,
            SUP12,
            INF23,





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
