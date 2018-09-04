// State argument is not app state
// it only represents the state
// of this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    }

    return state;
  }
}
