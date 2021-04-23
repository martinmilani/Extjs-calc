Ext.define("calc.view.history.HistoryViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.historyviewcontroller",

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },

  borrarHistorial: function () {
    let store = Ext.getStore("historyviewstore");
    store.removeAll();
  },
});
