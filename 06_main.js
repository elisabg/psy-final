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

            //sentence16
            What6, 
            COMP8,
            INF16,

            //sentence4
            What2,
            COMP2,
            INF4,

            //sentence28
            What10,
            COMP14,
            INF28,

            //sentence22
            What8,
            COMP11,
            INF22,

            //sentence10
            What4,
            COMP5,
            INF10,

            //sentence34
            What12,
            COMP17,
            INF34,

            // FILLER

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

            //23
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

            //sentence3
            What1, 
            SUP2,
            INF3,

            //sentence21
            What7,
            SUP11,
            INF21,

            // sentence15
            What5,
            SUP8,
            INF15,

            //sentence33
            What11,
            SUP17,
            INF33,

            //sentence27
            What9,
            SUP14,
            INF27,

            //sentence9
            What3,
            SUP5,
            INF9,

            // FILLERS

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

            //sentence20
            Polar8,
            COMP10,
            INF20,

            //sentence32
            Polar12,
            COMP16,
            INF32,

            //sentence2
            Polar2,
            COMP1,
            INF2,
           
            //sentence8
            Polar4,
            COMP4,
            INF8,

            //sentence14
            Polar6,
            COMP7,
            INF14,

            //sentence26
            Polar10,
            COMP13,
            INF26,

            // FILLERS

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
 
             //72
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
             Filler_What18,
             Filler_Answer70,
             Filler_INF70,

            // COND 5 (howmany comp)

            //sentence36
            HowMany12,
            COMP18,
            INF36,

            //sentence12
            HowMany4,
            COMP6,
            INF12,

            //sentence24
            HowMany8,
            COMP12,
            INF24,

            //sentence30
            HowMany10,
            COMP15,
            INF30,

            //sentence6
            HowMany2,
            COMP3,
            INF6,

            //sentence18
            HowMany6,
            COMP9,
            INF18,

            // FILLERS
            
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
             Filler_Did6,
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

             //sentence7
             Polar3,
             SUP4,
             INF7,
 
             //sentence25
             Polar9,
             SUP13,
             INF25,
 
             //sentence31
             Polar11,
             SUP16,
             INF31,
 
             //sentence13
             Polar5,
             SUP7,
             INF13,
 
             //sentence19
             Polar7,
             SUP10,
             INF19,
 
             //sentence1
             Polar1,
             SUP1,
             INF1,

             // FILLERS
            
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
             
            //sentence29
            HowMany9, // first screen
            SUP15,
            INF29,

            //sentence17
            HowMany5,
            SUP9,
            INF17,

            //sentence11
            HowMany3,
            SUP6,
            INF11,

            //sentence5
            HowMany1,
            SUP3,
            INF5,

            //sentence35
            HowMany11,
            SUP18,
            INF35,

            //sentence23
            HowMany7,
            SUP12,
            INF23,

            // FILLERS
            
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
                intro.name,
            instructions.name,
            What6.name, 
            COMP8.name,
            INF16.name,
            What2.name,
            COMP2.name,
            INF4.name,
            What10.name,
            COMP14.name,
            INF28.name,
            What8.name,
            COMP11.name,
            INF22.name,
            What4.name,
            COMP5.name,
            INF10.name,
            What12.name,
            COMP17.name,
            INF34.name,
            Filler_What14.name,
            Filler_Answer54.name,
            Filler_INF54.name,
            Filler_HowMany6.name,
            Filler_Answer20.name,
            Filler_INF20.name,
            Filler_Polar5.name,
            Filler_Answer17.name,
            Filler_INF17.name,
            Filler_Did5.name,
            Filler_Answer23.name,
            Filler_INF23.name,
            Filler_HowMany4.name,
            Filler_Answer14.name,
            Filler_INF14.name,
            Filler_Did13.name,
            Filler_Answer55.name,
            Filler_INF55.name,
            Filler_What5.name,
            Filler_Answer21.name,
            Filler_INF21.name,
            Filler_HowMany12.name,
            Filler_Answer44.name,
            Filler_INF44.name,
            Filler_Polar14.name,
            Filler_Answer50.name,
            Filler_INF50.name,
            Filler_HowMany3.name,
            Filler_Answer13.name,
            Filler_INF13.name,
            Filler_Polar18.name,
            Filler_Answer66.name,
            Filler_INF66.name,
            Filler_Did2.name,
            Filler_Answer8.name,
            Filler_INF8.name,
            What1.name, 
            SUP2.name,
            INF3.name,
            What7.name,
            SUP11.name,
            INF21.name,
            What5.name,
            SUP8.name,
            INF15.name,
            What11.name,
            SUP17.name,
            INF33.name,
            What9.name,
            SUP14.name,
            INF27.name,
            What3.name,
            SUP5.name,
            INF9.name,
            Filler_HowMany13.name,
            Filler_Answer51.name,
            Filler_INF51.name,
            Filler_Polar7.name,
            Filler_Answer25.name,
            Filler_INF25.name,
            Filler_HowMany7.name,
            Filler_Answer27.name,
            Filler_INF27.name,
            Filler_What3.name,
            Filler_Answer11.name,
            Filler_INF11.name,
            Filler_Did16.name,
            Filler_Answer64.name,
            Filler_INF64.name,
            Filler_Did7.name,
            Filler_Answer31.name,
            Filler_INF31.name,
            Filler_Did8.name,
            Filler_Answer32.name,
            Filler_INF32.name,
            Filler_HowMany17.name,
            Filler_Answer67.name,
            Filler_INF67.name,
            Filler_HowMany16.name,
            Filler_Answer60.name,
            Filler_INF60.name,
            Filler_Polar13.name,
            Filler_Answer49.name,
            Filler_INF49.name,
            Filler_HowMany2.name,
            Filler_Answer6.name,
            Filler_INF6.name,
            Filler_HowMany15.name,
            Filler_Answer59.name,
            Filler_INF59.name,
            Polar8.name,
            COMP10.name,
            INF20.name,
            Polar12.name,
            COMP16.name,
            INF32.name,
            Polar2.name,
            COMP1.name,
            INF2.name,
            Polar4.name,
            COMP4.name,
            INF8.name,
            Polar6.name,
            COMP7.name,
            INF14.name,
            Polar10.name,
            COMP13.name,
            INF26.name,
             Filler_HowMany8.name,
             Filler_Answer28.name,
             Filler_INF28.name,
             Filler_Did14.name,
             Filler_Answer56.name,
             Filler_INF56.name,
             Filler_Polar12.name,
             Filler_Answer42.name,
             Filler_INF42.name,
             Filler_Did18.name,
             Filler_Answer72.name,
             Filler_INF72.name,
             Filler_Polar10.name,
             Filler_Answer34.name,
             Filler_INF34.name,
             Filler_What9.name,
             Filler_Answer37.name,
             Filler_INF37.name,
             Filler_Polar8.name,
             Filler_Answer26.name,
             Filler_INF26.name,
             Filler_Polar6.name,
             Filler_Answer18.name,
             Filler_INF18.name,
             Filler_Polar16.name,
             Filler_Answer58.name,
             Filler_INF58.name,
             Filler_Polar11.name,
             Filler_Answer41.name,
             Filler_INF41.name,
             Filler_Polar9.name,
             Filler_Answer33.name,
             Filler_INF33.name,
             Filler_What18.name,
             Filler_Answer70.name,
             Filler_INF70.name,
            HowMany12.name,
            COMP18.name,
            INF36.name,
            HowMany4.name,
            COMP6.name,
            INF12.name,
            HowMany8.name,
            COMP12.name,
            INF24.name,
            HowMany10.name,
            COMP15.name,
            INF30.name,
            HowMany2.name,
            COMP3.name,
            INF6.name,
            HowMany6.name,
            COMP9.name,
            INF18.name,
             Filler_What8.name,
             Filler_Answer30.name,
             Filler_INF30.name,
             Filler_Did9.name,
             Filler_Answer39.name,
             Filler_INF39.name,
             Filler_HowMany5.name,
             Filler_Answer19.name,
             Filler_INF19.name,
             Filler_Did10.name,
             Filler_Answer40.name,
             Filler_INF40.name,
             Filler_Did6.name,
             Filler_Answer24.name,
             Filler_INF24.name,
             Filler_What15.name,
             Filler_Answer61.name,
             Filler_INF61.name,
             Filler_What13.name,
             Filler_Answer53.name,
             Filler_INF53.name,
             Filler_Polar1.name,
             Filler_Answer1.name,
             Filler_INF1.name,
             Filler_HowMany9.name,
             Filler_Answer35.name,
             Filler_INF35.name,
             Filler_Did3.name,
             Filler_Answer15.name,
             Filler_INF15.name,
             Filler_What6.name,
             Filler_Answer22.name,
             Filler_INF22.name,
             Filler_What10.name,
             Filler_Answer38.name,
             Filler_INF38.name,
             Polar3.name,
             SUP4.name,
             INF7.name,
             Polar9.name,
             SUP13.name,
             INF25.name,
             Polar11.name,
             SUP16.name,
             INF31.name,
             Polar5.name,
             SUP7.name,
             INF13.name,
             Polar7.name,
             SUP10.name,
             INF19.name,
             Polar1.name,
             SUP1.name,
             INF1.name,
             Filler_Did15.name,
             Filler_Answer63.name,
             Filler_INF63.name,
             Filler_What11.name,
             Filler_Answer45.name,
             Filler_INF45.name,
             Filler_Did1.name,
             Filler_Answer7.name,
             Filler_INF7.name,
             Filler_Did4.name,
             Filler_Answer16.name,
             Filler_INF16.name,
             Filler_What2.name,
             Filler_Answer4.name,
             Filler_INF4.name,
             Filler_What17.name,
             Filler_Answer69.name,
             Filler_INF69.name,
             Filler_HowMany18.name,
             Filler_Answer68.name,
             Filler_INF68.name,
             Filler_Polar17.name,
             Filler_Answer65.name,
             Filler_INF65.name,
             Filler_Did17.name,
             Filler_Answer71.name,
             Filler_INF71.name,
             Filler_HowMany10.name,
             Filler_Answer36.name,
             Filler_INF36.name,
             Filler_Did12.name,
             Filler_Answer48.name,
             Filler_INF48.name,
             Filler_Polar3.name,
             Filler_Answer9.name,
             Filler_INF9.name,
            HowMany9.name, 
            SUP15.name,
            INF29.name,
            HowMany5.name,
            SUP9.name,
            INF17.name,
            HowMany3.name,
            SUP6.name,
            INF11.name,
            HowMany1.name,
            SUP3.name,
            INF5.name,
            HowMany11.name,
            SUP18.name,
            INF35.name,
            HowMany7.name,
            SUP12.name,
            INF23.name,
             Filler_HowMany1.name,
             Filler_Answer5.name,
             Filler_INF5.name,
             Filler_Did11.name,
             Filler_Answer47.name,
             Filler_INF47.name,
             Filler_What1.name,
             Filler_Answer3.name,
             Filler_INF3.name,
             Filler_HowMany14.name,
             Filler_Answer52.name,
             Filler_INF52.name,
             Filler_Polar2.name,
             Filler_Answer2.name,
             Filler_INF2.name,
             Filler_What16.name,
             Filler_Answer62.name,
             Filler_INF62.name,
             Filler_Polar4.name,
             Filler_Answer10.name,
             Filler_INF10.name,
             Filler_What12.name,
             Filler_Answer46.name,
             Filler_INF46.name,
             Filler_HowMany11.name,
             Filler_Answer43.name,
             Filler_INF43.name,
             Filler_What4.name,
             Filler_Answer12.name,
             Filler_INF12.name,
             Filler_What7.name,
             Filler_Answer29.name,
             Filler_INF29.name,
             Filler_Polar15.name,
             Filler_Answer57.name,
             Filler_INF57.name,
            post_test.name,
            thanks.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }
    });
});
