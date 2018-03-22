import React from 'react';
import { observer, inject } from 'mobx-react';
import Container from 'components/Container';

@inject('pictureStore')
@observer
class Picture extends React.Component {
    componentWillMount() {
        this.props.pictureStore.fetchItem(this.props.match.params.id)
    }
    render() {
        const { current } = this.props.pictureStore
        const comments = current.comments || []
        return (
            <Container>
                <h1>{current.title}</h1>
                <img alt={current.title} src={current.content_url} />
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

export default Picture;
