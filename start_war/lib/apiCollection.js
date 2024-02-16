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

export async function getMovies() {
  try {
    const response = await axios.get(`${baseApi}/films`);
    
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
export async function getMovie(slug) {
  try {
    const response = await axios.get(`${baseApi}/films/${slug}`);
    
    
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
export async function getStarships() {
  try {
    const response = await axios.get(`${baseApi}/starships`);
    
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
export async function getStarship(slug) {
  try {
    const response = await axios.get(`${baseApi}/starships/${slug}`);
    
    
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
export async function getPlanets() {
  try {
    const response = await axios.get(`${baseApi}/planets`);
    
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
export async function getPlanet(slug) {
  try {
    const response = await axios.get(`${baseApi}/planets/${slug}`);
    
    
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
export async function getSearch({name,value}) {
  // console.log(name,value);
  try {
    const response = await axios.get(`${baseApi}/${name}/?search=${value}`);
    
    
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
