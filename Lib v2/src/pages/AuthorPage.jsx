import React from 'react';
import AuthorBooks from './AuthorBooks';

const AuthorPage = ({ match, product }) => {
    const { authorId } = match.params;
    console.log(product)

    return (
        <div>
            <h1>Страница преподавателя</h1>
            <AuthorBooks authorId={authorId}/>
        </div>
    );
};

export default AuthorPage;
