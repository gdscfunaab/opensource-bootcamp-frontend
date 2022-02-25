export const state = () => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
});

export const getters = {
  getUserObject: (state) => {
    return state.userObject;
  },
  isAuthenticated: (state) => {
    return state.accessToken;
  },
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    if (authUser.uid) {
      // Do this:
      const { uid, email, emailVerified } = authUser;
      state.user = { uid, email, emailVerified };
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.clear();
      state.user = null;
    }
  },
};

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser }) => {
    if (!authUser.uid) {
      ctx.commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser: {} });
    } else {
      ctx.commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser });
    }
  },
};
