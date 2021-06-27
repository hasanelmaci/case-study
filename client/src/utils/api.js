import axios from 'axios'

export const getTasks = async () => {
    try {
      const response = await axios("/api/read-tasks");
      return response.data;
    } catch (error) {
      throw new Error(error.message)
    }
  };

export const addTask = async (formData) => {
  try{
    const response = await axios.post("/api/add-task",formData);
    return response.data
  }catch(error){
    throw new Error(error.message)
  }
}