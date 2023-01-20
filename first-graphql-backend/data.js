const author = {
  id: "1",
  name: "Albert",
  surname: "Camus",
  age: 50,
  books: [
    { id: "1", title: "Test Title", score: "9", isPublished: false },
    { id: "2", title: "Test 2", score: "8", isPublished: true },
  ],
};

const book = {
  id: "xsc123545",
  title: "Yabanci",
  author,
  score: 6.9,
  isPublished: true,
};

module.exports = { author, book };
