import axios from "axios";

export default axios.create({
  baseURL: "https://keycloak-test.datasport.com",
});
