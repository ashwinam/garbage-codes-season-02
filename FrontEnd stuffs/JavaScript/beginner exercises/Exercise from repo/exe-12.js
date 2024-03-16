// 12. Who likes it?

/*
You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. We want to create the text that should be displayed next to such an item.

Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.
*/

const likes = names => {
    if (!names.length) return 'no one likes it';

    if (names.length >= 4) return names[0] + ',' + names[1] + ` and ${names.length - 2} others likes this`

    return names.join() + ' likes this.'
};

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'