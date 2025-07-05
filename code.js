// Main game logic - conflict-free version
const canvas = window.canvas || document.getElementById("gameCanvas") || document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
canvas.id = 'gameCanvas';
if (!document.getElementById('gameCanvas')) {
    document.getElementById('game-container')?.appendChild(canvas);
}

const ctx = window.ctx || (canvas && canvas.getContext("2d"));

// Game state
const game = window.game || { running: false, objects: [] };

// Main game loop
function gameLoop() {
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update game objects
    game.objects.forEach(obj => {
        if (obj.update) obj.update();
        if (obj.draw) obj.draw(ctx);
    });
    
    // Continue loop
    if (game.running) {
        requestAnimationFrame(gameLoop);
    }
}

// Start game
game.running = true;
console.log('🎮 Game started!');
gameLoop();