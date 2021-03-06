import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ResultItem from './ResultItem';

class Results extends Component {
  render() {
    return (
      <Container style={{ display: 'flex', flexDirection: 'row', minWidth: '90wv', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
          {this.props.booksArray.length > 0 && <h1>Books</h1>}
          {this.props.booksArray.map((book, idx) =>
            <ResultItem key={`${book.title}-${idx}`} item={book} onClick={this.props.saveBook} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center' }}>
          {this.props.moviesArray.length > 0 && <h1>Movies</h1>}
          {this.props.moviesArray.map((movie, idx) =>
            <ResultItem key={`${movie.title}-${idx}`} item={movie} onClick={this.props.saveMovie} />
          )}
        </div>
      </Container>
    )
  }
}

export default withAuth0(Results);