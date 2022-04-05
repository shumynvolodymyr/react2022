const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

export const getUsers =  () => {
  return fetch(usersUrl).then(value => value.json());
}

export const getPosts =  () => {
  return fetch(postsUrl).then(value => value.json());
}

export const getComments =  () => {
  return fetch(commentsUrl).then(value => value.json());
}
