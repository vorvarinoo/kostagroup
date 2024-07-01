const products = document.querySelectorAll( '.product' );

products.forEach( ( elem ) => {
  const productBtnClose = elem.querySelector( '.product__close' );

  elem.addEventListener( 'click', () => {
    elem.classList.add( 'active' );
  } );

  productBtnClose.addEventListener( 'click', ( event ) => {
    event.stopPropagation();
    elem.classList.remove( 'active' );
  } );

} );

export {
  products,
};
