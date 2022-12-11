// ref: https://github.com/nesterow/riot-state

import { createStore } from "riot-state";

const name = "app-store";

const state = {
  user: null,
};

const actions = {
  setUser(user = null) {
    this.user = user;
  },
};

export default createStore({
  name,
  state,
  actions,
});
