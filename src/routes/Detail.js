import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, year, summary, genres, poster } = location.state;
      return (
        <div>
          <div className="detail__poster">
            <img src={poster}></img>
          </div>
          <h1 className="detail__title">{title}</h1>
          <h3 className="detail__year">{year}</h3>
          <ul className="detail__genres">
            {genres.map((genre, index) => (
              <li key={index} className="detail__genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <h5 className="detail__summary">{summary}</h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
