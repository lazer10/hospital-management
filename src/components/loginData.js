import axios from 'axios';

const postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    // Handle errors here if needed
    console.error('Error:', error);
    throw error;
  }
};

export default postRequest;
