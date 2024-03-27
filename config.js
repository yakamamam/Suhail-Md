const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "943283124" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "943283124";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,943283124";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "943283124,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_19_03_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNlBXZlI0ME9uc1J0MWJ0ak5LV09LZWpaa1NSeEc2M3dha3ZuMjRXQUVsWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInR0b2lyZjlIaVY0WEdNQXdFK05VOURXYWdLU2phN242dE0vN3RjSkUyaDg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEprNzMwejNtMlFKYUtsdWVlMVUvZXdrcGlaQXl4RmdhcDlGT1djY0xsRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5DOVhKM1g3NjNjeXk5YWdQQUxPV2VqOVdKZGNRYVJSNmpObWpYNWxYMDQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR04rdWMycDlxYzdhM0tGaVhOMTd2WXh5UXJVNjZ6d3IxNklvMy9zS3NGST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFVOWJQRGVIZ3kySHFNaXFuZVBUZnRjYUUxN3BkYnQ2WVM0WVowTHcrMjA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwQis5dEtYWVRGOGwxRFdqd0xwaldCeDdpeXpZcTNOU3U2cTNZTU1FVkdzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibHllRDJmVFNHaUZyS2JhYW8xRzF2blN4eEs0N2tsRUk1T2Q3OG9tQmNFRT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrcDk0YU1yVmdheUhOZkxDOFJKK3NoMTNIRmxWaElBaXc4b3dxRUp5NXptYmdkelVBR1l3RE90d1lTS25ObDRpZEJ2cGtoOGFFbU8zbUYxa0VIeDlEZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDYsXCJhZHZTZWNyZXRLZXlcIjpcIjFiWFNpa1AvNSt5OWhWVmNnMHN1eE5jL1BuaUdKS3BwS0NSVWpuR3VvdEE9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcxNzE0MjMxMkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIyRTUwMzVENTZGRjlBODBCMUQ0NEVDMEQ4ODZEOTBGMFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExNTcwNzU4fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjk0NzE3MTQyMzEyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjk0RTMwN0M0OTBBOEU3MTk4QzY3OEM1QkVGNjcyQ0QyXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE1NzA3NTh9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJEaHY1TVhnclJwV0pGRlNXQkJQS3lnXCIsXCJwaG9uZUlkXCI6XCI3ODNkMzU2MC0wNTVjLTRiZWItOWNmMS0zZTRhYjA4ZTU4MTZcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1vWmM2UVpyMm5uT1p3QVFnR0xEdzRkZi92ND1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib3RhYlVMUHFLdkxpKy9pWlE0WjhXR1N3ODdzPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPSGYwcGtIRU1EK2tiQUdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwialJmVE1ROWttelljUG9wVExzOFFHMGR5SXhpdWUzZk9WY291eEdaRnVnWT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImZiL291YUo0blA2eWkrdC9BczNtY2UvY0k4NGoxUlhoRk1TVmpVNGx6dDlpK2N1dDMxZGsxVHphVVpaV3B3azJ5WlBYenNNTmpiZkZjQ3V1UW9zL0N3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwieFgxaFZNalNoTXVtdi9tbFhFTGtSRDZaeXNXT2JySS9OUCtCdW92UEUvVU1mUGo0RWZ6dWxJSUFtdGRVckJwUVBGQVFWVExESVF6M0gzcGwwR2NrREE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjk0NzE3MTQyMzEyOjEyQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJHT1NUXCIsXCJsaWRcIjpcIjE0NjQ1ODgzNzc4NjcxOToxMkBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDcxNzE0MjMxMjoxMkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJZMFgwekVQWkpzMkhENktVeTdQRUJ0SGNpTVlybnQzemxYS0xzUm1SYm9HXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTU3MDc1NixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFGbWhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyZ3o4Undod1d3R3lJUWNsUFRtYWRBUGYyZ0pDOG9KRmFBODBvNmhEMTlnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzI4MzI3MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtYi5qc29uIjogIntcImtleURhdGFcIjpcIklCK2IxYUR0NHF5bkoycmpmczY4Y0Y5bkUrMEVybngrUExMSXlURW4yWUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMjgzMjczNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm1jLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVy9PL1BXWHBHa2xRdEdBVnpyRlM4ckh3a3Roc0VKRFViUEdpN3o1QlN5QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTMyODMyNzM0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzExMjk5Njg3ODcyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm1kLmpzb24iOiAie1wia2V5RGF0YVwiOlwid0FwY3R2NTI1UHhQSFNseWdrUjhxUGxFWlYyRzlGZnY2VURkcDR1MEdzWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTMyODMyNzM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpeUhZU3RUdkdrSUI2OGhDQWFLUzNINGh0cldnSVlNb0pIUndKWUwwMnBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzI4MzI3MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEzMDEzMjAwOTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMazQ4RjlqNVhQWWgySlVaY0t6S0twZmI1YW16SzBXemlYYURFS0NDVHk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzI4MzI3MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtZy5qc29uIjogIntcImtleURhdGFcIjpcIndtbStmcHk1LzZNVG55TFVhU2ZBTGdCOERUV0M2d29ybTdROGZkNUo3emM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMjgzMjczNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTU2OTc4NDIwOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtaC5qc29uIjogIntcImtleURhdGFcIjpcInFQQUY2WXpPVE1XdFltTXEvWVFHWXhKWWYzTlhBMGI2RmpJK3ZPYXM1WEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzMjgzMjczNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExNTcwNzU4NTM5XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x ɢᴏꜱᴛ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "3775114c-7be1-44fa-b09e-16ec5a229f3c",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "mmapakayaubai",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
