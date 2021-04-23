Ext.define("calc.view.form.FormViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.formviewcontroller",
  requires: ["calc.view.history.HistoryViewStore"],
  store: { type: "historyviewstore" },

  borrar: function () {
    this.getView().getForm().reset();
  },

  calcular: function () {
    let primeroStr = this.getView().getForm().getValues().primero;
    let segundoStr = this.getView().getForm().getValues().segundo;
    let primero = parseInt(primeroStr);
    let segundo = parseInt(segundoStr);

    let operators = {
      "+": function (a, b) {
        return a + b;
      },
      "-": function (a, b) {
        return a - b;
      },
      "*": function (a, b) {
        return a * b;
      },
      "/": function (a, b) {
        if (b == 0) {
          return "error";
        } else {
          return a / b;
        }
      },
    };
    let operador = this.getView().getForm().getValues().name;
    let result = operators[operador](primero, segundo);
    this.getViewModel().set("result", result);
    console.log(result);

    //Guarda el resultado en Store
    var store = Ext.getStore("historyviewstore");
    store.add({
      operacion:
        primeroStr + " " + operador + " " + segundoStr + " = " + result,
    });
    store.sync();
  },
});
