/**
 * This function gets today's date and returns it.
 */
exports.getDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);
};


/**
 * Simply gets current day and returns it.
 */
exports.getDay = () => {
    const today = new Date();
    const options = {
      weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
  };




