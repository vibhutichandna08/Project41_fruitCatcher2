class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(displayWidth / 2 - 275, displayHeight / 2 - 475);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.title.style('font-family', 'comic sans ms');
        this.title.style('font-weight', 'bold');
        this.input.position(550, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightpink');
        this.input.style('font-family', 'comic sans ms');
        this.input.style('font-size', '16px');
        this.input.style('font-weight', 'bold');
        //this.input.style('font-variant', 'small-caps');
        this.button.position(560, 500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.button.style('font-family', 'comic sans ms');
        this.button.style('font-size', '20px');
        this.button.style('font-weight', 'bold');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-family', 'comic sans ms');
        this.reset.style('font-weight', 'bold');
        this.reset.style('font-size', '15px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello, " + player.name)
            this.greeting.position(displayWidth / 2 - 275, 250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-family', 'comic sans ms');
            this.greeting.style('font-weight', 'bold');
            this.greeting.style('font-size', '80px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}