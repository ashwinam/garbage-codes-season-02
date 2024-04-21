// 39. Dubstep

/*
Mike works as a DJ in the best London nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them. Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Mike inserts a certain number of words WUB before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighboring words), and then the boy glues together all the words, including WUB, in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as WUBWUBIWUBAMWUBWUBX and cannot transform into WUBWUBIAMWUBX.

Recently, Johnny has heard Mike's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Mike remixed. Help Johnny restore the original song.

Input: The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output: Return the words of the initial song that Mike used to make a dubsteb remix. Separate the words with a space.
*/

const songDecoder = song => {
    list_of_song = song.split("WUB")
    return list_of_song.filter(ele => ele).join(" ")
};

// Author Solution
/*
const songDecoder = song => {
  return song.replace(/(WUB)+/g, ' ').trim();

  // Alternative solution
  // return song.split('WUB').filter(Boolean).join(' ');
};
*/

console.log(songDecoder('AWUBBWUBC'));
// 'A B C' (WUB should be replaced by 1 space)
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
// 'A B C' (Multiples WUBs should be replaced by only 1 space)
console.log(songDecoder('WUBAWUBBWUBCWUB'));
// 'A B C' (Any starting or trailing WUBs should be removed)
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
// 'WE ARE THE CHAMPIONS MY FRIEND'