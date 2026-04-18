const forms = document.querySelectorAll(".interest-form");

for (const form of forms) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const optionalField = data.get("website") ? `Website: ${data.get("website")}` : "";
    const postField = data.get("post") ? `Post: ${data.get("post")}` : "";
    const message = data.get("message") || "";
    const entries = [`Name: ${data.get("name") || ""}`, `Email: ${data.get("email") || ""}`];

    if (optionalField) entries.push(optionalField);
    if (postField) entries.push(postField);

    entries.push("", String(message));

    const subject = form.dataset.mailSubject || "Book of Agents";
    const body = encodeURIComponent(entries.join("\n"));
    const url = `mailto:book@intergraph.ai?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = url;
  });
}
