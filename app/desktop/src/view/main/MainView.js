Ext.define("calc.view.main.MainView", {
  extend: "Ext.tab.Panel",
  xtype: "mainview",

  require: ["calc.view.form.FormView", "calc.view.history.HistoryView"],

  items: [
    {
      title: "Calculos",
      xtype: "formview",
    },
    {
      title: "Historial",
      xtype: "historyview",
    },
  ],
});
