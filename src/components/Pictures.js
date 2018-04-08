import React from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Grid from 'components/Grid';
import LoadMore from 'components/LoadMore';

@inject('pictureStore')
@observer
class Pictures extends React.Component {
    componentWillMount() {
        this.props.pictureStore.fetch()
    }
    loadMore() {
        this.props.pictureStore.loadMore()
    }
    render() {
        const pictures = this.props.pictureStore.items;
        return (
            <div>
                <Grid>
                    {pictures.map(pic => (
                        <Link to={`/pictures/${pic.id}`} key={pic.id}>
                            <img alt={pic.title} src={pic.big_thumb_url} />
                        </Link>
                    ))}
                </Grid>
                <LoadMore onClick={this.loadMore.bind(this)}>Load more</LoadMore>
            </div>
        )
    }
}

export default Pictures;
