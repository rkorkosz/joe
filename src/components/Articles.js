import React from 'react';
import { observer, inject } from 'mobx-react';
import Card from 'components/Card';
import Grid from 'components/Grid';
import LoadMore from 'components/LoadMore';

@inject('articleStore')
@observer
class Articles extends React.Component {
    componentWillMount() {
        this.props.articleStore.fetch()
    }
    loadMore() {
        this.props.articleStore.loadMore()
    }
    render() {
        const articles = this.props.articleStore.items;
        return (
            <div>
                <Grid>
                    {articles.map((article, i) => (
                        <Card
                            key={article.id}
                            to={`/articles/${article.id}`}
                            img={article.cover.image.xl.url}
                            content={article.title} />
                    ))}
                </Grid>
                <LoadMore onClick={this.loadMore.bind(this)}>Load more</LoadMore>
            </div>
        )
    }
}

export default Articles;
