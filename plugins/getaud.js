process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let fetch = require('node-fetch')
let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, args }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Loco Tienes que ingresar el comando más el enlace / link de un vídeo de YouTube*`)
try {
let q = '128kbps'
let v = args[0]
await m.reply(global.wait)  
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m })   
} catch {
try {   
let ytm3 = encodeURIComponent(text)
await m.reply(global.wait)  
let res = await fetch(`https://latam-api.vercel.app/api/ytmp3_2?apikey=nekosmic&q=${ytm3}`)
let json = await res.json()
await conn.sendMessage(m.chat, { audio: { url: json.descarga }, mimetype: 'audio/mpeg', fileName: `${json.titulo}.mp3` }, { quoted: m })  
} catch {
m.reply(`*[❗] Lo siento no pude descargar el audio :(*`)
}}}
handler.command = /^(getaud|ytmp3.2|yta.2)$/i
module.exports = handler
