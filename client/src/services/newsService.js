import axios from 'axios';
import { config } from "../config/config"

export class newsService {
  static url = `${config.apiUrl}/news`;

  static async fetchNews() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async addNews(data) {
    try {
      const response = await axios.post(this.url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async updateNews(data) {
    try {
      await axios.put(this.url, data);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async deleteNews(id) {
    try {
      await axios.delete(this.url, { data: { id } });
      return id;
    } catch (error) {
      return error;
    }
  }
}

export default newsService;