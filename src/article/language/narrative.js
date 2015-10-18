import {bindable, processContent, noView, inject} from 'aurelia-framework';
import commonmark from 'commonmark';

@processContent(false)
@noView()
@inject(Element)
export class Narrative {
  @bindable format = 'markdown';
  @bindable version;
  @bindable uid;
  @bindable versionMatches;
  @bindable value;

  constructor(element) {
    this.element = element;

    if(element.innerHTML) {
      this.setContent(element.innerHTML);
    }
  }

  valueChanged(newValue) {
    if(newValue) {
      this.setContent(newValue);
    }
  }

  setContent(markdown) {
    markdown = fixIndent(markdown);
    markdown = fixBlockQuotes(markdown);
    this.element.innerHTML = getHtml(markdown);

    updateAnchorTargets(this.element);
    //makeHeadingsLinkable(this.element);
    applySyntaxHighlighting(this.element);
  }
}

var reader = new commonmark.Parser(),
    writer = new commonmark.HtmlRenderer();

function isExternalLink(url) {
  return ( ( url.indexOf(':') > -1 || url.indexOf('//') > -1 ) && checkDomain(location.href) !== checkDomain(url) );
}

// http://stackoverflow.com/a/1054862/725866
function titleToSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');
}

function getHtml(markdown) {
  return writer.render(reader.parse(markdown));
}

function fixIndent(markdown) {
  /*
  This is intended to remove indentation that is not really part of
  the markdown, to preserve the ability to indent the markup properly.
  In the example below the total indentation will be reduced by 4 characters.
  |
  |<template>
  |  <markdown>
  |    # hello world
  |
  |    lorem ipsum bla bla
  |
  |        var x = 3;
  |
  |  </markdown>
  |</template>
  |
  */
  let result = /^( +)\S/im.exec(markdown);

  if (result) {
    markdown = markdown.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
  }

  return markdown;
}

function fixBlockQuotes(markdown) {
  return markdown.replace(/^(\s*)&gt;/gim, (match, p1) => p1 + '>');
}

function updateAnchorTargets(element) {
  // external links need target="_blank"
  let anchors = element.getElementsByTagName('a');

  for(let i = 0, ii = anchors.length; i < ii; i++) {
    if (!isExternalLink(anchors[i].href)) {
      continue;
    }

    anchors[i].target = '_blank';
  }
}

function makeHeadingsLinkable(element) {
  let headings = element.querySelectorAll('h1,h2,h3,h4,h5,h6');
  let h;
  let title;
  let slug;

  for(let i = 0, ii = headings.length; i < ii; i++) {
    h = headings[i];
    title = h.textContent;
    slug = titleToSlug(title);
    h.id = slug;
    h.innerHTML = `<a id="${slug}" class="anchor" href="#${slug}" aria-hidden="true"><span class="fa fa-link"></span></a>${title}`;
  }
}

function applySyntaxHighlighting(element) {
  let codes = element.getElementsByTagName('code');

  for(let i = 0, ii = codes.length; i < ii; i++) {
    // don't mess with code elements that are not enclosed in a pre.
    if (codes[i].parentNode.tagName !== 'PRE') {
      continue;
    }

    // trim the code to avoid strange appearance with line numbers.
    codes[i].textContent = codes[i].textContent.trim();

    // make sure there's a language-* class.
    if (!/language-/.test(codes[i].className)) {
      codes[i].className += ' language-javascript';
    }

    // // make sure the parent pre has the line-numbers class.
    // if (!/line-numbers/.test(codes[i].parentNode.className))
    //   codes[i].parentNode.className += ' line-numbers';

    // apply syntax highlighting.
    Prism.highlightElement(codes[i]);
  }
}
