const Place = require("../models/Place");

module.exports = {
  addPlaces: async (req, res, next) => {
    const {
      country_id,
      description,
      imageUrl,
      location,
      title,
      rating,
      review,
      latitude,
      longitude,
      popular
    } = req.body;

    try {
      const newPlace = new Place({
        country_id,
        description,
        imageUrl,
        location,
        title,
        rating,
        review,
        latitude,
        longitude,
        popular 
      });

      await newPlace.save();
      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },

  getPlaces: async (req, res, next) => {
    const country_id = req.params.id;

    try {
      const places = await Place.find({}, { country_id });
      res.status(200).json({ places });
    } catch (error) {
      return next(error);
    }
  },

  getPlace: async (req, res, next) => {

    const placeİd = req.params.id;

    try {
     const places = await Place.findById(placeİd, { createdAt : 0, updatedAt: 0, __v: 0})
      res.status(200).json({ place });
    } catch (error) {
      return next(error);
    }
  }
};
