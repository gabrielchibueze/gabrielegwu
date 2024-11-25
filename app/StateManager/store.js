import { configureStore } from "@reduxjs/toolkit";
import StateManager from "./reducer"; // Import the reducer

const store = configureStore({
  reducer: {
    stateManager: StateManager, // Provide a key name for the reducer
  },
});

export default store;
