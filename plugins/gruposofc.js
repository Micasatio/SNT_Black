let handler = async (m, { conn }) => {
m.reply(`
*Hola*   ¿cómo está? Espero que bien 😊
_Te invito a unirte a los grupos oficiales de_ *Black_Bot*

1- https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC
2- https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432
3- https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk
`)
}
handler.command = /^(grupos)$/i
module.exports = handler
