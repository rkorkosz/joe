import React from 'react';
import { observer, inject } from 'mobx-react';
import Container from 'components/Container';

@inject('articleStore')
@observer
class Article extends React.Component {
    componentWillMount() {
        this.props.articleStore.fetchItem(this.props.match.params.id)
    }
    render() {
        const { current } = this.props.articleStore
        const comments = current.comments || []
        return (
            <Container>
                <h1>{current.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: current.text }}></div>
                <div>{comments.map(comment => (
                    <div key={comment.id}>
                        <b>{comment.username}</b>
                        <p>{comment.text}</p>
                    </div>
                ))}</div>
            </Container>
        )
    }
}

export default Article;
