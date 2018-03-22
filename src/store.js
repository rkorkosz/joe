import Api from 'api';

class RootStore {
    constructor() {
        this.articleStore = new Api('article');
        this.pictureStore = new Api('picture');
    }
}

export default new RootStore();
