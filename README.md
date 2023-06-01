## single-bar-chart v1.0.0

This project can help you in making single bar chart.

### Installing

```bash
npm install Zhiro990/single-bar-chart
```

### Importing

```js
const Chart = require("single-bar-chart");
```

### Usage

```js
let chart = new Chart();
```

#### chart.setTitle(title)

| Parameter | Description | Type | Example |
| :-: | :-: | :-: | :-: |
| `title` | The chart title. | `string` | `"Most Used Languages"` |

#### chart.setBackground(path_or_buffer)

| Parameter | Description | Type | Example |
| :-: | :-: | :-: | :-: |
| `path_or_buffer` | The image path or buffer. | `string` or `buffer` | `"./background.jpeg"` |

#### chart.setTheme(backgroundcolor, bordercolor, titlecolor)

| Parameter | Description | Type | Example |
| :-: | :-: | :-: | :-: |
| `backgroundcolor` | The hex color of the background. (Note: Will not be displayed if you use `setBackground()`.) | `string` | `"#000000"` |
| `bordercolor` | The hex color of the border. | `string` | `"#FF0000"` |
| `titlecolor` | The hex color of the title. | `string` | `"#FFFFFF"` |

#### chart.addData(name, percentage, hexcolor)

| Parameter | Description | Type | Example |
| :-: | :-: | :-: | :-: |
| `name` | The data name. (Note: The maximum number of characters is 22.) | `string` | `"JavaScript"` |
| `percentage` | The data percentage. (Note: Can't be more than 100.) | `number` | `75` |
| `hexcolor` | The data hex color. (Note: This color will be displayed on the bar chart.) | `string` | `"#00FF00"` |

> Note: The maximum amount of data for now is only 6.

### Convert The Chart To A Image Buffer
```js
let image = await Chart.createChart(chart);
```

### Example

```js
const Chart = require("single-bar-chart");
const fs = require("fs/promises");

(async () => {
	
	let chart = new Chart()
		.setTitle("Chart")
		.setBackground("./makima.jpeg")
		.setTheme("#FFFFFF", "#7788FF", "#7788FF")
		.addData("A", 75, "#5555FF")
		.addData("B", 25, "#FF5555");
	
	let res = await Chart.createChart(chart);
	await writeFile("example.png", res);

})();
```

![makima.jpeg](./makima.jpeg)
![example.png](./example.png)

---

> *Note: This project is currently under development.*