import { get_user_page_data } from "../repositories/users-page-repository.js";

export async function get_user_page(req, res) {
  try {
    const { id } = req.params;
    const user_page_data = await get_user_page_data(id, req, res);

    res.send(user_page_data);
  } catch (error) {
    console.log(error);
  }
}
