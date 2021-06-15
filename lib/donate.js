exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramkamu, whatsappkamu, kapanbotaktif) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi kak, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi kak? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: -
⚜ *#DANA*: -
⚜ *#BANK*: -
⚜ *#PULSA*: 083830172470
⚜ *#GOPAY*: -
⚜ *#SAWERIA*: https://saweria.co/donate/rhishna

📺 *Iklan* : SUBSCRIBE KAK [https://www.youtube.com/channel/UCbk-kBacTNh6KtvHjhmrfLQ]

✅ Follow akun instagram admin kak ${instagram kamu}

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
