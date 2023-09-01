import {Network, Urls} from '../../../config';

export const getTodos = async () => {
  const response = await Network.get(Urls.Todos);
  if (!response.ok) {
    return [];
  }
  return response.data;
};

export const getPosts = async () => {
  const response = await Network.get(Urls.Posts);
  if (!response.ok) {
    return [];
  }
  return response.data;
};

export const getGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 4 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 16) {
    return 'Good afternoon';
  } else {
    return 'Good night';
  }
};
