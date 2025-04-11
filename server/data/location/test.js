

let datas= require("./cities.json")


datas = datas.map(({ id, upazilla_id, name, bn_name, }) => ({ id, upazilla_id, name, bn_name, }))


const fs = require("fs");
fs.writeFileSync("./cities.json" , JSON.stringify(datas))

