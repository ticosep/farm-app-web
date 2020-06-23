import { autorun } from "mobx";
import { flow, types } from "mobx-state-tree";

import api from "../services/api";

const STORAGE_KEY_TOKEN = "token";

const Farm = types.model({
  id: types.maybe(types.number),
  is_paid: types.maybe(types.number),
  name: types.maybe(types.string),
  production: types.maybe(types.string),
  map_features: types.maybe(types.string),
});

const User = types.model({
  id: types.maybe(types.number),
  is_worker: types.maybe(types.boolean),
  is_owner: types.maybe(types.boolean),
  farms: types.maybe(types.array(types.number)),
  can_create_worker: types.maybe(types.boolean),
  can_create_tags: types.maybe(types.boolean),
  name: types.maybe(types.string),
  surname: types.maybe(types.string),
  email: types.maybe(types.string),
  current_farm: types.maybe(types.number),
  validated: types.maybe(types.number),
});

export const UserStore = types
  .model({
    initialized: false,
    token: types.maybe(types.string),
    user: types.optional(User, {}),
    farms: types.array(Farm),
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
        const userinfo = yield api.user();

        self.user = userinfo.data.user;

        const farms = yield api.farms();

        self.farms = farms.data.farms;

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

    const setCurrentFarm = (farm) => {
      self.user.current_farm = farm;
    };

    return {
      login,
      logout,
      register,
      codeLogin,
      setCurrentFarm,
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
