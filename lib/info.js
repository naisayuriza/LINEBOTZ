exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramkamu, whatsappkamu, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi kak, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *GITHUB*: https://github.com/naisayuriza/LINEBOTZ
⚜ *AUTHOR*: RHISHNA
⚜ *DESIGNER*: RHISHNA
⚜ *YOUTUBE*: RHISHNA CAPITAL
⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻ INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE RHISHNA CAPITAL

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* : SUBSCRIBE KAK [https://www.youtube.com/channel/UCbk-kBacTNh6KtvHjhmrfLQ]

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
