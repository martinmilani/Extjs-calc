Ext.define("calc.view.history.HistoryView", {
  extend: "Ext.grid.Panel",
  xtype: "historyview",
  cls: "historyview",
  controller: "historyviewcontroller",
  viewModel: { type: "historyviewmodel" },
  store: { type: "historyviewstore" },
  requires: ["calc.view.history.HistoryViewController"],

  dockedItems: [
    {
      xtype: "toolbar",
      dock: "top",
      defaults: {
        margins: "0 5 0 5",
      },
      items: [
        {
          xtype: "button",
          text: "Borrar Historial",
          textAlign: "center",
          listeners: {
            click: "borrarHistorial",
          },
        },
      ],
    },
  ],

  columns: [
    {
      text: "Historial de Operaciones",
      dataIndex: "operacion",
      cell: { userCls: "bold" },
      flex: 1,
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
