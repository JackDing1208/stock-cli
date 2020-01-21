const URL = "https://api.worldtradingdata.com/api/v1/stock"

const Grid = require("console-grid");
const grid = new Grid();


const printData = (data:any): void => {
	const renderData = {
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
			name: data,
			value: "1"
		}]
	}
	grid.render(renderData);
}

const getData = ()=>{

}


export default printData


