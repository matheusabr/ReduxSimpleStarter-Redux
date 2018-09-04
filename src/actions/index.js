export function selectBook(book) {
  // selectBook is an ActionCreator then it needs
  // to return an action and an object with type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
