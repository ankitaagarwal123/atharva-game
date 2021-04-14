class Game {

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }


        //creating sleeping lines of walls of maze
        var w1 = new Wall(205, 30, 5, 45);
        var w2 = new Wall(230, 50, 50, 5);
        var w3 = new Wall(350, 50, 105, 5);
        var w4 = new Wall(525, 50, 55, 5);
        var w5 = new Wall(647, 50, 105, 5);
        var w6 = new Wall(105, 50, 105, 5);
        var w7 = new Wall(82, 95, 55, 5);
        var w8 = new Wall(228, 95, 155, 5);
        var w9 = new Wall(378, 95, 55, 5);
        var w10 = new Wall(499, 95, 105, 5);
        var w11 = new Wall(865, 95, 55, 5);
        var w12 = new Wall(230, 139, 250, 5);
        var w13 = new Wall(450, 139, 105, 5);
        var w14 = new Wall(622, 139, 155, 5);
        var w15 = new Wall(792, 139, 105, 5);
        var w16 = new Wall(106, 183, 107, 5);
        var w17 = new Wall(352, 183, 105, 5);
        var w18 = new Wall(500, 183, 105, 5);
        var w19 = new Wall(675, 183, 150, 5);
        var w20 = new Wall(131, 227, 150, 5);
        var w21 = new Wall(279, 227, 54, 5);
        var w22 = new Wall(400, 227, 100, 5);
        var w23 = new Wall(520, 227, 50, 5);
        var w24 = new Wall(35, 270, 50, 5);
        var w25 = new Wall(180, 270, 50, 5);
        var w26 = new Wall(300, 270, 100, 5);
        var w27 = new Wall(475, 270, 50, 5);
        var w28 = new Wall(700, 270, 100, 5);
        var w29 = new Wall(815, 270, 50, 5);
        var w30 = new Wall(230, 312, 50, 5);
        var w31 = new Wall(405, 312, 100, 5);
        var w32 = new Wall(600, 312, 100, 5);
        var w33 = new Wall(745, 312, 100, 5);
        var w34 = new Wall(180, 355, 50, 5);
        var w35 = new Wall(275, 355, 50, 5);
        var w36 = new Wall(500, 355, 200, 5);
        var w37 = new Wall(205, 400, 100, 5);
        var w38 = new Wall(500, 400, 100, 5);
        var w39 = new Wall(80, 444, 50, 5);
        var w40 = new Wall(180, 444, 50, 5);
        var w41 = new Wall(280, 444, 50, 5);
        var w42 = new Wall(400, 444, 100, 5);
        var w43 = new Wall(600, 444, 100, 5);
        var w44 = new Wall(820, 444, 50, 5);
        var w45 = new Wall(80, 486, 150, 5);
        var w46 = new Wall(230, 486, 50, 5);
        var w47 = new Wall(550, 486, 100, 5);
        var w48 = new Wall(700, 486, 100, 5);
        var w49 = new Wall(845, 486, 100, 5);
        var w50 = new Wall(80, 530, 50, 5);
        var w51 = new Wall(180, 530, 50, 5);
        var w52 = new Wall(280, 530, 50, 5);
        var w53 = new Wall(622, 530, 50, 5);
        var w54 = new Wall(770, 530, 50, 5);
        var w55 = new Wall(35, 574, 50, 5);
        var w56 = new Wall(300, 574, 100, 5);
        var w57 = new Wall(500, 574, 100, 5);
        var w58 = new Wall(695, 574, 100, 5);
        var w59 = new Wall(80, 618, 50, 5);
        var w60 = new Wall(180, 618, 50, 5);
        var w61 = new Wall(375, 618, 50, 5);
        var w62 = new Wall(600, 618, 300, 5);
        var w63 = new Wall(820, 618, 50, 5);
        var w64 = new Wall(80, 661, 50, 5);
        var w65 = new Wall(200, 661, 100, 5);
        var w66 = new Wall(450, 661, 100, 5);
        var w67 = new Wall(672, 661, 250, 5);
        var w68 = new Wall(30, 704, 50, 5);
        var w69 = new Wall(155, 704, 100, 5);
        var w70 = new Wall(280, 704, 50, 5);
        var w71 = new Wall(405, 704, 100, 5);
        var w72 = new Wall(620, 704, 150, 5);
        var w73 = new Wall(817, 704, 50, 5);
        var w74 = new Wall(130, 748, 50, 5);
        var w75 = new Wall(225, 748, 50, 5);
        var w76 = new Wall(325, 748, 50, 5);
        var w77 = new Wall(450, 748, 100, 5);
        var w78 = new Wall(620, 748, 50, 5);
        var w79 = new Wall(820, 748, 50, 5);
        var w80 = new Wall(30, 400, 50, 5);

        //creating standing lines of walls of maze
        var w81 = new Wall(56, 72, 5, 50);
        var w82 = new Wall(56, 160, 5, 50);
        var w83 = new Wall(56, 248, 5, 50);
        var w84 = new Wall(56, 357, 5, 90);
        var w85 = new Wall(56, 553, 5, 50);
        var w86 = new Wall(56, 553 + 87, 5, 50);
        var w87 = new Wall(56, 553 + 87 + 87, 5, 50);
        var w88 = new Wall(155, 72, 5, 50);
        var w89 = new Wall(254, 72, 5, 50);
        var w90 = new Wall(353, 72, 5, 50);
        var w91 = new Wall(450, 48, 5, 100);
        var w92 = new Wall(549, 72, 5, 50);
        var w93 = new Wall(597, 72, 5, 50);
        var w94 = new Wall(696, 93, 5, 90);
        var w95 = new Wall(842, 72, 6, 50);
        var w96 = new Wall(105, 117, 5, 50);
        var w97 = new Wall(105, 337, 5, 220);
        var w98 = new Wall(105, 574, 5, 90);
        var w99 = new Wall(105, 728, 5, 50);
        var w100 = new Wall(155, 160, 5, 45);
        var w101 = new Wall(155, 290, 5, 45);
        var w102 = new Wall(155, 378, 5, 50);
        var w103 = new Wall(155, 531, 5, 90);
        var w104 = new Wall(205, 225, 5, 90);
        var w105 = new Wall(205, 335, 5, 45);
        var w106 = new Wall(205, 445, 5, 90);
        var w107 = new Wall(205, 575, 5, 90);
        var w108 = new Wall(205, 727, 5, 45);
        var w109 = new Wall(254, 180, 5, 90);
        var w110 = new Wall(254, 290, 5, 50);
        var w111 = new Wall(254, 422, 5, 45);
        var w112 = new Wall(254, 510, 5, 45);
        var w113 = new Wall(254, 640, 5, 135);
        var w114 = new Wall(254, 770, 5, 50);
        var w115 = new Wall(303, 335, 5, 130);
        var w116 = new Wall(303, 465, 5, 45);
        var w117 = new Wall(303, 620, 5, 95);
        var w118 = new Wall(303, 727, 5, 45);
        var w119 = new Wall(353, 162, 5, 45);
        var w120 = new Wall(353, 252, 5, 40);
        var w121 = new Wall(353, 444, 5, 270);
        var w122 = new Wall(353, 660, 5, 93);
        var w123 = new Wall(400, 115, 5, 45);
        var w124 = new Wall(400, 290, 5, 50);
        var w125 = new Wall(400, 380, 5, 50);
        var w126 = new Wall(400, 555, 5, 135);
        var w127 = new Wall(400, 727, 5, 50);
        var w128 = new Wall(450, 225, 5, 90);
        var w129 = new Wall(450, 488, 5, 180);
        var w130 = new Wall(450, 640, 5, 45);
        var w131 = new Wall(500, 117, 5, 50);
        var w132 = new Wall(500, 315, 5, 90);
        var w133 = new Wall(500, 486, 5, 92);
        var w134 = new Wall(500, 706, 5, 90);
        var w135 = new Wall(548, 140, 5, 90);
        var w136 = new Wall(548, 270, 5, 90);
        var w137 = new Wall(548, 422, 5, 50);
        var w138 = new Wall(548, 552, 5, 50);
        var w139 = new Wall(548, 640, 5, 45);
        var w140 = new Wall(548, 728, 5, 47);
        var w141 = new Wall(597, 225, 5, 90);
        var w142 = new Wall(597, 380, 5, 50);
        var w143 = new Wall(597, 550, 5, 130);
        var w144 = new Wall(647, 115, 5, 45);
        var w145 = new Wall(647, 355, 5, 270);
        var w146 = new Wall(647, 770, 5, 50);
        var w147 = new Wall(696, 205, 5, 45);
        var w148 = new Wall(696, 380, 5, 135);
        var w149 = new Wall(696, 530, 5, 85);
        var w150 = new Wall(696, 750, 5, 95);
        var w151 = new Wall(745, 95, 5, 170);
        var w152 = new Wall(745, 245, 5, 50);
        var w153 = new Wall(745, 420, 5, 130);
        var w154 = new Wall(745, 755, 5, 100);
        var w155 = new Wall(794, 45, 5, 100);
        var w156 = new Wall(794, 315, 5, 265);
        var w157 = new Wall(794, 572, 5, 175);
        var w158 = new Wall(794, 729, 5, 45);
        var w159 = new Wall(842, 205, 5, 130);
        var w160 = new Wall(842, 380, 5, 135);
        var w161 = new Wall(842, 617, 5, 180);


        player1 = createSprite(230, 25, 50, 50);
        player1.addImage(playerR);
        player1.scale = 0.1;

        player2 = createSprite(620, 780, 50, 50);
        player2.addImage(playerB);
        player2.scale = 0.1;

        players = [player1, player2];
    }

    play() {

        form.hide();

        Player.getPlayerInfo();
        image(grass, 0, 0, 900, 800);

        var x = 300;
        var y = 300;
        var index = 0;

        drawSprites();

        for (var plr in allPlayers) {

            index = index + 1;

            x = allPlayers[plr].xPosition;
            y = allPlayers[plr].yPosition;

            players[index - 1].x = x;
            players[index - 1].y = y;

            xPosition = players[index - 1].x;
            yPosition = players[index - 1].y;

            textSize(20);
            fill("black");
            text(allPlayers.player1.name+ "  Life:" + allPlayers.player1.life, 750, 50);
            text(allPlayers.player2.name+ "  Life:" + allPlayers.player2.life, 750, 100);
            text(allPlayers.player1.name+ "  Bullet:" + allPlayers.player1.bullets, 750, 150);
            text(allPlayers.player2.name+ "  bullets " + allPlayers.player2.bullets, 750, 200);

            if (index === player.index) {
                fill("pink");
                ellipse(x,y,20,20);
                drawSprites();

                //camera.position.x = players[index-1].x;
                //camera.position.y = players[index-1].y;

            }

        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.xPosition += 1;
            player.yPosition += 0;
            if (player.index === 1) {
                if (wallGroup.isTouching(player1)) {
                    player.xPosition -= 10;
                }
            }
            if (player.index === 2) {
                if (wallGroup.isTouching(player2)) {
                    player.xPosition -= 10;
                }
            }
            player.update();
        }

        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.xPosition -= 1;
            player.yPosition += 0;

            if (player.index === 1) {
                if (wallGroup.isTouching(player1)) {
                    player.xPosition += 10;
                }
            }
            if (player.index === 2) {
                if (wallGroup.isTouching(player2)) {
                    player.xPosition += 10;
                }
            }
            player.update();
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.yPosition -= 1;
            player.xPosition += 0;

            if (player.index === 1) {
                if (wallGroup.isTouching(player1)) {
                    player.yPosition += 10;
                }
            }
            if (player.index === 2) {
                if (wallGroup.isTouching(player2)) {
                    player.yPosition += 10;
                }
            }
            player.update();
        }

        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.yPosition += 1;
            player.xPosition += 0;
            if (player.index === 1) {
                if (wallGroup.isTouching(player1)) {
                    player.yPosition -= 10;
                }
            }
            if (player.index === 2) {
                if (wallGroup.isTouching(player2)) {
                    player.yPosition -= 10;
                }
            }
            player.update();
        }

        if (player.index === 1) {
            if (keyIsDown(77) && player.index !== null && player.bullets>0) {
                bullet1 = createSprite(players[index - 2].x, players[index - 2].y, 10, 10);
                bullet1.velocityY = -9;
                bullet1.shapeColor = "red";
                bullet1group.add(bullet1);
                player.bullets--;
                player.update();

                
            }

            if (keyIsDown(78) && player.index !== null && player.bullets>0) {
                bullet2 = createSprite(players[index - 2].x, players[index - 2].y, 10, 10);
                bullet2.velocityY = 9;
                bullet2.shapeColor = "red";
                bullet1group.add(bullet2);
                player.bullets--;
                player.update();
                // if(bullet2.isTouching(wallGroup)){
                //     bullet2.destroy()
                // }
            }
            if (keyIsDown(79) && player.index !== null  && player.bullets>0) {
                bullet3 = createSprite(players[index - 2].x, players[index - 2].y, 10, 10);
                bullet3.velocityX = -9;
                bullet3.shapeColor = "red";
                bullet1group.add(bullet3);
                player.bullets--;
                player.update();
                // if(bullet3.isTouching(wallGroup)){
                //     bullet3.destroy()
                // }
            }
            if (keyIsDown(80) && player.index !== null && player.bullets>0) {
                bullet4 = createSprite(players[index - 2].x, players[index - 2].y, 10, 10);
                bullet4.velocityX = 9;
                bullet4.shapeColor = "red";
                bullet1group.add(bullet4);
                player.bullets--;
                player.update();
                // if(bullet4.isTouching(wallGroup)){
                //     bullet4.destroy()
                // }
            }

            for (var i = 0; i < bullet1group.length; i++) {
                if (bullet1group.get(i).isTouching(wallGroup)) {
                    bullet1group.get(i).destroy();

                    //player.score =player.score+1;
                    //player.update();
                    
                }
                else if (bullet1group.get(i).isTouching(player2)){
                  
                    gameState=2;
                    //players[0].life=0
                    //allPlayers.player2.life=0;
                   // allPlayers.player1.bullets=
                  // player.life--;
                    player.updatewithindex(2);
                    this.update(2)

                }
                
            }
        }

        if (player.index === 2) {
            if (keyIsDown(77) && player.index !== null && player.bullets>0) {
                bullet1 = createSprite(players[index - 1].x, players[index - 1].y, 10, 10);
                bullet1.velocityY = -9;
                bullet1.shapeColor = "red";
                bullet2group.add(bullet1);
                player.bullets--;
                player.update();
                // if(bullet1.isTouching(wallGroup)){
                //     bullet1.destroy()
                // }
            }

            if (keyIsDown(78) && player.index !== null && player.bullets>0) {
                bullet2 = createSprite(players[index - 1].x, players[index - 1].y, 10, 10);
                bullet2.velocityY = 9;
                bullet2.shapeColor = "red";
                bullet2group.add(bullet2);
                player.bullets--;
                player.update();
                // if(bullet2.isTouching(wallGroup)){
                //     bullet2.destroy()
                // }
            }
            if (keyIsDown(79) && player.index !== null && player.bullets>0) {
                bullet3 = createSprite(players[index - 1].x, players[index - 1].y, 10, 10);
                bullet3.velocityX = -9;
                bullet3.shapeColor = "red";
                bullet2group.add(bullet3);
                player.bullets--;
                player.update();
                // if(bullet3.isTouching(wallGroup)){
                //     bullet3.destroy()
                // }
            }
            if (keyIsDown(80) && player.index !== null && player.bullets>0) {
                bullet4 = createSprite(players[index - 1].x, players[index - 1].y, 10, 10);
                bullet4.velocityX = 9;
                bullet4.shapeColor = "red";
                bullet2group.add(bullet4);
                player.bullets--;
                player.update();
                // if(bullet4.isTouching(wallGroup)){
                //     bullet4.destroy()
                // }
            }

            for (var i = 0; i < bullet2group.length; i++) {
                if (bullet2group.get(i).isTouching(wallGroup)) {
                    bullet2group.get(i).destroy();
                    //player.score =player.score+1;
                    //player.update();
                    
                }
                else if (bullet2group.get(i).isTouching(player1)){
                    
                    gameState=2;
                   // player.life--;
                   // allPlayers.player1.life=0;
                   // allPlayers.player2.bullets=0
                    player.updatewithindex(1);
                    this.update(2);
                }
                
            }

        }
        


        
            
        

    }

    end() {

        background("green")
        textSize(40);
        strokeWeight(7)
        Player.getPlayerInfo();
        console.log("Game Ended");

        if(allPlayers.player2.life===0){
              text( allPlayers.player1.name + "   is winner ", 400, 700);
        }
        else if(allPlayers.player1.life===0){
            text(allPlayers.player2.name + "  is winner ", 400,700);  
        }

            fill("black");
            text(allPlayers.player1.name+ "  Life:" + allPlayers.player1.life, 400, 400);
            text(allPlayers.player2.name+ "  Life:" + allPlayers.player2.life, 400, 450);
            text(allPlayers.player1.name+ "  Bullet:" + allPlayers.player1.bullets, 400, 500);
            text(allPlayers.player2.name+ "  bullets " + allPlayers.player2.bullets, 400, 550);

            
        
  }
        
    
}