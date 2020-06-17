import { autorun } from "mobx";
import { flow, types } from "mobx-state-tree";

import api from "../services/api";

const STORAGE_KEY_TOKEN = "token";

const User = types.model({
  id: types.maybe(types.number),
  is_worker: types.maybe(types.boolean),
  is_owner: types.maybe(types.boolean),
  farms: types.maybe(types.array(types.number)),
  can_create_worker: types.maybe(types.boolean),
  can_create_tags: types.maybe(types.boolean),
  name: types.maybe(types.string),
  surname: types.maybe(types.string),
  email: types.maybe(types.maybe(types.string)),
  current_farm: types.maybe(types.maybe(types.number)),
});

export const UserStore = types
  .model({
    initialized: false,
    token: types.maybe(types.string),
    user: types.optional(User, {}),
    loading: false,
  })
  .views((self) => ({
    get isAuthorized() {
      return !!self.token;
    },
  }))
  .actions((self) => {
    const fetchUser = flow(function* () {
      try {
        const response = yield api.user();

        console.log(response);

        self.user = response.data.user;

        console.log(self.user);

        self.initialized = true;
      } catch (e) {
        self.initialized = false;
        console.log("login -> e", e);
      }
    });

    return {
      fetchUser,
    };
  })

  .actions((self) => {
    const initialize = (token) => {
      self.token = token;
      // Set the token globaly to future usage in all cases
      api.setToken(token);

      if (token) {
        self.fetchUser();
      }
    };

    return {
      initialize,
    };
  })

  .actions((self) => {
    // Make the login with the API, pass the token that come from google, and set the token generated in th API
    const login = flow(function* (email, password) {
      self.loading = true;

      try {
        const { data } = yield api.login({ email, password }).catch((error) => {
          const { data } = error.response;

          alert(data);
        });
        self.initialize(data.token);
      } catch (e) {
        console.error(e);
      }

      self.loading = false;
    });

    const codeLogin = flow(function* (code) {
      self.loading = true;

      try {
        const { data } = yield api.codeLogin({ code }).catch((error) => {
          const { data } = error.response;

          alert(data);
        });
        self.initialize(data.token);
      } catch (e) {
        console.error(e);
      }

      self.loading = false;
    });

    const register = flow(function* ({ name, surname, cpf, email, password }) {
      try {
        const response = yield api
          .register({ name, surname, cpf, email, password })
          .catch((error) => {
            alert(error);
            console.log(response);
          });
      } catch (e) {
        console.log(e);
      }
    });

    const logout = () => {
      self.token = undefined;
    };

    return {
      login,
      logout,
      register,
      codeLogin,
    };
  })
  .actions((self) => ({
    afterCreate: () => {
      const token = localStorage.getItem(STORAGE_KEY_TOKEN);

      // Case the token is allready in localsotrage initialize with it
      self.initialize(token || undefined);

      autorun(() => {
        if (self.token) {
          localStorage.setItem(STORAGE_KEY_TOKEN, self.token);
        } else {
          localStorage.removeItem(STORAGE_KEY_TOKEN);
        }
      });
    },
  }));

export default UserStore.create();
