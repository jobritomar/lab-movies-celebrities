const mongoose = require ("mongoose")
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }],
},
{
    timestamps: true
}
);

const movie = mongoose.model("Movie",movieSchema)

module.exports = movie
