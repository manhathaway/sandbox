const albumList = {};

albumList['Fugazi'] = {};
albumList['Fugazi']['Repeater'] = {art: '/art/repeater.jpg', artist: 'Fugazi', album: 'Repeater', year: 1990};
albumList['Fugazi']['The Argument'] = {art: '/art/the_argument.jpg', artist: 'Fugazi', album: 'The Argument', year: 2001};

albumList['Deafheaven'] = {};
albumList['Deafheaven']['Sunbather'] = {art: '/art/sunbather.jpg', artist: 'Deafheaven', album: 'Sunbather', year: 2013};

albumList['Tennis'] = {};
albumList['Tennis']['Yours Conditionally'] = {art: '/art/yours_conditionally', artist: 'Tennis', album: 'Yours Conditionally'};

const artists = Object.keys(albumList);

let albums = [];
for (let i = 0; i < Object.keys(albumList).length; i++) {
    albums.push(Object.keys(albumList[Object.values(artists)[i]]));
}

for (let i = 0; i < artists.length; i++) {
    document.body.append(document.createElement('div'));
    const divs = document.getElementsByTagName('div');
    for (let j = 0; j < divs.length; j++) {
        divs[j].setAttribute('id', artists[j]);
    }
    if (albums[i].length < 2) {
        divs[i].appendChild(document.createElement('h2'));
        const h2 = document.getElementsByTagName('h2');
        for (let j = 0; j < h2.length; j++) {
            h2[j].setAttribute('class', 'album-title');
            h2[j].setAttribute('id', albums[j]);
            h2[j].innerHTML = albums[j];
        }
    } else {
        
    }
}