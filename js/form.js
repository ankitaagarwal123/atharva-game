class Form{
    constructor(){
       this.input = createInput('Enter Your Name');
       this.button = createButton('Click To   Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.extra = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.extra.hide();
    }
    display() {
        this.title.html("FPS - FIRST PERSON SHOOTER");
        this.title.position(150, 150);
        this.title.style('font-size', '40px');
        this.title.style('color', 'skyBlue');
        
        this.input.position(350,400);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'lightGreen');

        this.button.position(400,500);
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(900, 0);
        this.reset.style('width', '80px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(300,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '40px');

            this.extra.html("Wating for other players to join....");
            this.extra.position(300,400);
            this.extra.style('color', 'lightGreen');
            this.extra.style('font-size', '30px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}