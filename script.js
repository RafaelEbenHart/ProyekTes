const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

fetch("message.md")
  .then(res => res.text())
  .then(md => {
    document.getElementById("message").innerHTML = marked.parse(md);
  });
