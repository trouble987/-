const Discord = require('discord.js');
const ayarlar = require ("../ayarlar.json");
const prefix = ayarlar.prefix;
const data = require('croxydb')

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setTitle('Spallers Tag Rol Sistemi')
.setDescription(`\`${prefix}rol-tag 🚀\`
**Lütfen tag ayarlayınız başlamadan önce**

\`${prefix}tag-role [@rolEtiket]\`
Sunucunuz da **tag** alan üyeye verilecek rolü etiketle

\`${prefix}tag-log [#kanalEtiket]\`
**Tag** alan & çıkaran üyeleri kanala bilgi olarak gönderir

\`\`\`Sıfırlama Komutları\`\`\`
\`${prefix}tagrole-sil\`
**Tagın ayarlı olan rolü siler**

\`${prefix}tag-log-kapat\`
**Ayarladığınız tag kanalı sıfırlar**

📢 Sistem Nasıl Çalışır?
**Buradaki herşeyi kurduktan sonra, \`Tag\` alan veya cıkartanın sunucunuz da herhangi bir kanala msj yazması durumunda alıp vermektedir.**
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/881272122272514092/881276041891577906/b6b3105f10f33ac9a83c3f1bdec0f87b.gif?width=453&height=453'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tagrol-sistem'
};