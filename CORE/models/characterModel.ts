
export class characterObject {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  comics: Comics
  constructor(id: number, name: string, description: string, modified: string, path: string, extension: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.modified = modified;
    this.thumbnail = new Thumbnail(path, extension);
  }
}

class Thumbnail {
  path: string
  extension: string
  constructor(path: string, extension: string) {
    this.path = path;
    this.extension = extension;
  }
}

class Comics{
    items: Array<Items>
}

class Items{
  id: number
  name: string
}
