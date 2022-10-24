function TextBubble(props) {
    return (
        <div className="bubble">
            <p><span>What We Need:</span> {props.need}</p>
            <p><span>What We Need:</span> {props.get}</p>
        </div>
    )
}

export default TextBubble
