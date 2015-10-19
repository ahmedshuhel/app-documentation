export function fixIndent(markdown) {
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
