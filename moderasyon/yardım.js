const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../ayarlar.json");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor('Ayarsız Yardım Menüsü',message.author.displayAvatarURL({dynamic : true}))
.setThumbnail('https://media.discordapp.net/attachments/881272122272514092/881276041891577906/b6b3105f10f33ac9a83c3f1bdec0f87b.gif?width=453&height=453')
.setImage("https://media.discordapp.net/attachments/881264936230215690/881278443424211094/standard.gif")
.setColor('#f6ff00')
.addField( `**╔═══════════◥◣❖◢◤════════════╗**`,
    ` **║ Bilgilendirme.**
**║ [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=6920523328124355226&scope=bot&permissions=8)**
**║ [Destek Sunucusu](https://discord.gg/AjtzpzPQfv)**
**║ [Bot Sitesi]()**
**╚═══════════◥◣❖◢◤════════════╝**
   `)
.addField(`<a:yildiz:778774342640730112> __Kayıt Komutları__`,` \`${prefix}kayıt\``,true)
.addField(`<a:yildiz:778774342640730112> __Seviye Komutları__`,` \`${prefix}seviye\` `,true)
.addField(`<a:yildiz:778774342640730112> __Yetkili Komutları__`,` \`${prefix}moderasyon\` `,true)
.addField(`<a:yildiz:778774342640730112> __Logo Komutları__`,` \`${prefix}logo\` `,true)
.addField(`<a:yildiz:778774342640730112> __Botlist Komutları__`,` \`${prefix}botlist\` `,true)
.addField(`<a:yildiz:778774342640730112> __Guard Komutları__`,` \`${prefix}guard\` `,true)
.addField(`<a:yildiz:778774342640730112> __Gif Komutları__`,` \`${prefix}gif\` `,true)
.addField(`<a:yildiz:778774342640730112> __Güvenlik Komutları__`,` \`${prefix}güvenlik\` `,true)
.addField(`<a:yildiz:778774342640730112> __Davet Komutları__`,` \`${prefix}davet\` `,true)
.addField(`<a:yildiz:778774342640730112> __Profil Komutları__`,` \`${prefix}profil\` `,true)
.addField(`<a:yildiz:778774342640730112> __Kullanıcı Komutları__`,` \`${prefix}kullanıcı\` `,true)
.addField(`<a:yildiz:778774342640730112> __Nsfw Komutları__`,` \`${prefix}nsfw\` `,true)
.addField(`<a:yildiz:778774342640730112> __Hazır Sunucu Komutları__`,` \`${prefix}sunucukur\` `,true)

.addField(`╔═══════════◥◣❖◢◤════════════╗`,
`**║  \`${prefix}botdavet\` __Botu Davet Edebilirsiniz!__**
**║  \`${prefix}istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
**║ \`${prefix}tavsiye\` __Bizlere Tavsiye Verirsiniz.__**
**║ \`${prefix}bug-bildir\` __Bot Hatalarını Bildirirsiniz.__**
**╚═══════════◥◣❖◢◤════════════╝**
`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  