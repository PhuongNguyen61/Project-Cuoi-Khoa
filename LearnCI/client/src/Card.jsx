import './Card.css';

const Card = (props) => {
    console.log(props.children);
    return (
        <div className="card" onClick={props.onClick}>
            {props.children}
            <div className="name">Name: {props.name}</div>
            <div className="age">Price: {Number(props.price).toLocaleString()}</div>
        </div>
    )
}

export default Card;