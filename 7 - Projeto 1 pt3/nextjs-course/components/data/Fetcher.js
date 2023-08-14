export default async function Fetcher(url) {
  const response = await fetch(url)

  const data = await response.json()

  var array = []

  for(const key in data) {
    array.push({
        id: key,
        ...data[key]
    })
  }

  if (data) {
    return array;
  } else {
    return false;
  }

}

