const axios = require("axios")

module.exports = async (options = {}) => {
if(!options) return new TypeError("Lütfen Bir Ülke Yazınız.")
    /*
* ().getCountry()
*/
if(options.country === "Armenia" && options.country === "ARM") throw new TypeError("Bu Konumda İnsanlar Aptal.")
let apidata = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=${options.country}&days=${options.days}`)
let jsondata = apidata.data;
return jsondata;
	}