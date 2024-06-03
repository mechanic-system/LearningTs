function createAnalytics() : object {
  let counter:number = 0;
  let isDestroyed = false;
  function listener(): number {
    counter += 1;
    return counter;
  }
  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    },
    getName() {
      return 'Tom';
    },
  };
}

module.exports = createAnalytics();
