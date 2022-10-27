import axios from "../../app/api";
import { PostLoginPayload } from "./interfaces";
import { LOGIN_URL } from "../../constants/constants";

export function postUserApi(payload: PostLoginPayload) {
  const params = new URLSearchParams();
  params.append("client_id", payload.client_id);
  params.append("username", payload.username);
  params.append("password", payload.password);
  params.append("grant_type", payload.grant_type);

  return axios.post(LOGIN_URL, params);
}
