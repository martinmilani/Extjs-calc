Ext.define("calc.view.history.HistoryViewStore", {
  extend: "Ext.data.Store",
  alias: "store.historyviewstore",
  storeId: "historyviewstore",
  fields: ["numero1", "numero2", "operador", "resultado"],
  data: {
    items: [],
  },
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
