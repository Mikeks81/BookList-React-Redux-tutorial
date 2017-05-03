// stae argument is not application staee, only the stae this reducer is resonsible for
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
