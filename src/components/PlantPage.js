import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [plantSearch, setPlantSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  let filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  })

  // best practice is to wrap and set a new state variable to the setter function and pass down to component
  const updateSearch = (searchInput) => {
    setPlantSearch(searchInput)
  }

  // will also need to wrap the new state for the setter function here along with the plants variable array along
  // with the new state variable that will be called and defined in the form component
  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      {/* remember to pass down new setter function variable here, and pass down the variable as well as you will 
      need to set a new value for the search to the state variable */}
      <Search updateSearch={updateSearch} plantSearch={plantSearch} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
