import {sync, bindable, inject} from 'aurelia-framework';
import {Language} from 'services/language';

let map = Array.prototype.map;

@inject(Element, Language)
export class Example {
  @bindable selectedSource;
  @bindable title;

  constructor(element, language) {
    this.element = element;
    this.language = language;
  }

  attached() {
    this.code = this.element.getElementsByTagName('code')[0];
    this.availableSources = map.call(this.element.getElementsByTagName('source-code'), x => x.au.controller.model);
    this.languageSubscription = this.language.onChange(() => this.selectSourceForLanguage())
    this.selectSourceForLanguage();
  }

  detached() {
    this.languageSubscription.dispose();
  }

  selectSourceForLanguage() {
    let found;
    let priorities = [
      this.language.current,
      'ES 2016',
      'ES 2015',
      'TypeScript',
      'HTML'
    ];

    for (let i = 0, ii = priorities.length; i < ii; ++i) {
      found = this.availableSources.find(x => x.lang === priorities[i]);
      if (found) {
        break;
      }
    }

    this.select(found);
  }

  select(source) {
    this.selectedSource = source;
    source.load().then(content => {
      this.code.innerHTML = fixIndent(content);
      applySyntaxHighlighting(source.lang, this.code);
    });
  }
}

function applySyntaxHighlighting(language, element) {
  // trim the code to avoid strange appearance with line numbers.
  element.textContent = element.textContent.trim();
  element.className = (languageLookup[language] || 'language-javascript');
  Prism.highlightElement(element);
}

let languageLookup = {
  'HTML': 'language-markup'
};

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
