import { types, flow, getSnapshot } from "mobx-state-tree";
import api from "../services/api";

const User = types.model({
  id: types.number,
  is_worker: types.boolean,
  is_owner: types.boolean,
  farms: types.array(types.number),
  can_create_worker: types.boolean,
  can_create_tags: types.boolean,
  name: types.string,
  surname: types.string,
  email: types.maybe(types.string),
});

export const UserStore = types
  .model({
    initialized: false,
    user: User,
  })

  .actions((self) => {
    const fetchUser = flow(function* () {
      try {
        const { user } = yield api.user();

        self.user = user;

        self.initialized = true;
      } catch (e) {
        self.loading = false;
        console.log("login -> e", e);
      }
    });

    return {
      fetchUser,
    };
  });

export default UserStore.create();
