let { mediafiredl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] IngresΓ© un enlace vΓ‘lido de MediaFire πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/Black-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
m.reply(global.wait)
conn.sendMessage(m.chat, { document: { url: url }, mimetype: ext, fileName: filename}, {quoted: m})   
} catch (e) {
m.reply('*[βππππβ] Error,  Vuelva a intentarlo mΓ‘s tarde*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β https://www.mediafire.com/file/pbabuzyc7i8ord5/Black-Bot-MD-master_%25285%2529.zip/file*')
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
module.exports = handler
