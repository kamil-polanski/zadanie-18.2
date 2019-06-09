const movies = [{
        id: 1,
        title: `Harry Potter`,
        desc: `Film o czarodzieju`,
        src: `img/1.jpg`
    },
    {
        id: 2,
        title: `Król Lew`,
        desc: `Film o królu sawanny`,
        src: `img/2.jpg`
    },
    {
        id: 3,
        title: `India Jones: Ostatnia krucjata`,
        desc: `Film o poszukiwaniu arki przymierza`,
        src: `img/3.jpg`
    }
];
const movieEle = movies.map(function(ele) {
    return React.createElement(`li`, { key: ele.id },
        React.createElement(`h2`, {}, ele.title),
        React.createElement(`p`, {}, ele.desc),
        React.createElement(`img`, { src: ele.src })
    );
});

const element = React.createElement(`div`, {},
    React.createElement(`h1`, {}, `Lista fimów`),
    React.createElement(`ul`, {}, movieEle)
);

ReactDOM.render(element, document.getElementById(`app`));
