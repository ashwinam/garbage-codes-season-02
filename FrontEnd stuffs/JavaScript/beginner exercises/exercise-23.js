// Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

// All the movies in 2018 and rating > 4
// sort them by there rating 
// descending order
// pick their title

// 'a', 'b'

const filtered = movies.filter(value => value.year > 2017 && value.rating > 4);

const sorted = filtered.sort((a, b) => {
    if (a.rating < b.rating) return -1
    if (a.rating > b.rating) return 1
    return 0
}).reverse();

const titles = sorted.map(value => value.title);

