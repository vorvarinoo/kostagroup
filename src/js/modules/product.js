const products = document.querySelectorAll( '.product' );

products.forEach( ( elem ) => {
  const productBtnClose = elem.querySelector( '.product__close' );

  const addClass = () => {
    elem.classList.add( 'active' );
  };
  const removeClass = () => {
    elem.classList.remove( 'active' );
  };

  elem.addEventListener( 'click', () => {
    addClass();
  } );

  productBtnClose.addEventListener( 'click', () => {
    removeClass();

  } );

} );

export {
  products,
};
