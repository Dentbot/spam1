const ServerID = "509793216896303105"; //اي دي السيرفر
const ChannelID = "590551280125214740";// اي دي الروم

console.log(`
 



                                                                                                            
                                                                                                            
  ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
 /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
                                                                                                            
                                                                                                            

		
 ▒█▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀█ ▀▀█▀▀ 
 ▒█▄▄█ █▄▄▀ █░░█ █▀▀▄ █░░█ ░░█░░ 
 ▒█░░░ ▀░▀▀ ▀▀▀▀ ▀▀▀░ ▀▀▀▀ ░░▀░░ 
         

 ▒█▀▀█ █▀▀█ █▀▀ █▀▀▄ ░▀░ ▀▀█▀▀ █▀▀ 
 ▒█░░░ █▄▄▀ █▀▀ █░░█ ▀█▀ ░░█░░ ▀▀█ 
 ▒█▄▄█ ▀░▀▀ ▀▀▀ ▀▀▀░ ▀▀▀ ░░▀░░ ▀▀▀ 
 

▒█▀▄▀█ ░▀░ █▀▀▄ █▀▀ █▀▀█ 
▒█▒█▒█ ▀█▀ █░░█ █▀▀ █▄▄▀ 
▒█░░▒█ ▀▀▀ ▀░░▀ ▀▀▀ ▀░▀▀ 

        ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
        /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
`)
const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);
console.log(`Stewart`)
console.log(`
______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
/_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 

╭━━━╮╱╱╱╱╭╮╱╱╱╱╭╮╱╭━━━╮╱╱╱╱╱╱╭╮╭╮╱╱╱╱╭━╮╭━╮
┃╭━╮┃╱╱╱╱┃┃╱╱╱╭╯╰╮┃╭━╮┃╱╱╱╱╱╱┃┣╯╰╮╱╱╱┃┃╰╯┃┃
┃╰━╯┣━┳━━┫╰━┳━┻╮╭╯┃┃╱╰╋━┳━━┳━╯┣╮╭╋━━╮┃╭╮╭╮┣┳━╮╭━━┳━╮
┃╭━━┫╭┫╭╮┃╭╮┃╭╮┃┃╱┃┃╱╭┫╭┫┃━┫╭╮┣┫┃┃━━┫┃┃┃┃┃┣┫╭╮┫┃━┫╭╯
┃┃╱╱┃┃┃╰╯┃╰╯┃╰╯┃╰╮┃╰━╯┃┃┃┃━┫╰╯┃┃╰╋━━┃┃┃┃┃┃┃┃┃┃┃┃━┫┃
╰╯╱╱╰╯╰━━┻━━┻━━┻━╯╰━━━┻╯╰━━┻━━┻┻━┻━━╯╰╯╰╯╰┻┻╯╰┻━━┻╯    
╭━━━╮╭╮╱╱╱╱╱╭╮
┃╭━╮┣╯╰╮╱╱╱╭╯╰╮
┃╰━━╋╮╭╋━━┳┻╮╭╋┳━╮╭━━╮
╰━━╮┃┃┃┃╭╮┃╭┫┃┣┫╭╮┫╭╮┃
┃╰━╯┃┃╰┫╭╮┃┃┃╰┫┃┃┃┃╰╯┃╭┳┳╮
╰━━━╯╰━┻╯╰┻╯╰━┻┻╯╰┻━╮┃╰┻┻╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯

______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______   ______ 
/_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/ 
`)


client.on('ready', () => console.log(`
╭━━━╮╱╱╱╱╱╱╱╱╱╭━╮╭━╮╱╱╱╱╱╱╱╱╱╭━━━╮╭╮╱╱╱╱╱╭╮╱╱╱╱╱╭╮╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱┃┃╰╯┃┃╱╱╱╱╱╱╱╱╱┃╭━╮┣╯╰╮╱╱╱╭╯╰╮╱╱╱╱┃┃┃┃
╱┃┃┃┣━━┳━╮╭━━╮┃╭╮╭╮┣┳━╮╭━━┳━╮┃╰━━╋╮╭╋━━┳┻╮╭╋━━┳━╯┃┃┃
╱┃┃┃┃╭╮┃╭╮┫┃━┫┃┃┃┃┃┣┫╭╮┫┃━┫╭╯╰━━╮┃┃┃┃╭╮┃╭┫┃┃┃━┫╭╮┃╰╯
╭╯╰╯┃╰╯┃┃┃┃┃━┫┃┃┃┃┃┃┃┃┃┃┃━┫┃╱┃╰━╯┃┃╰┫╭╮┃┃┃╰┫┃━┫╰╯┃╭╮╭╮
╰━━━┻━━┻╯╰┻━━╯╰╯╰╯╰┻┻╯╰┻━━┻╯╱╰━━━╯╰━┻╯╰┻╯╰━┻━━┻━━╯╰╯╰╯
`));

client.on('disconnect', () => console.log(`
╭━╮╭━╮╱╱╱╱╱╱╱╱╱╭╮╱╭╮╱╱╱╱╭╮
┃┃╰╯┃┃╱╱╱╱╱╱╱╱╱┃┃╱┃┃╱╱╱╱┃┃             
┃╭╮╭╮┣┳━╮╭━━┳━╮┃╰━╯┣━━┳━╯┃
┃┃┃┃┃┣┫╭╮┫┃━┫╭╯┃╭━╮┃╭╮┃╭╮┃
┃┃┃┃┃┃┃┃┃┃┃━┫┃╱┃┃╱┃┃╭╮┃╰╯┃
╰╯╰╯╰┻┻╯╰┻━━┻╯╱╰╯╱╰┻╯╰┻━━╯

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╭┳╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱┃┃┃
╱┃┃┃┣┳━━┳━━┳━━┳━╮╭━╮╭━━┳━┻╮╭╋━━┳━╯┃┃
╱┃┃┃┣┫━━┫╭━┫╭╮┃╭╮┫╭╮┫┃━┫╭━┫┃┃┃━┫╭╮┣╯
╭╯╰╯┃┣━━┃╰━┫╰╯┃┃┃┃┃┃┃┃━┫╰━┫╰┫┃━┫╰╯┣╮
╰━━━┻┻━━┻━━┻━━┻╯╰┻╯╰┻━━┻━━┻━┻━━┻━━┻╯

`));

