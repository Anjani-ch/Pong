class Player {
    x;
    y;
    width;
    height;
    color;
    position;
    ySpeed = 0;
    score = 0;
    
    constructor(x, y, width, height, color, position) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = position;
    }

    draw(gameElement, ctx, ball) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.update();
        this.detectHit(gameElement, ball);
    }

    update() {
        this.y += this.ySpeed;
    }

    move(dir) {
        const IS_UP_DIRECTION = dir === 'up';
        const IS_DOWN_DIRECTION = dir === 'down';

        if(IS_UP_DIRECTION) this.ySpeed = -1;
        if(IS_DOWN_DIRECTION) this.ySpeed = 1;
    }

    stop() {
        this.ySpeed = 0;
    }

    updateScore() {
        this.score++;
    }

    detectHit(gameElement, ball) {
        const hasHitTop = this.y <= 0;
        const hasHitBottom = this.y + this.height >= gameElement.height;

        const isWithinHeight = this.y <= ball.y && this.y + this.height >= ball.y + ball.radius;
        
        const IS_LEFT_POSITION = this.position === 'left';
        const IS_RIGHT_POSITION = this.position === 'right';

        let hasHitBall;

        if(hasHitTop) this.y = 0; // Stop player from going up
        if(hasHitBottom) this.y = gameElement.height - this.height; // Stop player from going down

        if(IS_LEFT_POSITION) hasHitBall = isWithinHeight && this.x + this.width >= ball.x;
        if(IS_RIGHT_POSITION) hasHitBall = isWithinHeight && this.x <= ball.x + ball.radius;

        if(hasHitBall) ball.changeDir(-1, 0);
    }
}

export default Player;