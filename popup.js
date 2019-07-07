document.addEventListener("DOMContentLoaded", () => {
    [...document.getElementsByClassName("bookmark")].forEach(e => {
        e.addEventListener("click", () => {
            browser.tabs.create({ cookieStoreId: e.dataset.container, url: e.dataset.url });
            window.close();
        });
    });
});