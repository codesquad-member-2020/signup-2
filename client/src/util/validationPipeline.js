const makePipelineObject = (target, passedValidation, message) => {
  return {
    target,
    passedValidation,
    message
  };
};

export default makePipelineObject;
