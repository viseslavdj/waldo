function clear() {
  const content = document.getElementById("content");
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
};

export { clear };