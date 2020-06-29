import { flow, types } from "mobx-state-tree";

import api from "../../../services/api";

const Tag = types.model({
  id: types.maybe(types.number),
  tag_group_id: types.maybe(types.number),
  name: types.maybe(types.string),
  color: types.maybe(types.string),
  tag_desc: types.maybeNull(types.string),
  custom_data: types.maybeNull(types.string),
});

const TagGroup = types.model({
  id: types.number,
  name: types.string,
  tags: types.array(Tag),
});

export const UserStore = types
  .model({
    initialized: types.map(types.number),
    tagGroups: types.map(TagGroup),
    loading: false,
  })

  .actions((self) => {
    // Make the login with the API, pass the token that come from google, and set the token generated in th API
    const fetchTags = flow(function* (farm_id) {
      self.loading = true;

      if (!self.initialized.get(`${farm_id}`)) {
        try {
          const { data } = yield api.getTags({ farm_id }).catch((error) => {
            const { data } = error.response;

            console.log(data);
          });

          console.log(data);
        } catch (e) {
          console.error(e);
        }

        self.initialized.set(`${farm_id}`, farm_id);
      }

      self.loading = false;
    });

    return {
      fetchTags,
    };
  });

export default UserStore.create();
