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

            /*
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
            // 54
            Filler_What14,
            Filler_Answer54,
            Filler_INF54,

            //20
            Filler_HowMany6,
            Filler_Answer20,
            Filler_INF20,

            //17
            Filler_Polar5,
            Filler_Answer17,
            Filler_INF17,

            // 23
            Filler_Did5,
            Filler_Answer23,
            Filler_INF23,

            //14
            Filler_HowMany4,
            Filler_Answer14,
            Filler_INF14,

            //55
            Filler_Did13,
            Filler_Answer55,
            Filler_INF55,

            //21
            Filler_What5,
            Filler_Answer21,
            Filler_INF21,

            //44
            Filler_HowMany12,
            Filler_Answer44,
            Filler_INF44,

            //50
            Filler_Polar14,
            Filler_Answer50,
            Filler_INF50,

            //13
            Filler_HowMany3,
            Filler_Answer13,
            Filler_INF13,

            //66
            Filler_Polar18,
            Filler_Answer66,
            Filler_INF66,

            //8
            Filler_Did2,
            Filler_Answer8,
            Filler_INF8,




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
            // 51
            Filler_HowMany13,
            Filler_Answer51,
            Filler_INF51,

            //25
            Filler_Polar7,
            Filler_Answer25,
            Filler_INF25,

            //27
            Filler_HowMany7,
            Filler_Answer27,
            Filler_INF27,

            // 11
            Filler_What3,
            Filler_Answer11,
            Filler_INF11,

            //64
            Filler_Did16,
            Filler_Answer64,
            Filler_INF64,

            //31
            Filler_Did7,
            Filler_Answer31,
            Filler_INF31,

            //32
            Filler_Did8,
            Filler_Answer32,
            Filler_INF32,

            //67
            Filler_HowMany17,
            Filler_Answer67,
            Filler_INF67,

            //60
            Filler_HowMany16,
            Filler_Answer60,
            Filler_INF60,

            //49
            Filler_Polar13,
            Filler_Answer49,
            Filler_INF49,

            //6
            Filler_HowMany2,
            Filler_Answer6,
            Filler_INF6,

            //59
            Filler_HowMany15,
            Filler_Answer59,
            Filler_INF59,


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
             // 28
             Filler_HowMany8,
             Filler_Answer28,
             Filler_INF28,
 
             //56
             Filler_Did14,
             Filler_Answer56,
             Filler_INF56,
 
             //42
             Filler_Polar12,
             Filler_Answer42,
             Filler_INF42,
 
             // 72
             Filler_Did18,
             Filler_Answer72,
             Filler_INF72,
 
             //34
             Filler_Polar10,
             Filler_Answer34,
             Filler_INF34,
 
             //37
             Filler_What9,
             Filler_Answer37,
             Filler_INF37,
 
             //26
             Filler_Polar8,
             Filler_Answer26,
             Filler_INF26,
 
             //18
             Filler_Polar6,
             Filler_Answer18,
             Filler_INF18,
 
             //58
             Filler_Polar16,
             Filler_Answer58,
             Filler_INF58,
 
             //41
             Filler_Polar11,
             Filler_Answer41,
             Filler_INF41,
 
             //33
             Filler_Polar9,
             Filler_Answer33,
             Filler_INF33,
 
             //70
             Filler_HowMany18,
             Filler_Answer70,
             Filler_INF70,


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
            
             // 30
             Filler_What8,
             Filler_Answer30,
             Filler_INF30,
 
             //39
             Filler_Did9,
             Filler_Answer39,
             Filler_INF39,
 
             //19
             Filler_HowMany5,
             Filler_Answer19,
             Filler_INF19,
 
             // 40
             Filler_Did10,
             Filler_Answer40,
             Filler_INF40,
 
             //24
             Filler_Polar6,
             Filler_Answer24,
             Filler_INF24,
 
             //61
             Filler_What15,
             Filler_Answer61,
             Filler_INF61,
 
             //53
             Filler_What13,
             Filler_Answer53,
             Filler_INF53,
 
             //1
             Filler_Polar1,
             Filler_Answer1,
             Filler_INF1,
 
             //35
             Filler_HowMany9,
             Filler_Answer35,
             Filler_INF35,
 
             //15
             Filler_Did3,
             Filler_Answer15,
             Filler_INF15,
 
             //22
             Filler_What6,
             Filler_Answer22,
             Filler_INF22,
 
             //38
             Filler_What10,
             Filler_Answer38,
             Filler_INF38,


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




             // FILLERS??
            
             // 63
             Filler_Did15,
             Filler_Answer63,
             Filler_INF63,
 
             //45
             Filler_What11,
             Filler_Answer45,
             Filler_INF45,
 
             //7
             Filler_Did1,
             Filler_Answer7,
             Filler_INF7,
 
             // 16
             Filler_Did4,
             Filler_Answer16,
             Filler_INF16,
 
             //4
             Filler_What2,
             Filler_Answer4,
             Filler_INF4,
 
             //69
             Filler_What17,
             Filler_Answer69,
             Filler_INF69,
 
             //68
             Filler_HowMany18,
             Filler_Answer68,
             Filler_INF68,
 
             //65
             Filler_Polar17,
             Filler_Answer65,
             Filler_INF65,
 
             //71
             Filler_Did17,
             Filler_Answer71,
             Filler_INF71,
 
             //36
             Filler_HowMany10,
             Filler_Answer36,
             Filler_INF36,
 
             //48
             Filler_Did12,
             Filler_Answer48,
             Filler_INF48,
 
             //9
             Filler_Polar3,
             Filler_Answer9,
             Filler_INF9,






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

            // FILLERS??
            
             // 5
             Filler_HowMany1,
             Filler_Answer5,
             Filler_INF5,
 
             //47
             Filler_Did11,
             Filler_Answer47,
             Filler_INF47,
 
             //3
             Filler_What1,
             Filler_Answer3,
             Filler_INF3,
 
             // 52
             Filler_HowMany14,
             Filler_Answer52,
             Filler_INF52,
 
             //2
             Filler_Polar2,
             Filler_Answer2,
             Filler_INF2,
 
             //62
             Filler_What16,
             Filler_Answer62,
             Filler_INF62,
 
             //10
             Filler_Polar4,
             Filler_Answer10,
             Filler_INF10,
 
             //46
             Filler_What12,
             Filler_Answer46,
             Filler_INF46,
 
             //43
             Filler_HowMany11,
             Filler_Answer43,
             Filler_INF43,
 
             //12
             Filler_What4,
             Filler_Answer12,
             Filler_INF12,
 
             //29
             Filler_What7,
             Filler_Answer29,
             Filler_INF29,
 
             //57
             Filler_Polar15,
             Filler_Answer57,
             Filler_INF57,
            */


            //list1,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "262",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "mvillaavila@uos.de",
            //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
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
