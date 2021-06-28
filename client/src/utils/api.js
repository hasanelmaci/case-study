import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios("/api/read-tasks");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addTask = async (formData) => {
  try {
    const response = await axios.post("/api/add-task", formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`/api/delete-task/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateTask = async (formData) => {
  //It allowes only specific properties because server does accept specific properties
  //formData contains _id, timesamps etc. so it needs to be filtered
  const allowedupdates = ["description", "completed"];
  const picks = {};
  for (const item in formData) {
    if (formData[item] !== "" && allowedupdates.includes(item)) {
      picks[item] = formData[item];
    }
  }

  try {
    const response = await axios.patch(`/api/update-task/${formData._id}`, picks);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
