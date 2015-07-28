/// <reference path="uia.d.ts" />
"use strict";

////////////////////////////////////////////////////////////////////// TEST FUNCTION //////////////////////////////////////////////////////////////////////
function testForFlaggingEmailScenario() {

    flag_email();

    // Check for result
    host.setTimeout(function () {

        return Q.fcall(function () {

            // Find the follow up button
            return uia.root().findFirst(function (el) { return (el.name === "Follow Up"); }, 0, 11);

        }).then(function (followUpButton) {

            // Check for elements. If the follow up button has children, then it shows it's expanded
            // If the followup button has more than 0 children, then it is already fully expanded
            assertOk((followUpButton.childNodes().length > 0), "Test if the follow up button is expanded or not");

            // Check if the Narrator is reading out the correct thing
            ///////////////////////////////////////////////////////////// TODO /////////////////////////////////////////////////////////////
            // Get the sentence that narrator says
            var narratorSentence;
            assertStrictEqual(narratorSentence, "Please press up and down to choose the flag. Press enter to select. ",
                "Test if the Narrator is reading out the correct message");

            return "Fulfilled";

        }, function (error) { throw new Error("The promise for finding the Follow up button fails. "); });

    }, 3000);

}


////////////////////////////////////////////////////////////////////// CALL THE TEST FUNCTION //////////////////////////////////////////////////////////////////////
testForFlaggingEmailScenario();



