import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Container from 'components/Container'

@inject('pictureStore')
@observer
class Picture extends React.Component {
    componentWillMount() {
        this.store = this.props.pictureStore
        this.store.fetchItem(this.props.match.params.id)
    }
    goToNext() {
        const { nextId } = this.store
        this.store.fetchItem(nextId)
    }
    render() {
        const { current } = this.store
        const comments = current.comments || []
        return (
            <Container>
                <h1>{current.title}</h1>
                <img onClick={this.goToNext.bind(this)} alt={current.title} src={current.content_url} />
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
