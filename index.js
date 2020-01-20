var Grid = require("console-grid");
var grid = new Grid();
var data = {
  option: {
    sortField: "name"
  },
  columns: [{
    id: "name",
    name: "Name",
    type: "string",
    maxWidth: 38
  }, {
    id: "value",
    name: "Value",
    type: "string",
    maxWidth: 7
  }],
  rows: [{
    name: "Row 1",
    value: "1"
  }, {
    name: "Row 2",
    value: "2",
    subs: [{
      name: "Sub Row 1",
      value: "s1"
    }, {
      name: "Sub Row 2",
      value: "s2"
    }]
  }]
};
grid.render(data);