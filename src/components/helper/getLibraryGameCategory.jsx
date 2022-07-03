export const getItemLibraryCategory = (library) => {
  const categories = [...library.map((game) => game.Categories)]
  console.log(categories.flat(1))
  return categories.flat(1)
}
