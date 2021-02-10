import fetch from 'isomorphic-fetch'
import { url } from '../util'

export const getInitMovies = async (numPage) => {
  const res = await fetch(`${url.page}=${numPage}&${url.key}`)
  const movies = await res.json()
  return movies
}

export const getDetailMovies = async (id) => {
  const res = await fetch(`${url.detail}${id}?${url.key}`)
  const movies = await res.json()
  return movies
}

export const searchMovies = async (word) => {
  const res = await fetch(`${url.serarch}${word}&${url.key}`)
  const movies = await res.json()
  return movies
}
