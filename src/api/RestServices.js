import apiClient from "./axios";


const getData = async () => {
  try {
    const response = await apiClient.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const postData = async (data) => {
  try {
    const response = await apiClient.post('/projects', data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export { getData, postData };