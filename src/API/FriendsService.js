import axios from 'axios';

export default class FriendsService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/` + id,
    );
    return response;
  }

  static async getPictureByFriendId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/` + id,
    );
    return response;
  }
}
