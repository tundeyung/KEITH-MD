/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU246jOBD9F78STSAJaYjU0hIChEuu5L6aBwMGHMAQbELIKP++IpmenofdUS9PplyqOnXqHP8AJMcU2agBox+gKPEVMtQeWVMgMALjKgxRCToggAyCEWgMxsk0jKQjJx9K8TgxzHhi3zJpuZUVy8JhFw3QtOAC3X8Hjw4oKi/F/h8KWm7gVb03WIV6Eoh0Hvf8ZA2n94FhTuPtpTHjakDRYIBW23fwaCtCXGISaUWMMlTC1EbNEuLya/CVWRHpAVecD7s7C7m7Fjcz14r4ZLc2THy6I2+1Ol9j1034r8HvOYS3at7a7ruw2Ye3w5Quicgpu4NqLrbUMq/odGPQodh8wac4IigwA0QYZs2XeXenhcCtjxuRM+UGLq/y/r6b1Hbm32p+picWasa1dBGgtk2+BtxzBmPnUlQrQ0qXOzlaiG6mOTeLsHGzL8TYFnrNvM9zbCv9DnxZfmgl+T+82w4ZqL4sLo8hlI+T8xrbb9p9Xytdy9jYwlJhXfHidamsaV+D3zBuujHGzelaKkioZvxZD1FVWXd7bcl3DUrIFaLlzduq/id8yKryTyj5fp/FZ/UqEzGPgq7mwdymxTqZKUY29XnM00TcDJKpFST+WLxOlsyR5h6M4wN/bc7a/hAUF3PtWpGpcquYs98s/abU78+JEtSYARgJjw4oUYQpKyHDOWljA6EDYHB1kV8i9mQXdI/HbuXO/WgepbvF+c3ThUQ/WXePHMXh1brdtLWX4v3bLTXfQQcUZe4jSlEwxZTlZTNDlMIIUTD6+3sHEHRjr7213fpCB4S4pGxLqiLNYfCx1I9L6Pt5RZjbEF9tD6gEI/4zjBjDJKItjRWBpR/jK1JjyCgYhTCl6NeAqEQBGLGyQr9Mq+ZBy/t+oEiysjuADsie+8BBa6X+QBaGgjSUxKE4knt/0W91WxcWxTeCGOiA9JnXl4S+2BsOe2+yKMptYht//ELYFgwQgzilYARUG/avuWJrFjfjfM0wFBopaqSAz4k+lPGifn2o+1Yp13ZqijkZXO45WU9ufW1rBRbbWHRXjiVmbPidUb//SxEwAqciFdKd0u2Ty9iJaVi7O+wsmnhRM53P+VNfTkWu16xEedt1alpVWFroZFHl92Z4Jtgx3AO3PwXavG7my4mBzvwyO6/e224BumIf/d5sOss96Z75qOw3QT0WJ8k2h34gst08447kclQDMd5IxSU9ni/SaTM8hrKD54d56juqEOfCJdrH+vwYp8Ft2MtMsr8QNXpp9umZ9OdbhZ9yanfV/oYYPa1PYLvBL+zuhbzVGP/o/Fbk52vyH44cb3fSvIFdXy3cBbQ4mw4tfiUFN109uN628XRYh846kfU1BY/H9w4oUsjCvMzACOAizgkCHVDmVatZk4T5H3qpimmqymvyFFKmfPpggzNEGcwKMBLeBpIsCMNh75W1LPNiCmnckmAMlKxqRd0oReEyyD5sBZT2s40hePwDJHj5lHEHAAA=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'tru';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '🔗';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antimention = process.env.ANTIMENTION || 'true';
const antibot = process.env.ANTIBOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const antibad = process.env.ANTIBAD || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'my owner is unavailable text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'trul';
const voicechatbot2 = process.env.VOICECHATBOT2 || 't';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'true';



module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
