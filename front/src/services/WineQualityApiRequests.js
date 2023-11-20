// Import axios from specific API definition
import axios from "./api/WineQualityApi";

// POST Method Request for Wine Quality prediction
async function wineQualityPredict(data) {
  try {
    const response = await axios.post(`/predict`,data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export { wineQualityPredict };
