// script file for paperfanz.github.io

function scrollToElement(eid, blk) {
  document.getElementById(eid).scrollIntoView({
    block: blk,
    behavior: 'smooth'
  });
}
