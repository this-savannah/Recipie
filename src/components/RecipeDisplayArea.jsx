import React from "react"
import AddIcon from "../images/add.svg"
import RecipeCard from "./RecipeCard"
import "./recipeDisplayArea.scss"

const RecipeDisplayArea = ({
  values,
  values: { setShowForm, recipies, isFavRecipe, favorites },
}) => {
  const gotToForm = () => {
    window.scrollTo(0, 0)
    setShowForm(true)
  }

  return (
    <>
      {/* Show Recipies Area  */}
      <div className='horizontal-scrolling-container-and-wrapper'>
        {/* Add a New Recipe */}
        {!isFavRecipe && (
          <div onClick={gotToForm} className='add-new-recipe-card'>
            <img className='add-icon' src={AddIcon} alt='add recipe icon' />
          </div>
        )}
        {/* Recipies Page - Recipies */}
        {!isFavRecipe &&
          recipies.map((recipe) => {
            return (
              <React.Fragment key={recipe.id}>
                <RecipeCard values={values} recipe={recipe} />
              </React.Fragment>
            )
          })}
        {/* Favorites Page - Favorite Recipies */}
        {isFavRecipe &&
          favorites.map((recipe) => {
            return (
              <React.Fragment key={recipe.id}>
                <RecipeCard values={values} recipe={recipe} />
              </React.Fragment>
            )
          })}
      </div>
    </>
  )
}

export default RecipeDisplayArea
