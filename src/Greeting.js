const Greeting = (props) => {
    console.log(props);
    return (
      <>
        <h2>Hello {props.name}...</h2>
        <h3>{props.name}'s favorite number plus 10 is {props.favoriteNumber + 10}</h3>
        {props.favoriteColors ?
            <h3>{props.name}'s favorite colors:</h3> :
            <h3>{props.name} doesn't have any favorite colors.</h3>}
        <ul>
            {props.favoriteColors && props.favoriteColors.map(x => <li>{x}</li>)}
        </ul>
      </>
    );
  };

export default Greeting;