const movies = [
	{
		id: 1,
		title: `Harry Potter`,
		desc: `film o czarodzieju`,
		image: `img/1.jpg`
	},
	{
		id: 2,
		title: `Król Lew`,
		desc: `Film o królu sawanny`,
		image: `img/2.jpg`
	},
	{
		id: 3,
		title: `Indiana Jones: Ostatnia krucjata`,
		desc: `Film o poszukiwaniu arki przymierza`,
		image: `img/3.jpg`
	}
];

const MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement(`h2`, {}, this.props.title)
		);
	}
})

const MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement(`p`, {}, this.props.desc)
		);
	}
})

const MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function () {
		return (
			React.createElement(`img`, { src: this.props.image })
		)
	}
})

const OneMovie = React.createClass({
	render: function () {
		return (
			React.createElement(`li`, {},
				React.createElement(MovieTitle, { title: this.props.movie.title }),
				React.createElement(MovieDesc, { desc: this.props.movie.desc }),
				React.createElement(MovieImage, { image: this.props.movie.image })
			)
		)
	},
})

const ListOf = movies.map(function(ele){
	return (
		React.createElement(OneMovie, {key: ele.id, movie:ele})
	)
})

const element = React.createElement(`div`, {},
	React.createElement(`h1`, {}, `Lista filmów`),
	React.createElement(`ul`, {}, ListOf)
);

ReactDOM.render(element, document.getElementById(`app`));

