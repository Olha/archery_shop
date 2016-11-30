import React from 'react';
import MainHeader from '../components/MainHeader.jsx';
import MainFooter from '../components/MainFooter.jsx';
import BrandSlider from '../components/BrandSlider.jsx';
import ProductsMainPageFilter from '../components/ProductsMainPageFilter.jsx';
import NewArrivalBlock from '../components/NewArrivalBlock.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Message from '../components/Message.jsx';

export default class MainPage extends React.Component {
  render() {
    const { isExistPage, loading, products, brands } = this.props;
    if (!isExistPage) {
      return <NotFoundPage />;
    }
    return (
      <div id="page-wrapper">
        <MainHeader />
        { loading ? <Message title="Loading..." /> :
          <section id="content">
            <div className="container">
              <div id="main">
                <NewArrivalBlock />
                <ProductsMainPageFilter products={products} />
                <BrandSlider brands={brands} />
              </div>
            </div>
          </section>
        }
        <footer id="footer" className="style4">
          <MainFooter />
        </footer>
      </div>
    );
  }
}

MainPage.propTypes = {
  isExistPage: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  products: React.PropTypes.array,
  brands: React.PropTypes.array,
};
