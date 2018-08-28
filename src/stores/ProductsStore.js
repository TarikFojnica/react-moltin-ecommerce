import { observable, computed } from 'mobx';

class ProductStore {
	@observable products = [];

	@observable featured = {
		featuredObject : {
			featuredAcquired: false,
			featured_large : {
				value: '',
				data : {
					url : {
						http: '',
						https: ''
					}
				}
			},
			price : {
				value: ''
			}
		}
	};

	@observable selectedProductColor = ''
}

let store = new ProductStore();
export default store;