const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('Hello there!');

    const getChords = async (chord) => {
      try {
        let response = await axios.get(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
        let chords = response.data;
        return chords;
      } catch (error) {
        console.error(error)
      }
    }

  let chordResults = await getChords('D');
  console.log('These are the D chords', chordResults);

  res.render('index', 
    { 
      title: 'Guitar Chord App',
      chords: chordResults
  });
});

module.exports = router;
