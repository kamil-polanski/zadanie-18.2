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

const MovieTitle = React.createClass({
    render: function() {
        return (
            React.createElement(`h2`, {}, this.props.title)
        );
    },
    propTypes: {
        title: React.PropTypes.string.isRequired,
    }
})


const MovieDesc = React.createClass({
    render: function() {
        return (
            React.createElement(`p`, {}, this.props.desc)
        );
    },
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
})

const MovieImage = React.createClass({
    render: function() {
        return (
            React.createElement(`img`, { src: this.props.src })
        )
    },
    propTypes: {
        src: React.PropTypes.string.isRequired,
    }
})

const OneMovie = React.createClass({
    render: function() {
        return (
            React.createElement(`li`, {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesc, { desc: this.props.movie.desc }),
                React.createElement(MovieImage, { src: this.props.movie.src })
            )
        )
    },
})

const ListOf = movies.map(function(ele) {
    return (
        React.createElement(OneMovie, { key: ele.id, movie: ele })
    )
})

const element = React.createElement(`div`, {},
    React.createElement(`h1`, {}, `Lista filmów`),
    React.createElement(`ul`, {}, ListOf)
);

ReactDOM.render(element, document.getElementById(`app`));