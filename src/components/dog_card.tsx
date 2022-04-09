import Dog from '../data/dog'

const DogCard: React.FC<Dog> = ({ name, species, favFoods, birthYear }) => {
  return(
    <div className='card'>
      <h3 className='card__text card__header'>{name}</h3>
      <p className='card__text'>Species: {species}</p>
      <p className='card__text'>Favourite Food(s): {favFoods}</p>
      <p className='card__text'>Birth Year:{birthYear}</p>
    </div>
  )
}

export default DogCard;