// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

// const pea = stateControl();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    // "soil": (plant["soil"] || 0) + 5
    });
  };
};

// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop] : (state[prop] || 0) + value
// })

// Plant {
// "Soil" : 5,
//  "Water": 0
// }

// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);

// let plant =  { soil: 0, light: 0,  water: 0 }
// feed(5)(plant);

const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

console.log("IS THIS WORKING?");
// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

$('#feed').click(function() {
  const newState = stateControl(blueFood); //const stateControl = storeState(stateControl(blueFood));
  $('#soil-value').text(`Soil: ${newState.soil}`);
});

// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

$('#show-state').click(function() {
  console.log("SHOW STATE CLICKED");
  console.dir(stateControl);
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = stateControl(changeState("new thing")(100));
  console.dir(currentState);
  $('#soil-value').text(`NEW THING: ${currentState["new thing"]}`).show();
});

$("#show-plant").click(function(){
  let pea = {"soil": 0, "light": 0, "water":0};
  const currentState = stateControl(changeState("New and improved Sammai's Pea's")(10));
  $('#soil-value').text(`New Pea's: ${currentState["New and improved Sammai's Pea's"]}`).show();
});

