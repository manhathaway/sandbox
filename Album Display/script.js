const albumList = {};

albumList['Fugazi'] = {};
albumList['Fugazi']['Repeater'] = {art: '/art/repeater.jpg', artist: 'Fugazi', album: 'Repeater', year: 1990};
albumList['Fugazi']['The Argument'] = {art: '/art/the_argument.jpg', artist: 'Fugazi', album: 'The Argument', year: 2001};

albumList['Deafheaven'] = {};
albumList['Deafheaven']['Sunbather'] = {art: '/art/sunbather.jpg', artist: 'Deafheaven', album: 'Sunbather', year: 2013};

albumList['Tennis'] = {};
albumList['Tennis']['Yours Conditionally'] = {art: '/art/yours_conditionally', artist: 'Tennis', album: 'Yours Conditionally'};

/* VARIOUS FAILURES
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
    }
}
*/

// Artist Grid
const div_grid = document.createElement('div');
    div_grid.setAttribute('id', 'grid-container');
    document.body.append(div_grid);

    // Artist Cell
    const div_artist_Fugazi = document.createElement('div');
        div_artist_Fugazi.setAttribute('id', 'Fugazi');
        div_artist_Fugazi.setAttribute('class', 'artist-grid-cell');
        div_grid.appendChild(div_artist_Fugazi);
            // Artist Heading
            const h2_artist_heading_Fugazi = document.createElement('h2');
                h2_artist_heading_Fugazi.setAttribute('class', 'artist-heading');
                h2_artist_heading_Fugazi.innerHTML = 'Fugazi';
                div_artist_Fugazi.appendChild(h2_artist_heading_Fugazi);
                    // Album Grid
                    const div_album_grid_container_Fugazi = document.createElement('div');
                        div_album_grid_container_Fugazi.setAttribute('class', 'album-grid-container');
                        div_artist_Fugazi.appendChild(div_album_grid_container_Fugazi);
                            // Album Cells
                            const div_album_Fugazi_Repeater = document.createElement('div');
                                div_album_Fugazi_Repeater.setAttribute('class', 'album-grid-cell');
                                div_album_grid_container_Fugazi.appendChild(div_album_Fugazi_Repeater);
                                    const h3_album_heading_Fugazi_Repeater = document.createElement('h3');
                                        h3_album_heading_Fugazi_Repeater.setAttribute('class', 'album-heading');
                                        h3_album_heading_Fugazi_Repeater.innerHTML = albumList['Fugazi']['Repeater'].album;
                                        div_album_Fugazi_Repeater.appendChild(h3_album_heading_Fugazi_Repeater);
                                    const img_album_Fugazi_Repeater_Cover = document.createElement('img');
                                        img_album_Fugazi_Repeater_Cover.setAttribute('class', 'album-cover')
                                        img_album_Fugazi_Repeater_Cover.setAttribute('src', albumList['Fugazi']['Repeater'].art);
                                        img_album_Fugazi_Repeater_Cover.setAttribute('alt', 'Fugazi - Repeater Cover Art');
                                        div_album_Fugazi_Repeater.appendChild(img_album_Fugazi_Repeater_Cover);
                            const div_album_Fugazi_theArgument = document.createElement('div');
                                div_album_Fugazi_theArgument.setAttribute('class', 'album-grid-cell');
                                div_album_Fugazi_theArgument.innerHTML = "The Argument";
                                div_album_grid_container_Fugazi.appendChild(div_album_Fugazi_theArgument);
    // Artist Cell
    const div_artist_Deafheaven = document.createElement('div');
        div_artist_Deafheaven.setAttribute('id', 'Deafheaven');
        div_artist_Deafheaven.setAttribute('class', 'artist-grid-cell');
        div_grid.appendChild(div_artist_Deafheaven);
            // Artist Heading
            const h2_artist_heading_Deafheaven = document.createElement('h2');
                h2_artist_heading_Deafheaven.setAttribute('class', 'artist-heading');
                h2_artist_heading_Deafheaven.innerHTML = 'Deafheaven';
                div_artist_Deafheaven.appendChild(h2_artist_heading_Deafheaven);
                    // Album Grid
                    const div_album_grid_container_Deafheaven = document.createElement('div');
                        div_album_grid_container_Deafheaven.setAttribute('class', 'album-grid-container');
                        div_artist_Deafheaven.appendChild(div_album_grid_container_Deafheaven);
                            // Album Cells
                            const div_album_Deafheaven_Sunbather = document.createElement('div');
                                div_album_Deafheaven_Sunbather.setAttribute('class', 'album-grid-cell');
                                div_album_Deafheaven_Sunbather.innerHTML = "Sunbather";
                                div_album_grid_container_Deafheaven.appendChild(div_album_Deafheaven_Sunbather);
    // Artist Cell
    const div_artist_Tennis = document.createElement('div');
        div_artist_Tennis.setAttribute('id', 'Tennis');
        div_artist_Tennis.setAttribute('class', 'artist-grid-cell');
        div_grid.appendChild(div_artist_Tennis);
            // Artist Heading
            const h2_artist_heading_Tennis = document.createElement('h2');
                h2_artist_heading_Tennis.setAttribute('class', 'artist-heading');
                h2_artist_heading_Tennis.innerHTML = 'Tennis';
                div_artist_Tennis.appendChild(h2_artist_heading_Tennis);
                    // Album Grid
                    const div_album_grid_container_Tennis = document.createElement('div');
                        div_album_grid_container_Tennis.setAttribute('class', 'album-grid-container');
                        div_artist_Tennis.appendChild(div_album_grid_container_Tennis);
                            // Album Cells
                            const div_album_Tennis_yoursConditionally = document.createElement('div');
                                div_album_Tennis_yoursConditionally.setAttribute('class', 'album-grid-cell');
                                div_album_Tennis_yoursConditionally.innerHTML = "Yours Conditionally";
                                div_album_grid_container_Tennis.appendChild(div_album_Tennis_yoursConditionally);

console.log(albumList['Fugazi']['Repeater'].art);