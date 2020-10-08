export class UserForm {
  constructor(private parent: Element) {}

  template(): string {
    return `
        <h1>
        User from
        </h1>
        <input type='text' placeholder='Please enter your name' />
        `;
  }

  render(): void {
    const html = this.template();
    const template = document.createElement("template");
    template.innerHTML = html;

    this.parent.appendChild(template.content);
  }
}
