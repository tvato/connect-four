import GameField from "./components/GameField";

export default function App(){
    
    return (
        <div className="App" style={styles.main}>
            <h1>Connect Four</h1>
            <GameField />
        </div>
    );
}

const styles = {
    main: {
        textAlign: "center",
    },
}