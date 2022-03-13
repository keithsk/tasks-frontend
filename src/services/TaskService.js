import httpAuth from "../http-common-auth";

const getAll = () => {
  return httpAuth.get(process.env.REACT_APP_API_HOST +"/tasks");
};

const get = id => {
  return httpAuth.get(process.env.REACT_APP_API_HOST +"/tasks/"+id);
};

const create = data => {
  return httpAuth.post(process.env.REACT_APP_API_HOST +"/tasks", data);
};

const update = (id, data) => {
  return httpAuth.patch(process.env.REACT_APP_API_HOST +"/tasks/"+id, data);
};

const remove = id => {
  return httpAuth.delete(process.env.REACT_APP_API_HOST +"/tasks/"+id);
};

const removeAll = () => {
  return httpAuth.delete(process.env.REACT_APP_API_HOST +"/tasks");
};

const findByDesc = title => {
  return httpAuth.get(process.env.REACT_APP_API_HOST +"/tasks?desc=${title}");
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByDesc
};
