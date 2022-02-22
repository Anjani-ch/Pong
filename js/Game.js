class Game {
    gameElement;
    ctx;
    width;
    height;
    player1;
    player2;
    ball;

    constructor(gameElement, width, height, gameSpeed, player1, player2, ball) {
        this.gameElement = gameElement;
        this.ctx = gameElement.getContext('2d');
        this.width = width;
        this.height = height;
        this.gameSpeed = gameSpeed;
        this.player1 = player1;
        this.player2 = player2;
        this.ball = ball;
    }

    init() {
        this.gameElement.width = this.width;
        this.gameElement.height = this.height;

        this.update();
    }

    update() {
        setInterval(() => {
            const CENTER_LINE_WIDTH = 3;
            const CENTER_LINE_COLOR = 'white';

            const PLAYER_SCORE_OFFSET = 20;
            const PLAYER_SCORE_Y = 30;

            this.ctx.clearRect(0, 0, this.width, this.height);

            this.ctx.strokeStyle = CENTER_LINE_COLOR;

            // Draw center line
            this.ctx.beginPath();
            this.ctx.setLineDash([5, 10]);
            this.ctx.moveTo((this.gameElement.width / 2) - CENTER_LINE_WIDTH, 0);
            this.ctx.lineTo((this.gameElement.width / 2) - CENTER_LINE_WIDTH, this.gameElement.height);
            this.ctx.stroke();

            // Update ball
            this.ball.draw(this.gameElement, this.ctx, this.player1, this.player2);

            // Update players
            this.player1.draw(this.gameElement, this.ctx, this.ball);
            this.player2.draw(this.gameElement, this.ctx, this.ball);

            // Draw player scores
            this.ctx.font = '32px serif';

            this.ctx.fillText(this.player1.score, (this.gameElement.width / 2) - (PLAYER_SCORE_OFFSET * 2), PLAYER_SCORE_Y);
            this.ctx.fillText(this.player2.score, (this.gameElement.width / 2) + PLAYER_SCORE_OFFSET, PLAYER_SCORE_Y);
        }, this.gameSpeed);
    }
}

export default Game;