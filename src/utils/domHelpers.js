import computeScrollIntoView from 'compute-scroll-into-view'

function scrollTo(node) {
  computeScrollIntoView(node, {
    scrollMode: 'if-needed',
    block: 'nearest',
    inline: 'nearest',
  }).forEach(({el, top, left}) => {
    el.scrollTop = top
    el.scrollLeft = left
  })
}

export {scrollTo}
