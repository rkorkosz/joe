import { observable, action } from 'mobx';
import axios from 'axios';

class Api {
    constructor(object) {
        this.object = object
    }
    api_url = "http://192.168.0.102:8080/joe/api_v1/";
    limit = 20;
    offset = 0;
    offsetChanged = false;
    @observable isFetching = false;
    @observable items = [];
    @observable current = {};
    @action fetch() {
        if (!this.shouldFetch()) return
        this.isFetching = true
        axios.get(`${this.api_url}${this.object}s`, {
            params: {
                limit: this.limit,
                offset: this.offset
            }
        })
            .then(this.update)
            .catch(console.error)
    }
    @action.bound
    update(response) {
        this.items = this.items.concat(response.data[this.object+'s'])
        this.isFetching = false
    }
    @action fetchItem(id) {
        if(this.items.length > 0) {
            this.current = this.items.find(item => item.id === parseInt(id, 10))
            return
        }
        axios.get(`${this.api_url}${this.object}/${id}`)
            .then(this.setCurrent)
            .catch(console.error)
    }
    @action.bound setCurrent(resp) {
        this.current = resp.data[this.object][0]
    }
    shouldFetch() {
        if (this.items.length === 0) {
            return true
        } else if(this.isFetching) {
            return false
        } else if(this.offsetChanged) {
            this.offsetChaged = false
            return true
        }
    }
    @action loadMore() {
        this.offset = this.offset + this.limit;
        this.offsetChanged = true;
        this.fetch();
    }
}
export default Api;
