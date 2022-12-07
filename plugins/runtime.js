let handler = async (m, { conn }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
m.reply(`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${taguser} Este es el menú completo de Sapito_Bot*
║➤ *Número del creador¹: +595 983 186566*
║➤ *Prefijo usado: ${usedPrefix}*
║➤ *Número del creador²: +52 453 110 6422*
║➤ *Acuérdate de tomar awita*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _a_
┣ ඬ⃟💫 _${usedPrefix}cat_
┣ ඬ⃟💫 _${usedPrefix}dog_
┣ ඬ⃟💫 _${usedPrefix}meme_
┣ ඬ⃟💫 _${usedPrefix}logos_
┣ ඬ⃟💫 _${usedPrefix}runtime_
┣ ඬ⃟💫 _${usedPrefix}infohost_
┣ ඬ⃟💫 _${usedPrefix}on welcome_
┣ ඬ⃟💫 _${usedPrefix}off welcome_
┣ ඬ⃟💫 _${usedPrefix}ig *[url]*_
┣ ඬ⃟💫 _${usedPrefix}mediafire *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟💫 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}attp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}attp3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp4 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp5 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}wikipedia *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}google *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}invocar *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytsearch *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}getaud *[url]*_
┣ ඬ⃟💫 _${usedPrefix}getvid *[url]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟💫 _${usedPrefix}toimg *[sticker]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[video]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[audio]*_
┣ ඬ⃟💫 _${usedPrefix}fat *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}bass *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}blown *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}deep *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}fast *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}robot *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}slow *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}tupai *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}vibra *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}earrape *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}reverse *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}smooth *[nota de voz]*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}update_
┣ ඬ⃟💫 _${usedPrefix}banchat_
┣ ඬ⃟💫 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛ ${uptime}*
*└───────────────*
`.trim())}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i
module.exports = handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
