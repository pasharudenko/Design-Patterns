// const hello = 'hello';
// let html = [];
// html.push('<p>');
// html.push(hello);
// html.push('</p>');
// // console.log(html.join(''));

// const words = ['hello', 'world'];
// html = [];
// html.push('<ul>\n');
// for (let word of words) html.push(`  <li>${word}</li>\n`);
// html.push('</ul>');

class HtmlTemplate {
	constructor(name, children = []) {
		this.name = name;
		this.children = children;
	}

	getHtml(space = 1) {
		let s = '';

		for (let i = 0; i < space; i++) {
			s = s + ' ';
		}



		let htmlString = ``;

		let htmlStringStart = '';
		let htmlStringEnd = '';

		if (typeof this.children === 'string') {
			htmlStringStart = `${s + ' '}<${this.name}>`;
			htmlStringEnd = `</${this.name}>`;
		} else {
			htmlStringStart = `${s}<${this.name}>\n`;
			htmlStringEnd = `${s}</${this.name}>`;
		}

		


		let str = '';
		if (Array.isArray(this.children)) {
			str = this.children.map(child => {
				return child.getHtml(space + 1);
			});
			str = str.join('');
		} else {
			str = this.children;
		}

		htmlString = `${htmlStringStart}${str}${htmlStringEnd}\n`;

		return htmlString;
	}
}

class HtmlTemplateBuilder {
	constructor(name, children) {
		this.root = new HtmlTemplate(name, children);
	}

	addChild(name, children = []) {
		this.root.children.push(new HtmlTemplate(name, children));
		return this;
	}

	addInstanceChild(instance) {
		this.root.children.push(instance.root);
		return this;
	}
}

const html = new HtmlTemplateBuilder('div');
const myLayout = html
	.addChild('h1', 'Heading')
	.addChild('p', 'Paragraph1')
	.addChild('p', 'Paragraph2');

const myBody = new HtmlTemplateBuilder('body');

myBody.addInstanceChild(html);

console.log(myBody.root.getHtml());
