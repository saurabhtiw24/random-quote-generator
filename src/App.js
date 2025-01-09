import React, { useEffect, useState } from 'react';
import { random } from 'lodash';
// import './App.css';
import Grid2 from '@mui/material/Grid2';
import withStyles from '@mui/styles/withStyles';
import QuoteMachine from './components/QuoteMachine';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: 'pink',
    height: '100vh'
  }
};

function App({ classes }) {
  // state declaration
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);


// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       quotes: [],
//       selectedQuoteIndex: null
//     }

  //   this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  //   this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  // }


  // Hooks
  useEffect(() => {
    async function fetchData() {
    const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const quotes = await data.json();
    setQuotes(quotes);
    setSelectedQuoteIndex(random(0, quotes.length - 1));
  }
  fetchData();
 }, []);


  // componentDidMount() {
  //   fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  //   .then(data => data.json())
  //   .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  // }


  function getSelectedQuote() {
    if(!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }



  // get selectedQuote(){
  //   if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
  //     return undefined;
  //   }
  //   return this.state.quotes[this.state.selectedQuoteIndex];
  // }
  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, returns undefined
   */

  function generateNewQuoteIndex() {
    if(!quotes.length){
      return undefined;
    }
    return random(0, quotes.length - 1);
  }
  // generateNewQuoteIndex() {
  //   if(!this.state.quotes.length){
  //     return;
  //   }
  //   return random(0, this.state.quotes.length - 1);
  // }


  function assignNewQuoteIndex() {
    setSelectedQuoteIndex(generateNewQuoteIndex());
  }


  // assignNewQuoteIndex(){
  //   this.setState({
  //     selectedQuoteIndex: this.generateNewQuoteIndex()
  //   })
  // }

    return (
      <Grid2 className={classes.container} container>
        <Grid2 id="quote-box" size={{ xs:12, lg:4 }}>
          { 
            getSelectedQuote() ?
            <QuoteMachine selectedQuote={getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex} />
            : null
          }
        </Grid2>
      </Grid2>
    );
  }

export default withStyles(styles)(App);
