

export default function Die(props) {

    const styles = {
                        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
               <div className="die-face" style={styles} onClick={props.holdDice}>
                        
                        <img className="die-num" src={props.value} alt="some name" />
                        
               </div> 
    )
}