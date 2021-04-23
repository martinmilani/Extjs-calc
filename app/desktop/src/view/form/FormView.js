Ext.define("calc.view.form.FormView", {
  extend: "Ext.form.Panel",
  xtype: "formview",
  requires: [
    "calc.view.form.FormViewController",
    "calc.view.form.TestViewModel",
    "Ext.form.field.ComboBox",
    "Ext.form.field.Display",
  ],

  controller: "formviewcontroller",
  bodyPadding: 10,

  viewModel: {
    type: "formviewmodel",
  },

  // Campos Formulario
  xtype: "fieldset",
  items: [
    {
      width: "500px",
      hideTrigger: true,
      xtype: "numberfield",
      fieldLabel: "Primer Número",
      name: "primero",
      allowBlank: false,
    },
    {
      width: "500px",
      hideTrigger: true,
      xtype: "numberfield",
      fieldLabel: "Segundo Número",
      name: "segundo",
      allowBlank: false,
    },
    {
      width: "500px",
      xtype: "combobox",
      fieldLabel: "Selecciones una operación",
      displayField: "name",
      valueField: "abbr",
      name: "name",
      allowBlank: false,
      store: [
        {
          abbr: "+",
          name: "Suma",
        },
        {
          abbr: "-",
          name: "Resta",
        },
        {
          abbr: "*",
          name: "Multiplicación",
        },
        {
          abbr: "/",
          name: "División",
        },
        {
          xtype: "button",
        },
      ],
    },
    {
      style: {
        padding: "2em",
        maxWidth: "500px",
        marginLeft: "120px",
      },

      // Borrar y Calcular
      items: [
        {
          xtype: "button",
          text: "Borrar",
          listeners: {
            click: "borrar",
          },
        },
        {
          xtype: "button",
          text: "Calcular",
          formBind: true, //only enabled once the form is valid
          disabled: true,
          listeners: {
            click: "calcular",
          },
        },
      ],
    },

    //Resultado
    {
      xtype: "displayfield",
      fieldLabel: "Resultado: ",
      bind: "{result}",
      fieldStyle:
        "font-size:20px;font-weight:bold;width:60;padding:10px 0px 0px 10px;",
      style: "font-size:14px;padding:10px 0px 0 15px",
    },
  ],
});
