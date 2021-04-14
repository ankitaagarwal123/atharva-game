class Player {
    constructor() {
        this.index = null;
        this.xPosition = 100//random(100, 700);
        this.yPosition = 500// random(100, 800);
        this.name = null;
        this.life = 1;
        this.bullets = 6;

    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            xPosition: this.xPosition,
            yPosition: this.yPosition,
            life: this.life,
            bullets: this.bullets,
          
        });
    }

    updatewithindex(i) {
        var playerIndex = "players/player" + i;
        database.ref(playerIndex).update({
           
            life: 0,
           
          
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }


  
}
