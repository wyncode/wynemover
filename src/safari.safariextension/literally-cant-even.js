(function () {

  walk(document.body)

  // Adapted from: http://is.gd/mwZp7E
  function walk (node) {
    var child, next

    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
      case Node.DOCUMENT_NODE:
      case Node.DOCUMENT_FRAGMENT_NODE:
        child = node.firstChild
        while (child) {
          next = child.nextSibling
          walk(child)
          child = next
        }
        break
      case Node.TEXT_NODE:
        replaceText(node)
        break
    }
  }

  function replaceText (node) {
    node.nodeValue = node.nodeValue.replace(/\bw?in\b/ig, "wyn")
  }
})()
