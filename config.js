//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/zw89uk.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/evkqex.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mariapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUI3MnNGdDFSOUVDNEVLMEZXTysrejcvOUl6RHhnUE5GbUJEdUN3MXFHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzFlbHVMV2V0V080TUZSS1VQRDRmNG1aNkxiejlUSWVUdVUrMmFLSVJ4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSEF6dkdyYkpwaUQwWUIzUlRlMCtKMUlSaldMbFBPTVpJNm5penJwazNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSEdKZ0N3bUdyQ1VQUC8vZWVLZFVWVEl6OE40dllzdjdJL0ZaNTNYSkFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPRklZZVM1SGJTZ1NJMXpFN1gxVk1kVFZXbFR4Vnl3SkFpQmtJNjNxM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUyaUJ4Q2ZkQ2lnd2pxZVNNT0JqR2FsSHVGNE9DUWRzbHlLRFBESWoxaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdOMEJrakF0UUxMaVlVK1RhWHhaUVBlQWM2end5SUtXUGJZejVjYlNHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWcvakg0YVU0cGpBU1k1SHl1SUdRUFBJbnZ1L3Z6UnI5VkJ0SnpNSzRCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGNmhYWXVsbllyMmhGa0VXT0FKM0dqekVXb1dLWnhLb3QrZVBZeVNqbnl1aHk4SXdkTkV0MW0yM0l3dkx1dVlvL2RCV1M5UjRzY0Z2NzNrL0M5UGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6InMyOHMwTWVlOFEyUDlBVmJFbHNBZ245dEUrbWhUWnBCTWdQN2Q5SlQwVlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRGOTcyNDdGRjVDNDUyQTFGQjgzOTk2RjEyQzA4NTc3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA4OTI0NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMDFBMzVDNjg2RDRGRjFEQkQyRDgzREUwNDk4ODk0NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwODkyNDY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzRUg5TnBYalRkS2VSUUR5clg5a0dnIiwicGhvbmVJZCI6IjA3Zjc2YjI3LTUxNmMtNDUzMy05NGUwLTRiZTM4ZDg3OGI0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTnZORVlwa011Q3JTNy9jcjYyNFJjd3QxUFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkZFUWQrT2VId29uUEZmZTZmWjVPUHJnQ3U0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE1SEFUUlBTIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JKAseqqs/CTiojwkoac8JOCgOG0uOG0vOG0v+KEgvCdlLjwnZWK8J2UvPCdlZDihJ3ihI3wnZWG8J2Uu/CdlLzwnZWK8JOCgPCShpzwk4qJIOqngvCSgLEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUYnpQb0JFS0dscmJrR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJzVTBnS2dLa2lLZGhweUh0UVVjZVlUS2lZNFB5cVVWQ3BYOEdEdmJtMTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtsTkhXK3dlNUxWS3N4NEM0TlZZMFExRUpnTVdObGNBK28rK2p3eDJtVUZHdHZHeTNzTHA4Q2wrcWZPZHRydTVrMENTaTFlVVZSVmwwQUhFcHBLc0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlajdObjZJZzBWYXdtUmJTR3ZHWnNPVnZuTEw0K0J5ajVsQUNaZHFwL2FnODF2NU9mSXBsa2pzRXJKcXI1MEtjK2ZubmdoZ3RHVXFMcGwrVDRKQ25pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMjE5MjExOToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXN0ZOSUNvQ3BJaW5ZYWNoN1VGSEhtRXlvbU9EOHFsRlFxVi9CZzcyNXRlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwODkyNDYyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhpUSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "CASEYRHODES",
  packname: process.env.PACK_NAME || "THE DONN",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "CASEYRHODES",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
