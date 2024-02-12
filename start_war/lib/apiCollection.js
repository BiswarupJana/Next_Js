import axios from "axios";

const baseApi = "https://swapi.dev/api";

export async function getPeoples() {
  try {
    const response = await axios.get(`${baseApi}/people`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}
export async function getPeople(slug) {
  try {
    const response = await axios.get(`${baseApi}/people/${slug}`);
    
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}

export async function getPrevious({url}) {
  try {
    const response = await axios.get(`${url}`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}
export async function getNext({url}) {
  try {
    const response = await axios.get(`${url}`);
    
    
    if (response.status === 200) {
      console.log(response.data)
      return response.data;
    } else {
      throw new Error("Failed to fetch people data");
    }
  } catch (error) {
    console.error("Error fetching people data:", error);
    throw error; 
  }
}