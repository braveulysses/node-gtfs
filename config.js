module.exports = {
    mongo_node_host: process.env.MONGOHQ_URL || 'localhost'
  , mongo_node_database: 'gtfs'
  , agencies: [
        'mta-new-york-city-transit'
      , 'mta-bus-company'
      , 'port-authority-of-new-york-new-jersey'
    ]
   , agencyUrls: {
   }
}
