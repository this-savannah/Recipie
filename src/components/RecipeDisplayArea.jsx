import React from "react"
import AddIcon from "../images/add.svg"
import RecipeCard from "./RecipeCard"
import "./recipeDisplayArea.scss"

const RecipeDisplayArea = ({ setShowForm, values }) => {
  const gotToForm = () => {
    window.scrollTo(0, 0)
    setShowForm(true)
  }

  console.log(values.recipies)

  return (
    <>
      {/* Recipe Area */}
      <div className='recipe-wrapper'>
        {/* Display Available Recipies */}
        {/* Add a New Recipe */}
        <div onClick={gotToForm} className='add-new-recipe-card'>
          <img className='add-icon' src={AddIcon} alt='add recipe icon' />
        </div>
        <div className='horizontal-scrolling-container'>
          {values.recipies.map((recipe) => {
            return (
              <React.Fragment key={recipe.id}>
                <RecipeCard values={values} recipe={recipe} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RecipeDisplayArea
