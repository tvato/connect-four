export default class GameLogic{
    constructor(){
        this.stacks = [0,0,0,0,0,0,0]
        this.isRed = true

        // For tracking game state and checking winning lines
        this.gameState = [[0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0]]

        // Coordinates for the draw areas
        this.coordinates = [[{x: 355, y: 600},{x: 435, y: 600},{x: 515, y: 600},{x: 595, y: 600},{x: 675, y: 600},{x: 755, y: 600},{x: 835, y: 600}],
                            [{x: 355, y: 520},{x: 435, y: 520},{x: 515, y: 520},{x: 595, y: 520},{x: 675, y: 520},{x: 755, y: 520},{x: 835, y: 520}],
                            [{x: 355, y: 440},{x: 435, y: 440},{x: 515, y: 440},{x: 595, y: 440},{x: 675, y: 440},{x: 755, y: 440},{x: 835, y: 440}],
                            [{x: 355, y: 360},{x: 435, y: 360},{x: 515, y: 360},{x: 595, y: 360},{x: 675, y: 360},{x: 755, y: 360},{x: 835, y: 360}],
                            [{x: 355, y: 280},{x: 435, y: 280},{x: 515, y: 280},{x: 595, y: 280},{x: 675, y: 280},{x: 755, y: 280},{x: 835, y: 280}],
                            [{x: 355, y: 200},{x: 435, y: 200},{x: 515, y: 200},{x: 595, y: 200},{x: 675, y: 200},{x: 755, y: 200},{x: 835, y: 200}]]
    }

    checkState(x){
        // From left to right:
        // 355, 435, 518, 595, 680, 766, 841
        // Play area range: 300 - 900
        /* Range:
            1. 320 - 390
            2. 400 - 470
            3. 480 - 550
            4. 560 - 630
            5. 640 - 710
            6. 720 - 790
            7. 800 - 870
        */
        var lastTurn = 0
        switch(true){
            case x >= 320 && x <= 390 && this.stacks[0] <= 5:
                this.isRed ? this.drawRed(355, 600 - (this.stacks[0] * 80)) : this.drawBlue(355, 600 - (this.stacks[0] * 80))
                this.gameState[this.stacks[0]][0] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[0] = this.stacks[0] + 1
                this.isRed = !this.isRed
                break;
            case x >= 400 && x <= 470 && this.stacks[1] <= 5:
                this.isRed ? this.drawRed(435, 600 - (this.stacks[1] * 80)) : this.drawBlue(435, 600 - (this.stacks[1] * 80))
                this.gameState[this.stacks[1]][1] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[1] = this.stacks[1] + 1
                this.isRed = !this.isRed
                break;
            case x >= 480 && x <= 550 && this.stacks[2] <= 5:
                this.isRed ? this.drawRed(515, 600 - (this.stacks[2] * 80)) : this.drawBlue(515, 600 - (this.stacks[2] * 80))
                this.gameState[this.stacks[2]][2] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[2] = this.stacks[2] + 1
                this.isRed = !this.isRed
                break;
            case x >= 560 && x <= 630 && this.stacks[3] <= 5:
                this.isRed ? this.drawRed(595, 600 - (this.stacks[3] * 80)) : this.drawBlue(595, 600 - (this.stacks[3] * 80))
                this.gameState[this.stacks[3]][3] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[3] = this.stacks[3] + 1
                this.isRed = !this.isRed
                break;
            case x >= 640 && x <= 710 && this.stacks[4] <= 5:
                this.isRed ? this.drawRed(675, 600 - (this.stacks[4] * 80)) : this.drawBlue(675, 600 - (this.stacks[4] * 80))
                this.gameState[this.stacks[4]][4] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[4] = this.stacks[4] + 1
                this.isRed = !this.isRed
                break;
            case x >= 720 && x <= 790 && this.stacks[5] <= 5:
                this.isRed ? this.drawRed(755, 600 - (this.stacks[5] * 80)) : this.drawBlue(755, 600 - (this.stacks[5] * 80))
                this.gameState[this.stacks[5]][5] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[5] = this.stacks[5] + 1
                this.isRed = !this.isRed
                break;
            case x >= 800 && x <= 870 && this.stacks[6] <= 5:
                this.isRed ? this.drawRed(835, 600 - (this.stacks[6] * 80)) : this.drawBlue(835, 600 - (this.stacks[6] * 80))
                this.gameState[this.stacks[6]][6] = this.isRed ? 1 : 2;
                lastTurn = this.isRed ? 1 : 2;
                this.stacks[6] = this.stacks[6] + 1
                this.isRed = !this.isRed
                break;
            default:
                lastTurn = 0;
                console.log("Click on the game board!");
                break;
        }
        this.checkTurn()
        if(this.isWin(lastTurn)){
            this.clearGame();
        }

        if(this.stacks.reduce((a,b) => a + b, 0) >= 42){
            this.gameTied();
        }
        
    }

    gameTied(){
        const ctx = document.getElementById("gameArea").getContext("2d")

        ctx.clearRect(450, 0, 300, 100)

        ctx.font = "30px Arial"
        ctx.fillStyle = "black"
        ctx.fillText("TIE!", 570, 50)
    }

    drawRed(x, y){
        const ctx = document.getElementById("gameArea").getContext("2d")
    
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.arc(x, y, 35.5, 0, 2 * Math.PI)
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
    }
    
    drawBlue(x, y){
        const ctx = document.getElementById("gameArea").getContext("2d")
    
        // Upper left corner coordinates (355, 200)
        // Move 80

        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.arc(x, y, 35.5, 0, 2 * Math.PI)
        ctx.fillStyle = "blue"
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
    }

    clearGame(){
        this.stacks = [0,0,0,0,0,0,0]
        this.isRed = true
        this.gameState = [[0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0]]
    }

    checkTurn(){
        const ctx = document.getElementById("gameArea").getContext("2d")

        ctx.clearRect(450, 0, 300, 100)

        ctx.font = "30px Arial"
        ctx.fillStyle = "black"
        this.isRed ? ctx.fillText("Player 1's turn", 500, 50) : ctx.fillText("Player 2's turn", 500, 50)
    }

    drawWinLine(start,end, lastTurn){
        const ctx = document.getElementById("gameArea").getContext("2d")

        console.log("start:", start)
        console.log("end:", end)

        ctx.beginPath();
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.lineWidth = 5.0
        ctx.stroke()

        ctx.clearRect(450, 0, 300, 100)

        ctx.font = "30px Arial"
        ctx.fillStyle = "black"
        lastTurn === 1 ? ctx.fillText("Player 1 WON!", 500, 50) : ctx.fillText("Player 2 WON!", 500, 50)
    }

    isWin(latestTurn){
        if(latestTurn === 0) return false;

        // Horizontal check
        for(var i=0; i < this.gameState.length; i++){
            for(var j=0; j < this.gameState[i].length-3; j++){
                if(this.gameState[i][j] === latestTurn && this.gameState[i][j+1] === latestTurn && this.gameState[i][j+2] === latestTurn && this.gameState[i][j+3] === latestTurn){
                    this.drawWinLine(this.coordinates[i][j], this.coordinates[i][j+3], latestTurn)
                    return true
                }
            }
        }

        // Vertical check
        for(var i=0; i < this.gameState.length-3; i++){
            for(var j=0; j < this.gameState[i].length; j++){
                if(this.gameState[i][j] === latestTurn && this.gameState[i+1][j] === latestTurn && this.gameState[i+2][j] === latestTurn && this.gameState[i+3][j] === latestTurn){
                    this.drawWinLine(this.coordinates[i][j], this.coordinates[i+3][j], latestTurn)
                    return true
                }
            }
        }

        // Diagonal check
        for(var i=0; i < this.gameState.length-3; i++){
            for(var j=3; j < this.gameState[i].length; j++){
                if(this.gameState[i][j] === latestTurn && this.gameState[i+1][j-1] === latestTurn && this.gameState[i+2][j-2] === latestTurn && this.gameState[i+3][j-3] === latestTurn){
                    this.drawWinLine(this.coordinates[i][j], this.coordinates[i+3][j-3], latestTurn)
                    return true
                }
            }
        }

        // Diagonal check
        for(var i=3; i < this.gameState.length; i++){
            for(var j=3; j < this.gameState[i].length; j++){
                if(this.gameState[i][j] === latestTurn && this.gameState[i-1][j-1] === latestTurn && this.gameState[i-2][j-2] === latestTurn && this.gameState[i-3][j-3] === latestTurn){
                    this.drawWinLine(this.coordinates[i][j], this.coordinates[i-3][j-3], latestTurn)
                    return true
                }
            }
        }
        return false
    }
}