exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramkamu, whatsappkamu, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi kak, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
=> *1.PEMBUAT STICKER*
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: #sticker
Contoh: kirim gambar dengan caption #sticker

=> *2.NULIS OTOMATIS*
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #nulis [kata]
Contoh: #nulis FALINE CANS

=> *3.FITUR PANTUN*
_${BotName} akan mengirimkan pantun secara random!_
Perintah: #pantun
Contoh: #pantun

=> *4.DOWNLOADER YOUTUBE*
_${BotName} akan mengirimkan video downloader dari yt sesuai perintah kamu!_
Perintah: #yt [link]
Contoh: #yt https://youtu.be/falineandih

=> *5.FITUR QUOTES*
_${BotName} akan mengirimkan katabijak secara random!_
Perintah: #quotes
Contoh: #quotes

=> *6.PENYEGAR TIMELINE*
_${BotName} akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
Perintah: #ptl [cewek/cowok]
Contoh: #ptl cewek

=> *7.FITUR ANIME*
_${BotName} akan mengirimkan gambar anime secara random!_
Perintah: #randomanime
Contoh: #randomanime

=> *8.PENGUBAH SUARA GOOGLE*
_${BotName} akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
Perintah: #ttsid [kata]
Contoh: #ttsid FALINE CANS

=> *9.FITUR QURAN*
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: #quran
Contoh: #quran

=> *10.INFORMASI BOT*
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: #info
Contoh: #info

=> *11.FITUR KAK*
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: #kak [kata]
Contoh: #kak halo para fielove

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} akan mengirimkan lagu sesuai perintah yang kamu kirim!_
Perintah: #ytmp3 [link]
Contoh: #ytmp3 https://youtu.be/falineandih

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
Perintah: #ig [link]
Contoh: #ig https://instagram.com/falineandih_real

=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto fb sesuai perintah yang kamu kirim!_
Perintah: #fb [link]
Contoh: #fb https://facebook.com/falineandih

=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
Perintah: #twt [link]
Contoh: #twt https://twitter.com/falineandih

=> *16.WIKIPEDIA*
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: #wiki [query]
Contoh: #wiki falineandih

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :SUBSCRIBE KAK [https://www.youtube.com/channel/UCbk-kBacTNh6KtvHjhmrfLQ]

✅ Follow akun instagram admin ${instagram kamu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapp kamu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️


  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
