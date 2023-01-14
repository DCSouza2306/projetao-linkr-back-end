import { find_user_by_name_data } from "../../repositories/users/users-find-by-name-repositories.js";

export async function find_user_by_name(req, res) {
  try {
    const { name } = req.query;
    const find_user_by_name = await find_user_by_name_data(name, req, res);
    res.send(find_user_by_name);
  } catch (error) {
    console.log(error);
  }
}
