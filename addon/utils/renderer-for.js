import Ember from 'ember';

const {
  computed,
  getOwner
}= Ember;

export function rendererFor(name) {
  let factory = `renderer:${name}`;

  return computed(function() {
    let owner = getOwner(this);
    let instance = owner.lookup(factory) || owner.lookup(`${factory}/renderer`);

    instance.set('name', name);

    return instance;
  });
}

export default rendererFor;
