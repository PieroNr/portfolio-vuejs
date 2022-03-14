document.addEventListener('wheel', (e) => {
    document.getElementById('#wrapper').scrollLeft += e.deltaY;
})
