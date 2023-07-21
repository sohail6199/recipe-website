// ----------------   recipe site  -------------------------------------------



//  function to create new ingredients  fields on clicking

  document.getElementById('addIngredientBtn').addEventListener('click', () => {
    const ingredientsDiv = document.getElementById('ingredients');
    const newIngredientField = document.createElement('input');
    newIngredientField.type = 'text';
    newIngredientField.classList.add('ingredient-field');
    newIngredientField.required = true;
    newIngredientField.placeholder = `Ingredient ${ingredientsDiv.childElementCount + 1}`;
    ingredientsDiv.appendChild(newIngredientField);
  });


//   function to create new  instructions fields on clicking

  
  document.getElementById('addInstructionBtn').addEventListener('click', () => {
    const instructionsDiv = document.getElementById('instructions');
    const newInstructionField = document.createElement('textarea');
    newInstructionField.classList.add('instruction-field');
    newInstructionField.required = true;
    newInstructionField.placeholder = `Instruction ${instructionsDiv.childElementCount + 1}`;
    instructionsDiv.appendChild(newInstructionField);
  });


// function so that no fields are left empty and it does not submit if fields are empty

  
  document.getElementById('recipeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const recipeName = document.getElementById('recipeName').value;
    const description = document.getElementById('description').value;
    const ingredients = Array.from(document.querySelectorAll('.ingredient-field')).map(input => input.value);
    const instructions = Array.from(document.querySelectorAll('.instruction-field')).map(input => input.value);

  });
  