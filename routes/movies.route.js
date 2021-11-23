const express = require('express');
const router = express.Router();

const Movie = require('/models/Movie.model');
const Celebrity = require('/models/Celebrity.model');


//LISTING OUR MOVIES

router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movies.find().Celebrity.populate('cast')
        res.render("/movies/movies", { movies })
    } catch (err) {
        console.log(`ERROR: ${err}`);
        next(err);
    }

});



// ADDING NEW CELEBRITIES -falta erro

router.get('movies/create', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find({});
        res.render('movies/new-movie', { celebrities });
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        next(error);
    }

});

router.post('movies/create', async (req, res, next) => {
    try {
        const movieData = req.body;
        await Movie.create(movieData);
        res.redirect("/movies")
    } catch (err) {
        res.render('movies/new-movie');
    }
});



// DETAILS PAGE

router.get("movies/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findbyId(id).populate('cast')
        res.render('movies/movie-details', {movie})
    } catch (err) {
        console.log(`ERROR: ${error.message}`);
        next(error);
    }

});

// DELETING MOVIES

router.post('movies/:id/delete', async (req, res, next) => {
    try {
        const { id } = req.params;
        await Movie.findbyIdandDelete(id)
        res.redirect("/movies")
    } catch (err) {
        console.log(`ERROR: ${error.message}`);
        next(error);
    }
});

// EDITING MOVIES

router.get('movies/:id/edit',async (req,res,next) => {
    try{
        const {id} = req.params;
        const movie = Movie.findbyId(id).populate("cast")
        const actors = await Celebrity.find()
        res.render('movie/edit-movie', {movie, actors:actors})
    }  catch (err) {
        console.log(`ERROR: ${error.message}`);
        next(error);

}

})



    module.exports = router;