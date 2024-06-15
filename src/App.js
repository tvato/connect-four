import gameField from "./game_field.png"
import GameLogic from "./GameLogic";

export default function App(){
    const game = new GameLogic();
    var gameInitiated = false

    function drawGameBoard(){
        const ctx = document.getElementById("gameArea").getContext("2d")
        
        if(!gameInitiated){
            document.getElementById("gameArea").addEventListener("mousedown", function (e){
                handleClick(this, e, game);
            })
            gameInitiated = true
        }

        const img = new Image();
        img.onload = function (){
            ctx.drawImage(img,0,0);
        }
        img.src = gameField

        ctx.font = "30px Arial"
        ctx.fillStyle = "black"
        ctx.fillText("Player 1", 50, 50)
        ctx.fillText("Player 2", 1000, 50)

        ctx.beginPath()
        ctx.arc(100, 100, 35, 0, 2 * Math.PI)
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.strokeStyle = "red"

        ctx.beginPath()
        ctx.arc(1050, 100, 35, 0, 2 * Math.PI)
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.strokeStyle = "blue"

        ctx.stroke()

        game.checkTurn()
    }

    function handleClick(canvas, event){
        var rect = canvas.getBoundingClientRect()
        var x = event.clientX - rect.left
        game.checkTurn();
        game.checkState(x);
    }

    function clearCanvas(){
        const c = document.getElementById("gameArea")
        const ctx = c.getContext("2d")
    
        game.clearGame()
        ctx.clearRect(0, 0, c.width, c.height)
    }

    return (
        <div className="App" style={styles.main}>
            <h1>Welcome!</h1>
            <canvas id="gameArea" width="1200" height="700" style={{border: "1px solid black"}}></canvas>
            <div>
                <button onClick={drawGameBoard}>Start game</button>
                <button onClick={clearCanvas}>Clear</button>
            </div>
        </div>
    );
}

const styles = {
    main: {
        textAlign: "center",
    },
}