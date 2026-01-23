import axios from "axios";
import api from "./apiClient";

const API_URL = "http://localhost:8000/api/user-managements";

export const createUser = async (userData) => {
  try {
    const response = await api.post(API_URL, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getUsers = async (params = {}) => {
  try {
    const response = await api.get(API_URL, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const changeUserPassword = async (id, passwordData) => {
  try {
    const response = await api.patch(`${API_URL}/${id}/password`, passwordData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};