client.on('reconnecting', () => console.log(`
╭━━━╮╱╱╱╱╭╮╱╱╱╱╭╮╱╭━━━╮╱╱╱╱╱╱╭╮╭╮
┃╭━╮┃╱╱╱╱┃┃╱╱╱╭╯╰╮┃╭━╮┃╱╱╱╱╱╱┃┣╯╰╮
┃╰━╯┣━┳━━┫╰━┳━┻╮╭╯┃┃╱╰╋━┳━━┳━╯┣╮╭╋━━╮
┃╭━━┫╭┫╭╮┃╭╮┃╭╮┃┃╱┃┃╱╭┫╭┫┃━┫╭╮┣┫┃┃━━┫
┃┃╱╱┃┃┃╰╯┃╰╯┃╰╯┃╰╮┃╰━╯┃┃┃┃━┫╰╯┃┃╰╋━━┃
╰╯╱╱╰╯╰━━┻━━┻━━┻━╯╰━━━┻╯╰━━┻━━┻┻━┻━━╯
╭━╮╭━╮╱╱╱╱╱╱╱╱╱╭━━╮               
┃┃╰╯┃┃╱╱╱╱╱╱╱╱╱╰┫┣╯
┃╭╮╭╮┣┳━╮╭━━┳━╮╱┃┃╭━━╮
┃┃┃┃┃┣┫╭╮┫┃━┫╭╯╱┃┃┃━━┫
┃┃┃┃┃┃┃┃┃┃┃━┫┃╱╭┫┣╋━━┃
╰╯╰╯╰┻┻╯╰┻━━┻╯╱╰━━┻━━╯           
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
┃╰━╯┣━━┳━━┳━━┳━╮╭━╮╭━━┳━┻╮╭╋┳━╮╭━━╮
┃╭╮╭┫┃━┫╭━┫╭╮┃╭╮┫╭╮┫┃━┫╭━┫┃┣┫╭╮┫╭╮┃
┃┃┃╰┫┃━┫╰━┫╰╯┃┃┃┃┃┃┃┃━┫╰━┫╰┫┃┃┃┃╰╯┣┳┳╮
╰╯╰━┻━━┻━━┻━━┻╯╰┻╯╰┻━━┻━━┻━┻┻╯╰┻━╮┣┻┻╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯


`));


client.on('ready', async() => {
    setInterval(()=>{
    client.guilds.get(ServerID).channels.get(ChannelID).send('**Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , **')
    },12000);
})
client2.on('ready', async() => {
    setInterval(()=>{
    client.guilds.get(ServerID).channels.get(ChannelID).send('**Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , **')
    },12000);
})
client3.on('ready', async() => {
    setInterval(()=>{
    client.guilds.get(ServerID).channels.get(ChannelID).send('**Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , Drak , **')
    },12000);
})

client.on('message', message => {//start of msg event
    if(message.content === `!daily`) {//the cmd
        message.channel.send('#daily')
    }//to get the daily 
});//end of msg event

//end of msg event
client.on('message', message => {//start of msg event 
    if(message.content === `!credits`) {//the cmd
        message.channel.send('#credits')
    }//to view the credits
});//end of msg event

//end of rep code

client.on('message', message => {//start of msg event
    let mention = message.mentions.users.first()//mention rule
    if(message.content === `!rep`) {//the cmd
        if(!mention) return message.channel.send('Mention The Target')//if he not written the mention return with this msg
        message.channel.send(`#rep ${mention}`)
    }//to give someone a rep
});//end of msg event
client2.on('message', message => {//start of msg event
    if(message.content === `!daily`) {//the cmd
        message.channel.send('#daily')
    }//to get the daily 
});//end of msg event

//end of msg event
client2.on('message', message => {//start of msg event 
    if(message.content === `!credits`) {//the cmd
        message.channel.send('#credits')
    }//to view the credits
});//end of msg event

//end of rep code

client2.on('message', message => {//start of msg event
    let mention = message.mentions.users.first()//mention rule
    if(message.content === `!rep`) {//the cmd
        if(!mention) return message.channel.send('Mention The Target')//if he not written the mention return with this msg
        message.channel.send(`#rep ${mention}`)
    }//to give someone a rep
});//end of msg event
client3.on('message', message => {//start of msg event
    if(message.content === `!daily`) {//the cmd
        message.channel.send('#daily')
    }//to get the daily 
});//end of msg event

//end of msg event
client3.on('message', message => {//start of msg event 
    if(message.content === `!credits`) {//the cmd
        message.channel.send('#credits')
    }//to view the credits
});//end of msg event

//end of rep code

client3.on('message', message => {//start of msg event
    let mention = message.mentions.users.first()//mention rule
    if(message.content === `!rep`) {//the cmd
        if(!mention) return message.channel.send('Mention The Target')//if he not written the mention return with this msg
        message.channel.send(`#rep ${mention}`)
    }//to give someone a rep
});//end of msg event
client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
