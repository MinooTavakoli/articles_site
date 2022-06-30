export const getHelps = (data = {}) => ({
  type: "GET_HELPS",
  value: data,
});

export const postsData = (data = {}) => ({
  type: "GET_POSTS_DATA",
  value: data,
});

export const addData = (data = {}) => ({
  type: "ADD_POSTS_DATA",
  value: data,
});

