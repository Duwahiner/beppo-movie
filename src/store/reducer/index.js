import { consts } from '../../const'

const initialState = {
  idDetail: null,
  input: '',
  movies: [],
  pageCounter: 1,
  user: {
    name: null
  },
  movieDetail: {}
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case consts.GET_INIT_MOVIES:
      return {
        ...state,
        movies: payload
      }

    case consts.INCREMENT_COUNTER:
      return {
        ...state,
        pageCounter: state.pageCounter + payload
      }

    case consts.DECREMENT_CONUTER:
      return {
        ...state,
        pageCounter: state.pageCounter - payload
      }

    case consts.LOGIN_USER:
      return {
        ...state,
        user: { name: payload }
      }

    case consts.GET_INPUT:
      return {
        ...state,
        input: payload
      }

    case consts.GET_ID:
      return {
        ...state,
        idDetail: payload
      }

    case consts.GET_DETAIL:
      return {
        ...state,
        movieDetail: payload
      }

    case consts.SEARCH_MOVIES:
      return {
        ...state,
        movies: payload
      }

    default:
      return state
  }
}
