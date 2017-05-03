import { observable } from 'mobx';

class ProductStore {
	@observable products = [];
	@observable featured = {};
}

let store = new ProductStore();
export default store;