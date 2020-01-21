export const GAME_URLS = {
    'dev': {
        "FG": {
            "free": "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId={gameId}&playForReal=false&lang={lang}",
            "real": "https://lsl.omegasys.eu/ps/game/GameContainer.action?platform=NETENT_CAS&brandId=524&gameId={gameId}&playForReal=true&lang={lang}"
        },
        "MG": {
            "free": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul={lang}&serverid=2712&sext1=demo&sext2=demo&variant=TNG-demo&gameid={gameId}",
            "real": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul={lang}&serverid=32100&variant=TNGUAT&gameid={gameId}&authtoken={token}"
        },
        "Betsoft": {
            "free": "https://claymoreasia-gp3.discreetgaming.com/cwguestlogin.do?bankId=4542&gameId={gameId}&lang={lang}",
            "real": "https://claymoreasia-gp3.discreetgaming.com/cwstartgamev2.do?bankId=4542&gameId={gameId}&mode=real&token={token}&lang={lang}"
        },
        "PlayTech": {
            "free": "http://cache.download.banner.fourblessings88.com/casinoclient.html?language={lang}&game={gameId}&mode=offline",
            "real": "http://cache.download.banner.fourblessings88.com/casinoclient.html?language={lang}&game={gameId}"
        } 
    },
    'prod': {
        "FG": {
            "free": "https://ps.adminfg.com/ps/game/GameContainer.action?brandId=318&platform=NETENT_CAS&gameId={gameId}&lang={lang}&playForReal=false",
            "real": "https://ps.adminfg.com/ps/game/GameContainer.action?brandId=318&platform=NETENT_CAS&gameId={gameId}&lang={lang}&playForReal=true"
        },
        "MG": {
            "free": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul={lang}&serverid=2712&sext1=demo&sext2=demo&variant=TNG-demo&gameid={gameId}",
            "real": "https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4023&ul={lang}&serverid=32100&variant=TNGUAT&gameid={gameId}&authtoken={token}"
        },
        "Betsoft": {
            "free": "https://claymoreasia-gp3.betsoftgaming.com/cwguestlogin.do?bankId=4542&gameId={gameId}&lang={lang}",
            "real": "https://claymoreasia-gp3.betsoftgaming.com/cwstartgamev2.do?bankId=4542&gameId={gameId}&mode=real&token={token}&lang={lang}"
        },
        "PlayTech": {
            "free": "http://cache.download.banner.fourblessings88.com/casinoclient.html?language={lang}&game={gameId}&mode=offline",
            "real": "http://cache.download.banner.fourblessings88.com/casinoclient.html?language={lang}&game={gameId}"
        }    

    }
    
};

