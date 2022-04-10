import './App.css';
import Cat from './data/cat';
import Dog from './data/dog';
import { useState, FormEvent } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import catData from './data/catData';
import dogData from './data/dog-data';
import { v4 as uuidv4 } from "uuid";

interface Card {
	name: string;
	species: string;
	favFoods: Array<string>;
	birthYear: number;
}

function App() {
	// JavaScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);
	const [ name, setName ] = useState<string>('');
	const [ species, setSpecies ] = useState<string>('');
	const [ favFoods, setFavFoods ] = useState<Array<string>>([]);
	const [ favFood, setFavFood ] = useState<string>('');
	const [ birthYear, setBirthYear ] = useState<number>(2020);

	const catCount = cats.length;
	const dogCount = dogs.length;

	const resetForm = () => {
		setName('');
		setSpecies('');
		setFavFoods([]);
		setFavFood('');
	}
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const id = uuidv4()
		const card = { id, name, species, favFoods, birthYear }
		setCats([...cats, card])
		resetForm();
	}
	
	return (
		<>
			<Navbar />
			<Header 
				catCount={catCount} 
				dogCount={dogCount}
			/>

			<main>
				<div className='cards__wrapper'>{
						cats.map((cat, index) => 
						<Card 
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							index={index}
						/>)
				}{
					dogs.map((dog, index) => 
						<Card 
							key={dog.id}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							index={index}
						/>)
				}</div>
			</main>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>
						<p>Name:</p>
						<input 
							type='text' 
							name='name' 
							value={name}
							onChange={(e => setName(e.target.value))}
						/>
					</label>
				</fieldset>
				<fieldset>
					<label>
						<p>Species:</p>
						<input 
							type='text' 
							name='species' 
							value={species}
							onChange={(e => setSpecies(e.target.value))}
						/>
					</label>
				</fieldset>
				<fieldset>
					<label>
						<p>Favourite Food(s):</p>
						<input 
							type='text' 
							name='favFoods' 
							value={favFood}
							onChange={(e => {
								setFavFood(e.target.value)
								setFavFoods([e.target.value])
							})}
						/>
					</label>
				</fieldset>
				<fieldset>
					<label>
						<p>Birth Year:</p>
						<input 
							type='number' 
							name='birthYear' 
							value={birthYear}
							onChange={(e => setBirthYear(Number(e.target.value)))}
						/>
					</label>
				</fieldset>
				<input type="submit" value="Submit" />
			</form>
			<Footer />
		</>
	);
}

export default App;
