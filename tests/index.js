const weather = require("../main")

module.exports = async () => {

let da = await weather({
	country: "Turkey",
	days: 3
})
console.log(da)
}
