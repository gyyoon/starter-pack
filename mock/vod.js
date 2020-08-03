const contentTypeVod = {
  "content_id": "kawd00680",
  "dvd_id": "KAWD-680",
  "title": "Kawaii* Yura Sakura X S1 Moe Amatsuka. Double Angels. Their First Lesbian Title And Friendly Collaboration 4 Hour Special",
  "images": {
    "jacket_image": {
      "large": "https://pics.r18.com/digital/video/kawd00680/kawd00680pl.jpg",
      "medium": "https://pics.r18.com/digital/video/kawd00680/kawd00680ps.jpg"
    }
  },
  "actresses": [
    {
      "id": "https://pics.r18.com/mono/actjpgs/sakura_yura.jpg",
      "name": "Yura Sakura"
    },
    {
      "id": "https://pics.r18.com/mono/actjpgs/amatuka_moe.jpg",
      "name": "Moe Amatsuka"
    }
  ]
}

module.exports = (current_page = 1, max_page = 15) => {
  const perItems = 60;
  const total = max_page * perItems + 5;
  let result = {
    pagination: {
      current_page,
      max_page,
      total
    },
    content_list: []
  }

  for (let i = 0; i < total; i++) {
    result.content_list.push(contentTypeVod)
  }
  return result;
}