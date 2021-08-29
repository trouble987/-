const db = require("croxydb");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
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
.setAuthor(`Ayarsız Kayıt Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://media.discordapp.net/attachments/881264936230215690/881278443424211094/standard.gif')
.setColor('#f6ff00')
.setDescription(` Ayarsız botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Kayıt Alınacak Rol__`,` \`${prefix}alınacak-rol\` Kayıt Edince Alınacak Rol`,true)
.addField(`<:sagok:778774307253518366> __Erkek Rol__`,` \`${prefix}erkek-rol\` Erkek Rolü Belirtirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Erkek Kayıt__`,` \`${prefix}erkek @etiket <isim> <yaş>\`Erkek Kayıt Edersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kayıt Hoşgeldin__`,` \`${prefix}kayıt-hg\`  Kayıt Hoşgeldin Kanalı Belirtirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kayıt Kanal__`,` \`${prefix}kayıt-kanal\` Kayıtın Yapılacağı Kanalı Ayarlarsınız. `,true)
.addField(`<:sagok:778774307253518366> __Kayıtçı Rol__`,` \`${prefix}kayıtçı-rol\`  Sadece Kimler Kayıt Edebilir.`,true)
.addField(`<:sagok:778774307253518366> __Kız Rol__`,` \`${prefix}kız-rol\` Kız Rolü Belirtirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kız Kayıt__`,` \`${prefix}kız @etiket <isim> <yaş>\`Kız Kayıt Edersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Tag__`,` \`${prefix}tagayarla <tag>\` Kayıt Olanlara Tag Verir.`,true)
.addField(`<:sagok:778774307253518366> __Kayıt Sayacı__`,` \`${prefix}toplam-kayıt\` Kaç Adet Kayıt Yaptığınızı Görürsünüz.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`${prefix}botdavet\` | Ayarsız'i Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kayıt'
  }; 
  