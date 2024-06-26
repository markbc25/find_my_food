import React, { FC } from 'react';
import { View } from 'react-native';


let instance;

class SessionStorage {
  currentLiked = new Map();

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  // Function to set value in session storage
  insertCurrentLiked(key, value) {
    this.currentLiked.set(key, value);
    console.debug("inserted to currentLiked, size: ", this.currentLiked.size);
  }

  removeCurrentLiked(key) {
    this.currentLiked.delete(key);
    console.debug("removed from currentLiked, size: ", this.currentLiked.size);
  }

  getCurrentLiked(key) {
    return this.currentLiked.get(key);
  }
}

// Create a singleton instance and export it
let sessionStorageInstance = Object.freeze(new SessionStorage());
export default sessionStorageInstance;