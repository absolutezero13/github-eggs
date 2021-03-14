export const bookmarkedReposReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_BOOKMARKED":
      return [...state, action.repo];
    case "DELETE_BOOKMARKED":
      return state.filter((repo: any) => repo.id !== action.id);
    case "GET_BOOKMARKED_REPOS":
      return action.repos;
  }
};
