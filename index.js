 const Discord = require('discord.js');
 const { MessageEmbed } = require('discord.js')
 const client = new Discord.Client(); 
 const request = require('superagent')
 var rankrule, leaguerule;
 var maps = [];
 
 maps[1] = '후지츠보 스포츠 클럽';
 maps[2] = '간가제 야외음악당';
 maps[3] = '쵸자메 조선소';
 maps[4] = '해녀미술대학';
 maps[5] = '콘부 트랙';
 maps[6] = '만타 마리아호';
 maps[7] = '홋케 부두';
 maps[8] = '갈치 주차장';
 maps[9] = '엔가와 하천부지';
 maps[10] = '모즈크 농원';
 maps[11] = 'B배스 파크';
 maps[12] = '데본 해양박물관';
 maps[13] = '자토우 마켓';
 maps[14] = '하코후그 창고';
 maps[15] = '아로와나 몰';
 maps[16] = '몬가라 캠프장';
 maps[17] = '숏츠루 광산';
 maps[18] = '아지후라이 스타디움';
 maps[19] = '호텔 뉴 오토로';
 maps[20] = '스메시 월드';
 maps[21] = '안쵸비트 게임즈';
 maps[22] = '무츠고 누각';
 maps[23] = '밧테라 스트리트';
 

 client.once('ready', () => { 
 console.log(''); 
 });

client.on('message', message => {
	console.log(message.content);
	if (message.content === '지금 맵 뭐임?') { 
	request.get('https://splatoon2.ink/data/schedules.json')
    .end((err, response) => {		
if (response.body.gachi[0].rule.name === 'Splat Zones') {
rankrule = '에리어'
		} else if (response.body.gachi[0].rule.name === 'Tower Control') {
rankrule = '야구라'
		} else if (response.body.gachi[0].rule.name === 'Rainmaker') {
rankrule = '호코'
		} else {
rankrule = '아사리'
		}
if (response.body.league[0].rule.name === 'Splat Zones') {
leaguerule = '에리어'
		} else if (response.body.league[0].rule.name === 'Tower Control') {
leaguerule = '야구라'
		} else if (response.body.league[0].rule.name === 'Rainmaker') {
leaguerule = '호코'
		} else {
leaguerule = '아사리'
		}
const embed = new MessageEmbed()
	 .addField('**나와바리**', `${maps[response.body.regular[0].stage_a.id]}\n${maps[response.body.regular[0].stage_b.id]}`)
	 .addField('**랭크 : **' + rankrule, `${maps[response.body.gachi[0].stage_a.id]}\n${maps[response.body.gachi[0].stage_b.id]}`)
	 .addField('**리그 : **' + leaguerule, `${maps[response.body.league[0].stage_a.id]}\n${maps[response.body.league[0].stage_b.id]}`)
	 .setColor(`#3fff33`)
	 message.channel.send(embed);
	 
});
	}
});

client.login('token');
