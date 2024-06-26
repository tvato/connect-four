import { useState } from "react";
import GameLogic from "../GameLogic";
import gameField from "../game_field.png"
import EndDialog from "./EndDialog";

export default function GameField(){
    const [isEnd, setIsEnd] = useState(false);
    const [winner, setWinner] = useState("");
    const game = new GameLogic(setIsEnd, setWinner);
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
    
        ctx.clearRect(0, 0, c.width, c.height)
    }

    function newGame(){
        clearCanvas();
        setWinner("")
        setIsEnd(false)
        gameInitiated = true
        drawGameBoard()
    }

    return (
        <div>
            {isEnd ? <EndDialog onClick={newGame} style={styles.button} winner={winner} /> : <></>}
            <canvas id="gameArea" width="1200" height="700" style={isEnd ? {pointerEvents: "none"} : {} }></canvas>
            <div>
                <button onClick={drawGameBoard} style={styles.button}>Start game</button>
                <button onClick={clearCanvas} style={styles.button}>Clear</button>
            </div>
        </div>
    );
}

const styles = {
    button: {
        backgroundColor: "#3f51b5",
        color: "white",
        padding: "15px",
        borderRadius: "10%"
    }
}