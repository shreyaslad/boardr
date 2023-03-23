import { SSTConfig } from "sst";
import { API } from "./stacks/FeedStack";

export default {
  config(_input) {
    return {
      name: "boardr",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
