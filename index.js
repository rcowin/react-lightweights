
export const createConditionals = conditionals =>
  Object.keys(conditionals).reduce((a, key) => ({
    ...a,
    [key]: ({ children }) => (conditionals[key] && children),
    not: {
      ...a.not,
      [key]: ({ children }) => (!conditionals[key] && children)
    }
  }), { not: {} });