import { types, flow, getSnapshot } from "mobx-state-tree";
import api from "../services/api";
import { autorun } from "mobx";

const STORAGE_KEY_TOKEN = "token";

export const AuthStore = types
  .model({
    initialized: false,
    token: types.maybe(types.string),
    loading: false,
  })
  .views((self) => ({
    get isAuthorized() {
      return !!self.token;
    },
  }))

  .actions((self) => {
    // Make the login with the API, pass the token that come from google, and set the token generated in th API
    const login = flow(function* (email, password) {
      self.loading = true;

      try {
        const { data } = yield api.login({ email, password }).catch((error) => {
          const { data } = error.response;

          alert(data);
        });

        self.token = data.token;
        api.setToken(self.token);
      } catch (e) {
        console.error(e);
      }

      self.loading = false;
    });

    const logout = () => {
      self.token = undefined;
    };

    const initialize = (token) => {
      self.token = token;
      self.initialized = true;
      // Set the token globaly to future usage in all cases
      api.setToken(token);
    };

    return {
      login,
      logout,
      initialize,
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

export default AuthStore.create();
