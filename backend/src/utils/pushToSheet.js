import axios from "axios";
import qs from "qs"; // npm install qs

const pushToSheet = async (payload) => {
  // Convert JSON to URL-encoded form
  const data = qs.stringify(payload);

  await axios.post(process.env.GOOGLE_SCRIPT_URL, data, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
};

export default pushToSheet;
