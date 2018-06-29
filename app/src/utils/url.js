import slugify from 'slugify';

export const recipeSlug = (recipeName) => {
  return slugify(recipeName, { lower: true });
};

// Implémentation impérative de l'utilitaire.
export const recipeUrl = (recipeName) => {
  return `/recipe/${recipeSlug(recipeName)}`;
};
