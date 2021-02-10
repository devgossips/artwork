import path from 'path';
import fs from 'fs';

const artworksPath = path.join(process.cwd(), 'artworks');

export async function getAllArtworkIds(): Promise<string[]> {
  const fileNames = fs.readdirSync(artworksPath);
  const artworkIds = fileNames.map((fileName) =>
    fileName.replace(/\.json$/, '')
  );

  return artworkIds;
}

export async function getArtwork(artworkId: string) {
  const artworkJSON = fs.readFileSync(
    path.join(artworksPath, `${artworkId}.json`),
    { encoding: 'utf-8' }
  );

  return JSON.parse(artworkJSON);
}
