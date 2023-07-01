export const themeReducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };