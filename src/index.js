import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import { Provider } from 'mobx-react';

import stores from './stores/ProductsStore';

ReactDOM.render(
  <Provider featured={stores.featured} products={stores} selectedProductColor={stores.selectedProductColor}>
		<AppRoutes />
	</Provider>,
  document.getElementById('root')
);
