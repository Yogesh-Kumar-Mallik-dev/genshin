import os
import json
import urllib.request
import urllib.parse
import concurrent.futures

os.makedirs('public/assets/map/regions', exist_ok=True)
os.makedirs('public/assets/map/pins', exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

MAP_FILES = {
    'mondstadt': 'Mondstadt_Map.jpg',
    'liyue': 'Liyue_Map.jpg',
    'inazuma': 'Inazuma_Map.jpg',
    'sumeru': 'Sumeru_Map.jpg',
    'fontaine': 'Fontaine_Map.jpg',
    'natlan': 'Natlan_Map.png',
}

PIN_FILES = {
    'teleport': 'UI_Teleport_Waypoint.png',
    'statue': 'UI_Statue_of_The_Seven.png',
    'domain': 'UI_Domains.png',
    'boss': 'Andrius_Map_Marker_Icon.png',
    'anemoculus': 'Item_Anemoculus.png',
    'geoculus': 'Item_Geoculus.png',
    'electroculus': 'Item_Electroculus.png',
    'dendroculus': 'Item_Dendroculus.png',
    'hydroculus': 'Item_Hydroculus.png',
    'pyroculus': 'Item_Pyroculus.png',
    'shrine': 'Item_Mondstadt_Shrine_of_Depths_Key.png',
    'ore': 'Icon_Mining_Outcrop.svg',
}

def normalize_title(t):
    return urllib.parse.unquote(t).replace('_', ' ')

def fetch_fandom_urls(wiki_files):
    titles = [f"File:{f}" for f in wiki_files]
    result = {}
    base_url = 'https://genshin-impact.fandom.com/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles=' + '|'.join([urllib.parse.quote(t) for t in titles])
    req = urllib.request.Request(base_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            for _, pdata in data.get('query', {}).get('pages', {}).items():
                title = pdata.get('title')
                imginfo = pdata.get('imageinfo', [{}])[0]
                url = imginfo.get('url')
                if url and title:
                    result[normalize_title(title)] = url
    except Exception as e:
        print(f"Error querying batch: {e}")
    return result

def download_file(target_path, url):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        return f'Skipped (exists): {target_path}'
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=30) as resp, open(target_path, 'wb') as f:
            f.write(resp.read())
        return f'✓ Downloaded: {target_path} ({os.path.getsize(target_path)} bytes)'
    except Exception as e:
        return f'✗ Failed {target_path} from {url}: {e}'

def main():
    all_files = list(MAP_FILES.values()) + list(PIN_FILES.values())
    print(f"Fetching URLs for {len(all_files)} map files...")
    url_map = fetch_fandom_urls(all_files)
    print(f"Retrieved {len(url_map)} image URLs.")

    tasks = []
    # Maps
    for key, wiki_file in MAP_FILES.items():
        ext = wiki_file.split('.')[-1].lower()
        title_key = normalize_title(f"File:{wiki_file}")
        url = url_map.get(title_key)
        if url:
            target = f"public/assets/map/regions/{key}.{ext}"
            tasks.append((target, url))
        else:
            print(f"⚠️ Missing URL for map: {key} ({title_key})")

    # Pins
    for key, wiki_file in PIN_FILES.items():
        ext = wiki_file.split('.')[-1].lower()
        title_key = normalize_title(f"File:{wiki_file}")
        url = url_map.get(title_key)
        if url:
            target = f"public/assets/map/pins/{key}.{ext}"
            tasks.append((target, url))
        else:
            print(f"⚠️ Missing URL for pin: {key} ({title_key})")

    print(f"Starting download of {len(tasks)} assets...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        futures = [executor.submit(download_file, target, url) for target, url in tasks]
        for f in concurrent.futures.as_completed(futures):
            print(f.result())

    print("Finished downloading all map and pin assets!")

if __name__ == '__main__':
    main()
