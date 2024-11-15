function findEventHandlerIndex(eventHandlers, handler) {
  return Object.keys(eventHandlers).forEach((key) => {
    if (eventHandlers[key] === handler) {
      return eventHandlers.indexOf(key);
    }
  });
}
