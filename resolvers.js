module.exports = {
    Query: {
        getWells: async (_, __, { Well }) => {
            // console.log(dataSources)
            await Well.find({})
        }
    }
}