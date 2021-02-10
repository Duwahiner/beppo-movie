import { consts } from '../const'

const getMovies = (movies) => {
  return {
    type: consts.GET_INIT_MOVIES,
    payload: movies
  }
}

const incrementConuter = (counter) => {
  return {
    type: consts.INCREMENT_COUNTER,
    payload: counter
  }
}

const decrementConuter = (counter) => {
  return {
    type: consts.DECREMENT_CONUTER,
    payload: counter
  }
}

const loginUser = (userName) => {
  return {
    type: consts.LOGIN_USER,
    payload: userName
  }
}

const input = (value) => {
  return {
    type: consts.GET_INPUT,
    payload: value
  }
}

const getId = (value) => {
  return {
    type: consts.GET_ID,
    payload: value
  }
}

const getDetail = (data) => {
  return {
    type: consts.GET_DETAIL,
    payload: data
  }
}

const searchMovies = (data) => {
  return {
    type: consts.SEARCH_MOVIES,
    payload: data
  }
}

export const actions = {
  getMovies,
  incrementConuter,
  decrementConuter,
  input,
  loginUser,
  getId,
  getDetail,
  searchMovies
}
