export function parseResponse (response) {
  const { searchResult } = response.findItemsByKeywordsResponse[0];
  const { item } = searchResult[0];

  const unwrappedChild = el => {
    if (Array.isArray(el)) {
      if (el.length > 1) {
        return el.map(unwrappedChild)
      }
      el = el[0]
    }

    if (el && typeof el === 'object') {
      Object.keys(el).forEach(key => {
        el[key] = unwrappedChild(el[key])
      })
    }
    return el;
  };

  const unwrapped = item.map(unwrappedChild)

  return unwrapped; // an array of items
}
