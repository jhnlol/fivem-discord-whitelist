const functions = require('./bot.js')
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
functions.login()
on('playerConnecting', async (name, reason, deferrals) => {
    let user = GetIdentifiers(source)
    if(user.discord == 'Brak') return deferrals.done('Masz wyłaczonego discorda!')
    deferrals.defer()
    await sleep(1)
    deferrals.update('poczekaj, jestes sprawdzany')
    if(functions.getUser(user.discord) == false) return deferrals.done('Nie znajdujesz sie na discordzie')
    await sleep(500)
    deferrals.update('trwa sprawdzanie wl')
    await sleep(2000)
    if(functions.checkRole(user.discord) == false) return deferrals.done('Nie posiadasz whitelisty!')
    functions.wejscielog('STEAM: ' + user.steam + '\nDISCORD: ' + user.discord + '\nLICENSE: ' + user.license + '\nXBL: ' + user.xbl + '\nLIVE: ' + user.live)
    deferrals.update('trwa laczenie z serwerem')
    await sleep(100)
    deferrals.done()
})
function GetIdentifiers(source) {
    const identifiers = {
        steam: "Brak",
        discord: "Brak",
        license: "Brak",
        xbl: "Brak",
        live: "Brak"
    }

    for (let i = 0; i < GetNumPlayerIdentifiers(source); i++) {
        const identifier = GetPlayerIdentifier(source, i);
        if (identifier.includes('steam:')) identifiers.steam = identifier;
        if (identifier.includes('discord:')) identifiers.discord = identifier.substring(8, identifier.length);
        if (identifier.includes('license:')) identifiers.license = identifier;
        if (identifier.includes('xbl:')) identifiers.xbl = identifier;
        if (identifier.includes('live:')) identifiers.live = identifier;
    }

    return identifiers;
}