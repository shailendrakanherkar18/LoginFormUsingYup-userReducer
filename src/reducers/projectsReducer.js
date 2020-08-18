import {PROJECT_REDUCER} from '../shared/actionContants';

const initialState = {
  projects: []
}

const projectsReducer = (state = initialState, action ) => {
  switch(action.type) {
    case PROJECT_REDUCER.SET_PROJECTS:
      return {...state, projects: action.value}
    default:
      return state
  }
}

export default projectsReducer;