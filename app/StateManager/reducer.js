const initialState = {
  infoPage: {
    name: "",
  },
  others: {},
};

export default function StateManager(state = initialState, action) {
  switch (action.type) {
    case "ADD_INFO":
      return {
        ...state,
        infoPage: {
          ...state.infoPage, // Correctly reference the current state
          name: action.payload, // Assuming action.payload holds the name value
        },
      };
    case "REMOVE_INFO":
      return {
        ...state,
        infoPage: {
          ...state.infoPage,
          name: "", // Reset the name to an empty string
        },
      };
    default:
      return state;
  }
}
