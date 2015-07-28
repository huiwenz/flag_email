/// <reference path="uia.d.ts" />
"use strict";

host.onActivate = function () {
    console.log("onActivate");
};

host.onDeactivate = function () {
    console.log("onDeactivate");
};

host.onSetFocus = function () {
    console.log("onSetFocus");

    var el = uia.focused();

    console.log("name: \"" + el.name + "\"");
    console.log("class name: \"" + el.className + "\"");
    console.log("id: " + el.id);
    console.log("automationid: " + el.automationid);

};

host.onKillFocus = function () {
    console.log("onKillFocus");
}

// Wrap the behavior of flagging an email into a function
function flag_email() {

    // Note: We assume the HOME button is already expanded.
    return Q.fcall(function () {
        return uia.root().findFirst(function (el) { return (el.name === "Follow Up"); }, 0, 11);
    })
    .then(function (followUpButton) {

        // Find ExpandCollapse pattern
        var expandCollapsePattern = followUpButton.getPattern(10005);
        // Expand the tab
        expandCollapsePattern.expand();

        narrator.say("Please press up and down to choose the flag. Press enter to select. ");

        return "Fulfilled";

    }, function (error) { throw new Error("The promise for finding the Follow up button fails. "); });

}

host.onKeypress = function (e) {
    console.log("onkeypress");
    console.log(JSON.stringify(e));

    // "1"
    if (e.keyCode === 49) {

    }

    // "2"
    else if (e.keyCode === 50) {

    }

    // "4"
    // The shortcut key for flagging an email. 
    else if (e.keyCode === 52) {

        flag_email();

    }

    // "5"
    else if (e.keyCode === 53) {
        debugger;
    }
};
