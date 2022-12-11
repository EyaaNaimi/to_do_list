import http from "./http-common";

class UserService {

signin(data){
    return http.post("/auth/signin",data);
  } 

  create(data) {
    return http.post("/auth/signup", data);
    
  }
  signout() {
    return http.post("/auth/signout");
  }
}

export default new UserService();