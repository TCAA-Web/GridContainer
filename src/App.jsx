import './App.css'
import { GridContainer } from './components/GridContainer/GridContainer'
import { GridItem } from './components/GridItem/GridItem'

function App() {

  return (
    <>
    <GridContainer columns={3} width={'100%'} alignLeft justifyLeft rows={1} gap={"20px"}>
      <GridItem height="30vh"><p>Item 1</p></GridItem>
      <GridItem height="30vh"><p>Item 2</p></GridItem>
      <GridItem height="30vh"><p>Item 3</p></GridItem>      
      <GridItem height="30vh"><p>Item 4</p></GridItem>      
      <GridItem height="30vh"><p>Item 5</p></GridItem>      
      <GridItem height="30vh"><p>Item 6</p></GridItem>      
      <GridItem height="30vh"><p>Item 7</p></GridItem>    
    </GridContainer>
  </>
  )
}

export default App
