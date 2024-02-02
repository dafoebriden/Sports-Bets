
let bank = 2000

const players = [

    {
        Name: 'ninja',
        Emoji: '🥷',
        Skill: 55,
        TeamNumber: 0,

    },
    {
        Name: 'detective',
        Emoji: '🕵️‍♂️',
        Skill: 30,
        TeamNumber: 0,

    },
    {
        Name: 'guard',
        Emoji: '💂‍♂️',
        Skill: 20,
        TeamNumber: 0,

    },
    {
        Name: 'cop',
        Emoji: '👮‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'superman',
        Emoji: '🦸‍♂️',
        Skill: 80,
        TeamNumber: 0,

    },
    {
        Name: 'wisard',
        Emoji: '🧙‍♂️',
        Skill: 75,
        TeamNumber: 0,

    },
    {
        Name: 'villan',
        Emoji: '🦹‍♂️',
        Skill: 65,
        TeamNumber: 0,

    },
    {
        Name: 'apprentice wisard',
        Emoji: '🧙',
        Skill: 60,
        TeamNumber: 0,

    },
    {
        Name: 'buttler',
        Emoji: '🤵‍♂️',
        Skill: 10,
        TeamNumber: 0,

    },
    {
        Name: 'fireman',
        Emoji: '👨‍🚒',
        Skill: 15,
        TeamNumber: 0,

    }
]

// function assignTeamNumber() {
//     // const assignBlueTeam = Math.floor(Math.random() * players.length)
//     // const playerOnBlueTeam = players[assignBlueTeam]
//     // playerOnBlueTeam.TeamNumber = 1
//     // console.log(playerOnBlueTeam)


players.forEach(player => {
    // console.log(player.Name)
    player.TeamNumber = Math.round(Math.random())
    console.log(player);
})


function betRedTeam() {

}


function addPlayersEmoji() {

    let playerTeamNumber = 0

    let player1Emojis = ''
    let player2Emojis = ''

    // const playerImages = players.filter(player => player.Emoji)
    // playerImages.forEach(player => playerEmojis += player.Emoji)

    const player1Numbers = players.filter(player => player.TeamNumber == 0)
    player1Numbers.forEach(player => player1Emojis += player.Emoji)
    const playerLineup1Element = document.getElementById('team1Lineup')
    playerLineup1Element.innerText = player1Emojis

    const player2Numbers = players.filter(player => player.TeamNumber == 1)
    player2Numbers.forEach(player => player2Emojis += player.Emoji)
    const playerLineup2Element = document.getElementById('team2Lineup')
    playerLineup2Element.innerText = player2Emojis

}


assignTeamNumber()
addPlayersEmoji()