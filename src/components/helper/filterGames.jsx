export const filterGames = (gamesInfo, filterParameter) => {
  return (
    gamesInfo &&
    gamesInfo?.filter((game) => game.Name.includes(filterParameter))
  )
}
export const fiterGamesAccordingToCategories = (gamesInfo, filterParameter) => {
  return (
    gamesInfo &&
    gamesInfo?.filter((game) => game.Categories.includes(filterParameter))
  )
}
