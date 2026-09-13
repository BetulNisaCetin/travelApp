const Country = require("../models/Country");

module.exports = {
    addCountry: async (req, res, next) => {
        const { country, description, imageUrl, region, popular} = req.body;

        try{

            const newCountry = new Country({
                country,
                description,
                imageUrl,
                region,
                popular,
            });

            await newCountry.save();
            res.status(201).json({status: true})

        }catch(err){
            return next(err);
        }

    },

    addPlacesToCountry: async (req, res, next) => {
        
    },
    getCountries: async (req, res, next) => {
        
        try{

            const countries = await Country.find({}, {country: 1, _id: 1, imageUrl: 1})
            res.status(200).json({countries})

        }catch(err){
            return next(err);
        }
    },
    getCountry: async (req, res, next) => {
        
    }
}