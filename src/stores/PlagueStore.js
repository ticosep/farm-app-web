import { types, flow, getSnapshot } from "mobx-state-tree";
import { database } from "../firebase/firebase";

const Plague = types.model({
  id: types.maybe(types.string),
  name: types.maybe(types.string),
  characteristics: types.maybe(types.string),
  color: types.maybe(types.string),
});

export const PlagueStore = types
  .model({
    initialized: false,
    loading: false,
    plagues: types.map(Plague),
  })

  .actions((self) => {
    const getPlague = (id) => {
      const plague = self.plagues.get(`${id}`);

      if (!plague) {
        return {
          name: "",
          characteristics: "",
          color: "",
        };
      }

      return getSnapshot(plague);
    };
    const fecthPlagues = flow(function* () {
      self.loading = true;

      try {
        const data = yield database.ref("plagues").once("value");
        const dataValues = data.val();

        if (dataValues !== null) {
          const values = Object.values(dataValues);

          for (const plague of values) {
            self.plagues.set(plague.id, plague);
          }
        }

        self.loading = false;
        self.initialized = true;
      } catch (e) {
        self.loading = false;
        console.log("login -> e", e);
      }
    });

    const sendPlagueReport = flow(function* (report) {
      try {
        yield database.ref("reports").push(report);
      } catch (e) {
        self.loading = false;
        console.log("login -> e", e);
      }
    });

    return {
      fecthPlagues,
      sendPlagueReport,
      getPlague,
    };
  })
  .actions((self) => ({
    afterCreate: () => {
      self.fecthPlagues();
    },
  }));

export default PlagueStore.create();
