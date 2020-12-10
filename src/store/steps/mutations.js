function setStep(state) {
  state.steps += 1;
}

function restoreSteps(state) {
  state.steps = 0;
}

module.exports = {
  setStep,
  restoreSteps,
};
