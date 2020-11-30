function highlightToml(content: string) {
    let result = content;
    
    return result;
}

var codes = document.getElementsByClassName("sh-toml");

for(const codeBlock of codes) {
    const content = codeBlock.children[0].innerText;
    codeBlock.children[0].innerHTML = highlightToml(content);
}