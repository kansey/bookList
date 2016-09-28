import {
    CHANGE_AUTHOR,
    CHANGE_TITLE,
    CHANGE_ALLPAGE,
    CHANGE_CURRENTPAGE,
    CHANGE_STATUS,
    ADD_BOOK
} from '../actions/types';

const initialState = {
    add: {},
    lib: []
  }

export default function add(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTHOR:
      return {
          ...state,
          add: {
              ...state.add,
              author: action.author
          }
      };
    case CHANGE_TITLE:
    return {
        ...state,
        add: {
            ...state.add,
            title: action.title
        }
    };
    case CHANGE_ALLPAGE:
      return {
          ...state,
          add: {
              ...state.add,
              allPage: action.allPage
          }
      };
    case CHANGE_CURRENTPAGE:
      return {
          ...state,
          add: {
              ...state.add,
              currentPage: action.currentPage
          }
      };
    case CHANGE_STATUS:
      return {
          ...state,
          add: {
              ...state.add,
              status: action.status
          }
      };
    case ADD_BOOK:
      return {
          add: {},
          lib: [...state.lib, action.book]
      };
    default:
      return state;
  }
}
