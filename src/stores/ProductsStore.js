import { observable, autorun } from 'mobx';

class ProductStore {
	@observable products = [];
}


let store = new ProductStore();
export default store;