function showContent(event) {
    const contentList = document.getElementsByClassName('content');
    for (item of contentList) {
        if (item.classList.contains('visible') && item.id !== event.target.value) {
            item.classList.remove('visible')
        } else if (item.id === event.target.value) {
            item.classList.add('visible');
        }
    }
}
