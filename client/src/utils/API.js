/*Imports section, do not touch*/  
import axios from 'axios';

/*This constant controlls the amount of books or results we want to show up*/
const LIMIT = "&maxResults=20";

export const searchGoogleBooks = query => {
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + LIMIT, {
    params: {
      q: query
    }
  });
};

export const findAll = () => {
  return axios.get('/api/books');
};

export const create = bookData => {
  return axios.post('/api/books', bookData);
};

export const remove = bookId => {
  return axios.delete(`/api/books/${bookId}`);
};


export default {
  create,
  findAll,
  remove,
  searchGoogleBooks
};
