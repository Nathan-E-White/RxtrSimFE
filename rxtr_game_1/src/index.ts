

const Not = (x: boolean) => !x;

/* Language: typescript */
/* Path: src/index.ts */
/* Create an arrow holding function */
/* The function will check if an object is null or undefined */
/* If the object is null or undefined, it will return true */
/* If the object is not null or undefined, it will return false */
/* The function is named NullQ */
/* The function takes an appropriate DOM element as an argument */
/* The function returns a boolean */
const NullQ = (o: HTMLElement | null): boolean => {
    return typeof o === "undefined" || o === null;
}

/* Language: typescript */
/* Path: src/index.ts */
/* Create an arrow holding function */
/* The function will check if an object is valid (not null or undefined) */
/* If the object is valid, it will return true */
/* If the object is not valid, it will return false */
/* The function is named ValidQ */
/* The function takes an appropriate DOM element as an argument */
/* The function returns a boolean */

const ValidQ = (o: HTMLElement | null): boolean => {
    return Not(NullQ(o));
}

/* language=TypeScript */
/* Path: src/index.ts */
/* Create an arrow holding function */
/* The function will check if an object is active */
/* If the object is active, it will return true */
/* If the object is not active, it will return false */
/* The function is named ActiveQ */
/* The function takes an appropriate DOM element as an argument */
/* The function returns a boolean */
const ActiveQ = (o: HTMLElement | null): boolean => {
    if (ValidQ(o)) {
        // @ts-ignore
        return o.classList.contains("active");
    }
    return false;
}

class ClassActive {

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static deactivate(e: HTMLElement) {
        if (ActiveQ(e)) {
            e.classList.remove("active");
        }
    }

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static activate(e: HTMLElement) {
        if (Not(ActiveQ(e))) {
            e.classList.add("active");
        }
    }
}

class HiddenOrVisible {

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static HiddenQ(e: HTMLElement) {
        return e.hasAttribute("hidden");
    }

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static VisibleQ(e: HTMLElement) {
        return Not(HiddenOrVisible.HiddenQ(e));
    }

}


class HiddenAttribute {

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static hide(e: HTMLElement) {
        if (HiddenOrVisible.VisibleQ(e)) {
            e.setAttribute("hidden", "");
        }
    }

    //@Validate
    //@Reflect.metadata("design:type", HTMLElement)
    static reveal(e: HTMLElement) {
        if (HiddenOrVisible.HiddenQ(e)) {
            e.removeAttribute("hidden");
        }
    }
}


// Find the HTML element for the tab buttons
function main() {

    console.log("main function called");

    const homeTabButton = document.getElementById("home-btn") as HTMLElement;
    const simTabButton = document.getElementById("sim-btn") as HTMLElement;
    const aboutTabButton = document.getElementById("about-btn") as HTMLElement;

    // Find the HTML element for the tab divs
    const homeTabDiv = document.getElementById("home-tab") as HTMLElement;
    const simTabDiv = document.getElementById("sim-tab") as HTMLElement;
    const aboutTabDiv = document.getElementById("about-tab") as HTMLElement;


    /* Create a click handler for the home tab button */
    function homeTabClickHandler() {

        /* Want: home tab active, sim tab inactive, about tab inactive */
        ClassActive.activate(homeTabDiv);
        ClassActive.deactivate(simTabDiv);
        ClassActive.deactivate(aboutTabDiv);

        /* Want: home tab not hidden, sim tab hidden, about tab hidden */
        HiddenAttribute.reveal(homeTabDiv);
        HiddenAttribute.hide(simTabDiv);
        HiddenAttribute.hide(aboutTabDiv);

    }

    /* Create a click handler for the simulation tab button */
    function simulationTabClickHandler() {
        // TODO: Implement this
        console.log("Simulation tab clicked");
    }

    /* Create a click handler for the about tab button */
    function aboutTabClickHandler() {
        // TODO: Implement this
        console.log("About tab clicked");
    }

    /* Add the click handler to the home tab button */
    homeTabButton.addEventListener("click", homeTabClickHandler);

    /* Add the click handler to the simulation tab button */
    simTabButton.addEventListener("click", simulationTabClickHandler);

    /* Add the click handler to the about tab button */
    aboutTabButton.addEventListener("click", aboutTabClickHandler);

    /* Create a click handler for the new simulation button */
    function newSimulationClickHandler() {
        console.log("New simulation clicked");
    }

    /* Create a click handler for the start simulation button */
    function startSimulationClickHandler() {
        console.log("Start simulation clicked");
    }

    /* Create a click handler for the stop simulation button */
    function stopSimulationClickHandler() {
        console.log("Stop simulation clicked");
    }

    /* Create a click handler for the reset simulation button */
    function resetSimulationClickHandler() {
        console.log("Reset simulation clicked");
    }

    /* Create a click handler for the step simulation button */
    function stepSimulationClickHandler() {
        console.log("Step simulation clicked");
    }

    /* Add the unregistered click handlers to the simulation buttons */
    const newSimulationButton = document.getElementById("new-sim-btn") as HTMLElement;
    newSimulationButton!!.addEventListener("click", newSimulationClickHandler);

    const startSimulationButton = document.getElementById("start-sim-btn") as HTMLElement;
    startSimulationButton!!.addEventListener("click", startSimulationClickHandler);

    const stopSimulationButton = document.getElementById("stop-sim-btn") as HTMLElement;
    stopSimulationButton!!.addEventListener("click", stopSimulationClickHandler);

    const resetSimulationButton = document.getElementById("reset-sim-btn") as HTMLElement;
    resetSimulationButton!!.addEventListener("click", resetSimulationClickHandler);

    const stepSimulationButton = document.getElementById("step-sim-btn") as HTMLElement;
    stepSimulationButton!!.addEventListener("click", stepSimulationClickHandler);

}


document.onload = main;