export const notReact = (function () {
  let _root;
  let _templateCallback;

  let hooks = [];
  let idx = 0;

  const _eventArray = [];

  function useState(initValue) {
    let state;
    state = hooks[idx] !== undefined ? hooks[idx] : initValue;
    const _idx = idx;
    const setState = (newValue) => {
      hooks[_idx] = newValue;
      render();
    };
    idx++;
    return [state, setState];
  }

  function useEffect(callback, dependancyArray) {
    const oldDependancies = hooks[idx];
    let hasChanged = true;
    if (oldDependancies) {
      hasChanged = dependancyArray.some(
        (dep, i) => !Object.is(dep, oldDependancies[i])
      );
    }
    hooks[idx] = dependancyArray;
    idx++;
    if (hasChanged) callback();
  }

  function init(rootElement, templateCallback) {
    _root = rootElement;
    _templateCallback = templateCallback;
    render();
  }

  function render() {
    idx = 0;
    _eventArray.length = 0;
    _root.innerHTML = _templateCallback();
  }

  // event Listeners
  document.addEventListener("click", (e) => handleEventListeners(e));
  function handleEventListeners(e) {
    _eventArray.forEach((target) => {
      if (e.target.id === target.id) {
        e.preventDefault();
        target.callback();
      }
    });
  }

  function addOnClick(id, callback) {
    _eventArray.push({ id, callback });
  }

  return { useState, useEffect, init, render, addOnClick };
})();
