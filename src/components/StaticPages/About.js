import React from 'react';
import {Link} from 'react-router';

export default class AboutStaticPage extends React.Component {
	state = {
	};

	componentDidMount() {

	}

	render() {
		return (
			<div className="static-page about">
				<article>
					<div className="header">
						<h1>About Us</h1>
					</div>
					<p>
						The story of KanMer began in 2015 with an invitation to a friend's wedding. After carefully choosing our outfits, my husband and I searched to find accessories for the special and unique touch that would reflect our personalities.
					</p>
					<p>
						Both of us love uniquely designed details that reflect high-quality and combine classy men's fashion with fancy highlights. Not finding accessories that reflect our style and who we are, we started to think of the idea to bring our own creations to life! So the journey began with a handcrafted bowtie by me - KanMer
					</p>

					<h2>
						KanMer Style
					</h2>
					<p>
						Fashion is a statement, a story about ourselves. We each have our own unique style that tells our individual stories if we are willing to listen and we are!
					</p>

					<p className="italic">
						KanMer is a unique blend of rustic, elegant yet modern lines. It's timeless style reflects timeless values - strength, self confidence, courage, masculinity... Experience an old fashion the new way. Walk with courage, strength and confidence. Walk with KanMer.
					</p>
				</article>
			</div>
		);
	}
}
