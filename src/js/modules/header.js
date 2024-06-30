import {
  isEscKey,
  breakpointChecker
} from './utils.js';

import {
  observerConfig,
}
from './configs.js';

// const headerModal = document.querySelector( '.header-modal' )

// export const burger = new JustBurger( {
//   activeClass: 'is-expanded',
//   isOpen: () => {
//     headerModal.setAttribute( 'aria-hidden', 'false' )
//   },
//   isClose: () => {
//     headerModal.setAttribute( 'aria-hidden', 'true' )
//   },
// } );

const resetOffsetTop = ( node ) => {
  if ( !node ) return;
  document.documentElement.style.setProperty( '--offset-top', `${node.offsetHeight - 1}px` );
};

const initStickyHeader = ( node, target ) => {
  if ( !node || !target ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( !entry.isIntersecting ) {
        node.classList.add( 'is-sticky' );
      } else {
        node.classList.remove( 'is-sticky' );
      }
    } );
  };

  new IntersectionObserver( cb, observerConfig.header ).observe( target );
};



export const initHeaderMenu = () => {

  const contentNode = document.querySelector( '.site__content' );
  const headerTopNode = document.querySelector( '.site__header' );
  const headerNode = document.querySelector( '.header' );

  const modalNode = document.querySelector( '.header-modal' );
  const modalTriggerNode = document.querySelector( '.header .just-burger' );

  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    modalTriggerNode.classList.add( 'is-expanded' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    modalTriggerNode.classList.remove( 'is-expanded' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  initStickyHeader( headerNode, headerTopNode );
  initStickyHeader( contentNode, headerTopNode );
  breakpointChecker( () => {
    closeModal();
    resetOffsetTop( headerNode );
  }, () => {
    resetOffsetTop( headerNode );
  } );

  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    modalNode.getAttribute( 'aria-hidden' ) === 'true' ? openModal() : closeModal();
  } );
};
