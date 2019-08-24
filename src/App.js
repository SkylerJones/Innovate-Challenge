import React from 'react';
import './App.css';
import './style.css';

class SearchArea extends React.Component {
	 render() {
		  return (
				<div> Insert Search Stuff here </div>
		  );
	 }
}

function InterestedStar(props) {
	 var source = "notfavorite.png";
	 if (props.value.interested)
		  source = "favorite.png";
	 return (
		  <input type="image" alt="Click to show interest in school." class="favorite-star" onClick={props.onClick} src={source} />
	 );
}

class SchoolCard extends React.Component {

	 render() {
		  return (
				<table class="tg greedy-width">
					 <tr>
						  <th class="tg th" rowspan="2"><img alt="{this.props.name}" class="card-school-picture" src={this.props.picture} /></th>
						  <th class="tg th greedy-width">{this.props.name} <br /> {this.props.interestedCnt} Interested </th>
						  <th class="tg th favorite-star"><InterestedStar value={this.props} onClick={() => this.props.onClick(this.props)} /></th>
					 </tr>
					 <tr>
						  <td class="tg td" colspan="2">{this.props.description}</td>
					 </tr>
				</table>
		  );
	 }
}

class SearchResults extends React.Component {

	 constructor(props) {
		  super(props);
		  this.state = {
				schoolCards: props.schoolCards
		  };
	 }

	 onClick(cardId) {
		  const cards = this.state.schoolCards.slice();
		  var ids = cards.map(function (card) { return card.id; });
		  var idx = ids.indexOf(cardId);
		  cards[idx].isInterested = !cards[idx].isInterested;
		  this.setState({ cards: cards });
	 }

	 renderSchoolCard(card) {
		  return (
				<SchoolCard id={card.id}
					 picture={card.picture}
					 name={card.name}
					 description={card.description}
					 interested={card.isInterested}
					 interestedCnt={card.interestedCnt}
					 onClick={() => this.onClick(card.id)}
				/>
		  );
	 }

	 render() {
		  const schoolCards = this.state.schoolCards.map((card) =>
				<li>{this.renderSchoolCard(card)}</li>
		  );

		  return (
				<ul>{schoolCards}</ul>
		  );
	 }
}

class Details extends React.Component {
	 render() {
		  return (
				<div className="shopping-list">
					 Put stuff here
            </div>
		  );
	 }
}

function App() {
	 const seedData = [{id: 1, name: "Clarksburg High School", picture: "clarksburg.png", 
						description: "To Provide a blah blah blah", isInterested: true, interestCnt: 15},
					   {id: 2, name: "Montgomery Elementary School", picture: "montgomery.png", 
						description: "Home of the Mountain Lions", isInterested: false, interestCnt: 9},
					   {id: 3, name: "Lorem Ipsum Middle", picture: "lorem.png", 
						description: "Lorem Ipsum dolor sit amet, consectetur blah blah", isInterested: false, interestCnt: 0}];

	 return (

		  <div class="container">

				<div class="middle">

					 <div class="container">
						  <main class="content">
								<div id="search">

									 <SearchArea />

								</div>
								<div id="results">

									 <SearchResults schoolCards={seedData} />

								</div>
								<div id="details">

									 <Details />

								</div>
						  </main>
					 </div>

					 <aside class="right-sidebar" backgroundColor="blue">
						  rightsidebar.jpg
					  </aside>

					 <aside class="left-sidebar" backgroundColor="red">
						  leftsidebar.jpg
					 </aside>

				</div>
		  </div>
	 );
}

export default App;
