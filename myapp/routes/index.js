const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET index page. */
router.get('/', async function(req, res, next) {
  console.log('Index - Get chords');

    const getChords = async (chord) => {
      try {
        let response = await axios.get(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
        let chords = response.data;
        return chords;
      } catch (error) {
        console.error(error)
      }
    }

  let chordResults = await getChords('G');
  console.log('These are the D chords', chordResults);

  res.render('index', 
    { 
      title: 'Guitar Chord App',
      chords: chordResults
  });
});

router.get('/getChord/:chord',async function (req, res) {
  const chord = req.params.chord;
  // res.send('Get chord page');
  console.log('chord is ', chord);

  const getChords = async (chord) => {
    try {
      let response = await axios.get(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
      let chords = response.data;
      return chords;
    } catch (error) {
      console.error(error)
    }
  }

  let chordResults = await getChords(chord);
  console.log('These are the chords', chordResults);

  res.render('getChords', 
    { 
      title: 'Guitar Chord App',
      chords: chordResults
  });
});

router.get('/findLikeChords/', function (req, res) {
  console.log('Find like chords');

  res.render('findLikeChords', 
    { 
      title: 'Guitar Chord App'
  });
});

module.exports = router;
