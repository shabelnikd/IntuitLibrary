import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ProductCard from "../components/UI/product-card/ProductCard";
import {Link} from "react-router-dom/dist";
import {Container} from "reactstrap";
import "../styles/avtors.css"

const AuthorBooks = ({product}) => {
  const { authorId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    axios
      .get(`https://libapi.intuit-journal.online/api/v1/accounts/info/${authorId}/`)
      .then((response) => {
        const filteredBooks = response.data.user_books
        setBooks(filteredBooks);
        setLoading(false);
        if (filteredBooks.length > 0) {
          setAuthorName(filteredBooks[0].author_account.name);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [authorId]);

  if (loading) {
    return <Container>
        <div className="loader">
            Идет загрузка подождите.....
        </div>
    </Container>;
  }

  return (
    <div>
      <Container>
        <Link to="/Static" className="avtors-link__prev">Назад</Link>
        {authorName && <h2>{authorName} ({books.length} книг)</h2>}
        <div className="product-list">
          {books.length > 0 ? (
            books.map((book) => <ProductCard key={book.id} product={book} />)
          ) : (
            <div>Нет доступных книг для этого преподавателя</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AuthorBooks;
