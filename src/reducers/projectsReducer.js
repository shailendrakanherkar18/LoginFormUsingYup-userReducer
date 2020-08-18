import {PROJECTS_REDUCER} from '../shared/actionConstants';

const initialState = {
  projects: []
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REDUCER.SET_PROJECT_LIST:
      return {...state, projects: action.value };
    default:
      return state;
  }
}

export default projectsReducer;