import axios from "axios";

const url = "https://react-blog-backend-roan.vercel.app/api/blog";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
};
export default fetchData;
