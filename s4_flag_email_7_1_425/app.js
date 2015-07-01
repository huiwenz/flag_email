/// <reference path="uia.d.ts" />

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

host.onKeypress = function (e) {
    console.log("onkeypress");
    console.log(JSON.stringify(e));

    // "1"
    if (e.keyCode === 49) {
        //narrator.say("1 2 3");

    }

    // "2"
    else if (e.keyCode === 50) {

    }

        // "4"
        // Scenario 4
    else if (e.keyCode === 52) {

        return Q.fcall(function () {
            return uia.root();
        })

        .then(function (desktop) {

            // Find HOME tab
            return Q.fcall(function () {

                return desktop.findFirst(function (el) { return (el.name == "Home"); }, 0, 9);

            }).then(function (homeButton) {

                // Just assume the HOME tab is already expanded

                // Find Follow Up tab
                return Q.fcall(function () {
                    return desktop.findFirst(function (el) { return (el.name == "Follow Up"); }, 0, 11);
                }).then(function (followUpButton) {

                    // Find ExpandCollapse pattern
                    var expandCollapsePattern = followUpButton.getPattern(10005);
                    // Expand the tab
                    expandCollapsePattern.expand();

                    narrator.say("Please press up and down to choose the flag. Press enter to select. ");

                    //////////////////////////////////////////////// TBD? ////////////////////////////////////////////////

                    // Maybe add an event listener in the back that can inform the user that an email has already been flagged
                    // as XXX?

                    return "fulfilled";

                }, function (error) { throw new Error("Can't find Follow Up tab!"); });

            }, function (error) { throw new Error("Can't find HOME tab!"); });

        }, function (error) { throw new Error("Can't get root value!!"); });
    }

    // "5"
    else if (e.keyCode === 53) {
        debugger;
    }
};
