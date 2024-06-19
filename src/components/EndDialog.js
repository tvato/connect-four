

export default function EndDialog(props){

    return (
        <div style={styles.main}>
            <h1>{props.winner} WON!</h1>
            <button onClick={props.onClick} style={props.style}>New Game</button>
        </div>
    );
}

const styles = {
    main: {
        backgroundColor: "white",
        border: "solid",
        borderWidth: "1%",
        top: "50%",
        left: "50%",
        position: "fixed",
        padding: "5%",
        marginTop: "-15%",
        marginLeft: "-10.5%",
    }
}