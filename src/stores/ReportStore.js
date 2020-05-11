import { types, flow, getSnapshot } from "mobx-state-tree";
import { database } from "../firebase/firebase";

const Coord = types.model({
  accuracy: types.maybe(types.number),
  altitude: types.maybe(types.number),
  heading: types.maybe(types.number),
  latitude: types.maybe(types.number),
  longitude: types.maybe(types.number),
  speed: types.maybe(types.number),
});

const Report = types.model({
  coords: types.optional(Coord, {}),
  fixed: types.maybe(types.boolean),
  mocked: types.maybe(types.boolean),
  timestamp: types.maybe(types.number),
  visited: types.maybe(types.boolean),
  plague: types.maybe(types.string),
});

export const ReportStore = types
  .model({
    initialized: false,
    loading: false,
    reports: types.array(Report),
  })

  .actions((self) => {
    const getReports = () => {
      if (!self.initialized) return [];
      return getSnapshot(self.reports);
    };
    const fecthReports = flow(function* () {
      self.loading = true;

      try {
        const data = yield database.ref("reports").once("value");
        const dataValues = data.val();

        if (dataValues !== null) {
          const values = Object.values(dataValues);

          self.reports = values;
        }

        self.loading = false;
        self.initialized = true;
      } catch (e) {
        self.loading = false;
        console.log("login -> e", e);
      }
    });

    return {
      fecthReports,
      getReports,
    };
  })
  .actions((self) => ({
    afterCreate: () => {
      self.fecthReports();
    },
  }));

export default ReportStore.create();
