import axios from 'axios';

import { config } from "../config/config"

export class categoriesService {
  static url = `${config.apiUrl}/categories`;

  static async fetchCategories() {
    try {
      const response = await axios.get(this.url);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }

  static async addCategory(data) {
    try {
      const response = await axios.post(this.url, data);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }

  static async updateCategory(data) {
    try {
      await axios.put(this.url, data);
      return data;
    } catch (error) {
      return error;
    }
  }

  static async deleteCategory(id) {
    try {
      await axios.delete(this.url, { data: { id } });
      return id;
    } catch (error) {
      return error;
    }
  }
}

export default categoriesService;