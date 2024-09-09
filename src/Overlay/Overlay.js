import './Overlay.css'
import Character from './Character.js'

const characters = ['Sig', 'Adrie', 'Daerg', 'Maeve']

const Overlay = () => {
  return (
    <div className="twitch-overlay">
      {characters.map(char => <Character key={characters.indexOf(char)} name={char} />)}
    </div>
  )
}

export default Overlay