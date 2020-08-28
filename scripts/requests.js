const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }
    else {
        throw new Error('Could not fetch data')
    }
}

// const getCountryName = async (countryCode) => {
//     const response = await fetch(`http://restcountries.eu/rest/v2/all`)
//         if(response.status === 200){
//             const data = await response.json()
//             return data.find((country) => {
//                 return country.alpha2Code === countryCode
//             })
//         }
//         else{
//             throw new Error('Unable to fetch data')
//         }
// }


// const getLocation = async () =>{
//     const response = await fetch(`http://ipinfo.io/json?token=878030e09f5e7f`)
//         if(response.status === 200){
//             const data = response.json()
//             return data
//         }
//         else{
//             throw new Error('Unable to fetch')
//         }
// }

// const getCurrentCountry = async () =>{
//     const location = await getLocation()
//     const country = await getCountryName(location.country)
//     return country

// }