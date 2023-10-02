export const deduplicateBooks = (books) => {
  const seen = new Set();
  return books.filter((book) => {
    const isDuplicate = seen.has(book.id);
    seen.add(book.id);
    return !isDuplicate;
  });
};
