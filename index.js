module.exports = class SingleBarChart {

	constructor() {
		this.title = "";
		this.datas = [];
		return this;
	};

	setTitle(title) {
		this.title = title;
		return this;
	};

	addData(name, percentage, hexcolor) {
		if (this.datas.length == 6)
			throw new Error("The amount of data cannot be more than 6.");
		if (name.length > 22)
			throw new Error("The number of characters in the data name cannot be more than 22.");
		if (eval(this.datas.map(data => data.percentage).join(" + ") + " + " + percentage) > 100)
			throw new Error("The total percentage exceeds 100%.");
		this.datas.push({
			name,
			percentage,
			hexcolor
		});
		return this;
	};

	createChart() {
		
		const { createCanvas } = require("@napi-rs/canvas"); 
		
		let canvas = createCanvas(2048, 1600);
		let ctx = canvas.getContext("2d");

		ctx.font = "130px DejaVu Sans Mono"; //Font for the title
		ctx.fillStyle = "#1A172E"; //Background color
		ctx.fillRect(0, 0, 2048, 1600); //Background
		ctx.textAlign = "center"; //The align of the title
		ctx.fillStyle = "#3E5EED"; //The color of the title
		ctx.fillText(this.title, 2048 / 2, 245, 1748); //Write the title
		ctx.lineWidth = 15; //Line width
		ctx.strokeStyle = "#3E5EED"; //Line color
		ctx.strokeRect(150, 395, 1748, 275); //Square in the middle
		ctx.strokeRect(7.5, 7.5, 2033, 1585); //Border
		ctx.font = "100px DejaVu Sans Mono"; //The font of the information
		ctx.textAlign = "left"; //The align of the information

		let total_percentage = 0;
		
		this.datas.forEach((data, index) => { //Write the information
			ctx.fillStyle = data.hexcolor; //The color of the text
			ctx.fillRect(157.5 + (1733 * (total_percentage / 100)), 402.5, 1733 * (data.percentage / 100), 260); //Fill the chart
			total_percentage += data.percentage;
			ctx.fillText("• " + data.name + " (" + data.percentage + "%)" , 150, 790 + (index + 1) * 110, 1748); //Write the text
		});
		
		let res = canvas.toBuffer("image/png");
		
		return res;
		
	};

};