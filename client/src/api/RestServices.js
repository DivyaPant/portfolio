import apiClient from "./axios";


const getProjects = async () => {
  try {
    const response = await apiClient.get("/projects");
   return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const postProjects = async (data) => {
  try {
    const response = await apiClient.post('/projects', data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

const updateProjects = async (id, data) => {
  try {
    const response = await apiClient.patch(`/projects/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

const deleteProjects = async (id) => {
  try {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export { getProjects, postProjects, updateProjects, deleteProjects };