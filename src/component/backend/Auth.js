const API = "http://localhost:8080/api/auth";
// axiox
// fetch()
export const createUser = data => {
  return fetch(`${API}/user`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "applciation/json",
    },
    body: JSON.stringify(data),
  })
    .then(resp => {
      return resp.json();
    })
    .catch(err => {
      console.log(err);
    });
};
export const userLogin = data => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(resp => {
      return resp.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(data));
  }
  next();
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
