const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
zeroyt7: 'https://zeroyt7-api.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'yourkey',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Atsair Ganzz'
global.owner = ['62882019247701']
global.packname = 'AtsairBot MD'
global.author = 'Atsair MD'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
eror: 'Yah eror',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})