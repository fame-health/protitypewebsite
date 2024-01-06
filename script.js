// script.js

const links = [
    { text: "View Mobile", url: "https://www.figma.com/proto/Qwifr05tid3GSH2IferyWB/Untitled?type=design&node-id=1-2&t=JVslt9JKcyKGB2JJ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design" },
    { text: "View Desktop", url: "https://www.figma.com/proto/VpJ2v0WaQx1qdkvCKuxnAd/Untitled?type=design&t=VffQdZwen88rjZp3-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&mode=design" }
    // Tambahkan link lain jika diperlukan
  ];
  
  function createLinkElement(link) {
    const linkItem = document.createElement("div");
    linkItem.classList.add("link-item");
  
    const anchor = document.createElement("a");
    anchor.textContent = link.text;
    anchor.href = link.url;
    anchor.target = "_blank";
  
    linkItem.appendChild(anchor);
    return linkItem;
  }
  
  function renderLinks() {
    const linksContainer = document.querySelector(".links");
  
    links.forEach(link => {
      const linkElement = createLinkElement(link);
      linksContainer.appendChild(linkElement);
    });
  }
  
  renderLinks();
  