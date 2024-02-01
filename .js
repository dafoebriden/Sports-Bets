

const players = [

    {
        Name: 'Ralphy',
        Emoji: '🥷',
        Skill: 55,
        TeamNumber: 0,

    },
    {
        Name: 'Abert',
        Emoji: '🕵️‍♂️',
        Skill: 30,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '💂‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '👮‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '🦸‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '🧙‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '🦹‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '🧙',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '🤵‍♂️',
        Skill: 25,
        TeamNumber: 0,

    },
    {
        Name: 'Ralphy',
        Emoji: '👨‍🚒',
        Skill: 25,
        TeamNumber: 0,

    }
]

function assignTeamNumber() {
    const assignBlueTeam = Math.floor(Math.random() * players.length)
    const playerOnBlueTeam = players[assignBlueTeam]
    playerOnBlueTeam.TeamNumber = 1
    console.log(playerOnBlueTeam)


}



function addPlayersEmoji() {

    let playerTeamNumber = 0

    let playerEmojis = ''

    // const playerImages = players.filter(player => player.Emoji)
    // playerImages.forEach(player => playerEmojis += player.Emoji)

    const playerNumbers = players.filter(player => player.TeamNumber == 0)
    playerNumbers.forEach(player => playerEmojis += player.Emoji)
    const playerLineupElement = document.getElementById('team1Lineup')
    playerLineupElement.innerText = playerEmojis




}


assignTeamNumber()
addPlayersEmoji()