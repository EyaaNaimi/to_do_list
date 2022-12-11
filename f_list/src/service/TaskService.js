import http from "./http-common";

class TaskService {
  getAll() {
   var c= http.get("/tasks/")
    console.log(c)
    return http.get("/tasks/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/tasks/", data);
  }

  update(id, data) {
    return http.put(`/tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tasks/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TaskService();