import { observable, autorun } from 'mobx';

class ProductStore {
	@observable products = [];
	@observable currentProduct = {};
}


let store = new ProductStore();
export default store;