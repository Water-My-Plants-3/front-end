import React, { useState, useEffect } from 'react'

const [plants, setPlants] = useState({
    id: Number,
    nickname: "",
    species: "",
    h2oFrequency: "",
})


// put request will be 