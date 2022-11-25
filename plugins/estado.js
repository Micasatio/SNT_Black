/* By https://github.com/Micasatio */
let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ😈 Hola cara de bola 😈彡*
*ミ🥵 Estado del Bot 🥵彡*
*=> Bot exitado ✔️*
*=> Bot uso público ✔️*
`.trim(), 'Black_Bot', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '👻 Run Time 👻', `${usedPrefix}runtime`, '💠️ meme 💠️', `${usedPrefix}meme`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
