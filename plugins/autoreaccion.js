let handler = async (m, { conn }) => {
let emot = pickRandom(["🎃", "❤", "😘", "🐸", "💕", "😎", "🙌", "⭐", "👻", "🔥"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(Sapito|sapito|Sapito_Bot|sexy|Sapito Bot|xd|No)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
