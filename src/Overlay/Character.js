const Character = (props) => {
    let character_icon = require(`./character_icons/${props.name.toLowerCase()}.png`);
    return (
      <div className="Character">
          <img src={character_icon.default} className="App-logo" alt="logo" />
          <p>{props.name}</p>
      </div>
    );
}

export default Character;